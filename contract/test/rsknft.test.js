const { ethers } = require('hardhat')
const {assert,expect} = require('chai')

describe('RSKNFT', ()=>{
    let provider, contract
    beforeEach(async ()=>{
        provider = await ethers.getContractFactory('RSKNFT')
        contract = await provider.deploy()
    })

    describe('contract deployment', ()=>{
        // correct constructor
        it("has correct constructor", async ()=>{
            const name = await contract.name()
            assert.equal(name,"RSKNFT")
        })

        // tests for successfully deployment
        it("deploys contract successfully", async ()=>{
            const address = await contract.deployed()
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,undefined)
            assert.notEqual(address,null)
        })
    })

    // NFT functionalities
    describe('NFT functionality', ()=>{
         // creates token and returns correct ID
         it("mint token and create nft", async ()=>{
            const price = ethers.utils.parseEther('2')
            const tx = await contract.mintToken("https://test-url",price)
            const receipt = await tx.wait()
            const events = receipt.events.find(event => event.event === 'NFT_Action');
            assert.equal(events.args[0],1) // token id equals
        })

        // creates nft auction token and returns correct ID
        it("mints oken and create nft auction", async ()=>{
            const price = ethers.utils.parseEther('2')
            const tx = await contract.mintAuctionToken("https://test-url",price,3600)
            const receipt = await tx.wait()
            const events = receipt.events.find(event => event.event === 'AuctionCreated');
            assert.equal(events.args[0],1) // token id equals
        })       

    })

      // bidding
      describe("bidding functionality", function(){
        it("it can bid", async ()=>{
            let [,bidder] = await ethers.getSigners()
            const price = ethers.utils.parseEther('2')
            const tx = await contract.mintAuctionToken("https://test-url",price,3600)
            await tx.wait()
            const bid = await contract.connect(bidder).bid(1, {value : price})
            const receipt = await bid.wait()
            const events = receipt.events.find(event => event.event === 'BidCreated');
            assert.equal(events.args[0],1)
        })

        it("it cannot bid below previous bidder", async ()=>{
            let [,bidder1,bidder2] = await ethers.getSigners()
            const price = ethers.utils.parseEther('3')
            const tx = await contract.mintAuctionToken("https://test-url",price,3600)
            await tx.wait()
            await contract.connect(bidder1).bid(1, {value : ethers.utils.parseEther('4')})
            try {
                await contract.connect(bidder2).bid(1, {value : ethers.utils.parseEther('3')})
            } catch (error) {
                expect(error.message).to.include('cannot bid below the latest bidding price')
            }
        })
    })

     // NFT sales
     it("it sells nft",async ()=>{
        const price = ethers.utils.parseEther('2')
        await contract.mintToken("https://test-url",price)
        const listedPrice = await contract.getNftPrice('1') // retrieve nft price
        const tx = await contract.sellNFT(1,{value :listedPrice})
        const receipt = await tx.wait()
        const events = receipt.events.find(event => event.event === 'NFT_Action');
        assert.equal(events.args[0],1) // token id equals
        assert.equal(events.args[4],true) // sold equals true
    })

     // retrieve all nfts
     it("it retrieves all nfts", async ()=>{
        const price = ethers.utils.parseEther('1')
        const [, firstSeller,secondSeller,buyer] = await ethers.getSigners()
        const account1 = contract.connect(firstSeller)
        await account1.mintToken("https://url1.com",price) // create first item
        const account2 = contract.connect(secondSeller)
        await account2.mintToken("https://url2.com",price) // create second item
        await contract.connect(buyer).sellNFT(1,{value :price}) // buy one of the created item
        const nfts = await contract.allNfts()
        console.log(` all nfts ${nfts}`);

    })

     // retrieves single nft
     it("it retrieves single nft",async ()=>{
        const price = ethers.utils.parseEther('1')
        await contract.mintToken("https://test-url",price)
        const nft = await contract.singleNFT('1');
        console.log(` single nft ${nft}`);
     })

    // retrieves all of purchased nfts of a single user
    it("retrieves user nfts", async()=>{
        const price = ethers.utils.parseEther('1')
        const [, firstSeller,secondSeller,buyer] = await ethers.getSigners()
        const account1 = contract.connect(firstSeller)
        await account1.mintToken("https://test1.com",price) // create first item
        const account2 = contract.connect(secondSeller)
        await account2.mintToken("https://test2.com",price) // create second item
        await contract.connect(buyer).sellNFT(1,{value :price}) // buy one of the created nfts
        const nfts = await contract.connect(buyer).userNfts()
        console.log(` all purchased nfts by buyer ${nfts}`);
    })


})