// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';


contract RSKNFT is ERC721URIStorage , ReentrancyGuard {

     /// @notice implement the Counter libarary for counting tokenId
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId; // tokenId
    Counters.Counter  private _soldItems; // total items
    uint8 public constant OPEN_STATUS = 1; // open status
    uint8 public constant COMPLETED_STATUS = 2; // close status
    uint256 public minAuctionIncrement = 10; // 10 percent
    address payable owner;


    mapping (uint256 => NFT) NFT_ID;
    mapping(uint256 => Listing) public listings;
    mapping(uint256 => mapping(address => uint256)) public bids;
    mapping(uint256 => address) public highestBidder;

    // nft struct
     struct NFT {
        address owner;
        address seller;
        uint256 price;
        bool sold;
        uint256 tokenId;
    }

    struct Listing {
        address seller;
        address owner;
        uint256 tokenId;
        uint256 price; // display price
        uint256 netPrice; // actual price
        uint256 startAt;
        uint256 endAt; 
        uint8 status;
    }

      /// @notice NFT event action
      /// @dev handled all events related to nfts in the contract
      /// @param tokenId, @param owner, @param seller, @param price, @param sold
    event NFT_Action(
        uint256 tokenId,
        address owner,
        address seller,
        uint256 price,
        bool sold,
        string message
    );

    /// @dev Auction creation events
    /// @param listingId, @param seller, @param price, @param tokenId, @param startAt, @param endAt, @param message
    event AuctionCreated(
        uint256 listingId, 
        address indexed seller, 
        uint256 price, 
        uint256 tokenId, 
        uint256 startAt, 
        uint256 endAt,
        string message    
    );

    /// @dev Auction completed event
    /// @param listingId, @param seller ,  @param bidder, @param bid, @param message
    event AuctionCompleted(
        uint256 listingId,
        address indexed seller, 
        address indexed bidder, 
        uint256 bid,
        string message
    );

    /// @dev bidding event
    /// @param listingId, @param bidder, @param bid, @param message
    event BidCreated(
        uint256 listingId, 
        address indexed bidder, 
        uint256 bid,
        string message
    );


     constructor() ERC721("CeloNFT", "ASG"){
        owner = payable(msg.sender);
    }

      /// @dev mint token , set tokenURI and return currentTokenId
     /// @param _tokenURI, a tokenURI obtained from IPFS
     /// @return currentTokenId, current token id
    function mintToken(string memory _tokenURI, uint256 price) external returns(uint256) {
        _tokenId.increment(); // increment tokenId
        uint256 currentTokenId = _tokenId.current(); // get current tokenId
        _mint(msg.sender,currentTokenId); // mint token
        _setTokenURI(currentTokenId,_tokenURI); // set token uri from IPFS
         createNFT(currentTokenId,price);
        return currentTokenId;
    }

     /// @dev mint token , set tokenURI and return currentTokenId
     /// @param _tokenURI, a tokenURI obtained from IPFS
     /// @return currentTokenId, current token id
    function mintAuctionToken(string memory _tokenURI, uint256 price, uint256 durationInSeconds) external returns(uint256) {
        _tokenId.increment(); // increment tokenId
        uint256 currentTokenId = _tokenId.current(); // get current tokenId
        _mint(msg.sender,currentTokenId); // mint token
        _setTokenURI(currentTokenId,_tokenURI); // set token uri from IPFS
         createAuctionListing(price,currentTokenId,durationInSeconds);
        return currentTokenId;
    }

    function createNFT(uint256 tokenId, uint256 price) internal {
    uint256 currentTokenId = _tokenId.current();
    NFT_ID[currentTokenId] = NFT(
        payable(address(this)),
        payable(msg.sender),
        price,
        false,
        tokenId
    );

        _transfer(msg.sender,address(this),tokenId); // transfer ownership of nft to the marketplace owner

        emit NFT_Action(
            tokenId,
            address(this),
            msg.sender,
            price,
            false,
            "NFT created successfuly"
        );

    }


        /// @dev create auction listing
        /// @param price, @param tokenId, @param durationInSeconds
        /// @return listingId
     function createAuctionListing (uint256 price, uint256 tokenId, uint256 durationInSeconds) public returns (uint256) {
        uint256 currentTokenId = _tokenId.current();
        uint256 listingId = currentTokenId;
        uint256 startAt = block.timestamp;
        uint256 endAt = startAt + durationInSeconds;

        listings[listingId] = Listing({
            seller: payable(msg.sender),
            owner : payable(address(this)),
            tokenId: tokenId,
            price: price,
            netPrice: price,
            status: OPEN_STATUS,
            startAt: startAt,
            endAt: endAt
        });

        _transfer(msg.sender, address(this), tokenId);

        emit AuctionCreated(
            listingId, 
            msg.sender, 
            price, 
            tokenId, 
            startAt, 
            endAt,
            "Auction created successfully"
            );

        return listingId;
    }

    /// @dev Nft auction completion functionality
    /// @param listingId , listingId
    function completeAuction(uint256 listingId) public payable nonReentrant {
        require(!isAuctionOpen(listingId), 'auction is still open');

        Listing storage listing = listings[listingId];
        address winner = highestBidder[listingId]; 
        require(
            msg.sender == listing.seller || msg.sender == winner, 
            'only seller or winner can complete auction'
        );

        if(winner != address(0)) {
           _transfer(address(this), winner, listing.tokenId);

            uint256 amount = bids[listingId][winner]; 
            bids[listingId][winner] = 0;
            _transferFund(payable(listing.seller), amount);

        } else {
            _transfer(address(this), listing.seller, listing.tokenId);
        }

        listing.status = COMPLETED_STATUS;

        emit AuctionCompleted(
            listingId,
            listing.seller, 
            winner, 
            bids[listingId][winner],
            "Auction completed successfully"
            );
    }

    /// @dev bidding functionality
    /// @param listingId, listing ID
    function bid(uint256 listingId) public payable nonReentrant {
        require(isAuctionOpen(listingId), 'auction has ended');
        Listing storage listing = listings[listingId];
        require(msg.sender != listing.seller, "cannot bid on what you own");

        uint256 newBid = bids[listingId][msg.sender] + msg.value;
        require(newBid >= listing.price, "cannot bid below the latest bidding price");

        bids[listingId][msg.sender] += msg.value;
        highestBidder[listingId] = msg.sender;

        uint256 incentive = listing.price / minAuctionIncrement;
        listing.price = listing.price + incentive;

        emit BidCreated(
            listingId, 
            msg.sender, 
            newBid,
            "Bid created successfully"
            );
    }

    

     /// @dev NFT sales functionality and process payment to seller
    /// @param tokenId,  NFT token id
    function sellNFT(uint256 tokenId) external payable {
        uint256 _price = NFT_ID[tokenId].price;
        address seller = NFT_ID[tokenId].seller;
        require(msg.value == _price, "incorrect amount");
        (bool success,) = payable(seller).call{value : _price}(""); // make payment to seller
        require(success, "payment failed");
        NFT_ID[tokenId].owner = payable(msg.sender);
        NFT_ID[tokenId].seller = payable(address(0)); // set seller to empty address
        NFT_ID[tokenId].sold = true;
        _soldItems.increment();
        _transfer(address(this),msg.sender,tokenId); // transfer ownership to sender

        emit NFT_Action(
            tokenId,
            msg.sender,
            address(0),
            _price,
            true,
            "Sold NFT successfully"
        );
    }

      /// @notice All nfts retrieval,
    /// @return props
    function allNfts() external view returns (NFT[] memory) {
        uint currentTokenId = _tokenId.current();
        NFT[] memory items = new NFT[](currentTokenId);
        for (uint i = 0; i < items.length; i++) {
            items[i] = NFT_ID[i + 1];
        }

        return items;
    }

     /// @notice retrieval of single nft
    /// @return props
    function singleNFT(uint256 tokenId) external view returns(NFT memory props){
        props = NFT_ID[tokenId];
    }

      /// @notice retrieval of all purchased nfts that belong to a user
    /// @return props
    function userNfts() external view returns (NFT[] memory) {
    uint currentTokenId = _tokenId.current();
    uint itemCount = 0;

    for (uint i = 1; i <= currentTokenId; i++) {
        if (NFT_ID[i].owner == msg.sender) {
            itemCount++;
        }
    }

    NFT[] memory items = new NFT[](itemCount);
    itemCount = 0;

    // Populate the array with user's NFTs
    for (uint i = 1; i <= currentTokenId; i++) {
        if (NFT_ID[i].owner == msg.sender) {
            items[itemCount] = NFT_ID[i];
            itemCount++;
        }
    }

    return items;
}

    /// @notice retrieve nft price
    /// @param tokenId ,tokenId
    /// @return uint256
    function getNftPrice(uint256 tokenId) external view returns(uint256){
        return NFT_ID[tokenId].price;
    }

    /// @dev check if auction is open
    /// @param id , auction id
    function isAuctionOpen(uint256 id) public view returns (bool) {
        return
            listings[id].status == OPEN_STATUS &&
            listings[id].endAt > block.timestamp;
    }

    /// @dev check if auction is expired
    /// @param id , auction id
    function isAuctionExpired(uint256 id) public view returns (bool) {
        return listings[id].endAt <= block.timestamp;
    }

    /// @dev fund transfer
    /// @param to, @param amount
    function _transferFund(address payable to, uint256 amount) internal {
        if (amount == 0) {
            return;
        }
        require(to != address(0), 'Error, cannot transfer to address(0)');

        (bool transferSent, ) = to.call{value: amount}("");
        require(transferSent, "Error, failed to send Ether");
    }


    
}