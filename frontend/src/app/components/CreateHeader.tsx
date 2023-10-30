"use client"

import Image from "next/image"

function CreatePageHeader(){
    return(
       <div>
            <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <a href="index.html">
                                            <Image alt="" src="images/logo-1.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <a href="index.html">Home<span></span></a>
                                        <ul className="mega">
                                            <li>
                                                <div className="container">
                                                    <div className="menu-content">
                                                        <div className="row g-0">
                                                            <div className="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li className="menu-title">New Homepage</li>
                                                                    <li><a href="07_modern-index-2.html"><strong>New</strong>Modern Homepage 2</a></li>
                                                                    <li><a href="index.html"><strong>New</strong>Modern Homepage 1</a></li>
                                                                    <li><a href="wide_index-3.html"><strong>New</strong>Wide Homepage 3</a></li>
                                                                    <li><a href="wide_index-2.html"><strong>New</strong>Wide Homepage 2</a></li>
                                                                    <li><a href="wide_index.html">Wide Homepage 1</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li className="menu-title">Homepage Clivus Scheme</li>
                                                                    <li><a href="06_clivus-index.html">Homepage Clivus 1</a></li>
                                                                    <li><a href="06_clivus-index-2.html">Homepage Clivus 2</a></li>
                                                                    <li><a href="06_clivus-index-3.html"><strong>New</strong>Homepage Clivus 3</a></li>
                                                                    <li><a href="06_clivus-index-4.html"><strong>New</strong>Homepage Clivus 4</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li className="menu-title">Homepage Light Scheme</li>
                                                                    <li><a href="index-1.html">Homepage Light 1</a></li>
                                                                    <li><a href="index-2.html">Homepage Light 2</a></li>
                                                                    <li><a href="index-3.html">Homepage Light 3</a></li>
                                                                    <li><a href="index-4.html">Homepage Light 4</a></li>
                                                                    <li><a href="index-5.html">Homepage Light 5</a></li>
                                                                    <li><a href="index-6.html">Homepage Light 6</a></li>
                                                                    <li><a href="index-7.html">Homepage Light 7</a></li>
                                                                    <li><a href="index-8.html">Homepage Light 8</a></li>
                                                                    <li><a href="index-9.html">Homepage Light 9</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li className="menu-title">Homepage Dark Scheme</li>
                                                                    <li><a href="02_dark-index.html">Homepage Dark 1</a></li>
                                                                    <li><a href="02_dark-index-2.html">Homepage Dark 2</a></li>
                                                                    <li><a href="02_dark-index-3.html">Homepage Dark 3</a></li>
                                                                    <li><a href="02_dark-index-4.html">Homepage Dark 4</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li className="menu-title">Homepage Grey Scheme</li>
                                                                    <li><a href="03_grey-index.html">Homepage Grey 1</a></li>
                                                                    <li><a href="03_grey-index-2.html">Homepage Grey 2</a></li>
                                                                    <li><a href="03_grey-index-3.html">Homepage Grey 3</a></li>
                                                                    <li><a href="03_grey-index-4.html">Homepage Grey 4</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li className="menu-title">Homepage Black Scheme</li>
                                                                    <li><a href="05_black-index.html">Homepage Black 1</a></li>
                                                                    <li><a href="05_black-index-2.html">Homepage Black 2</a></li>
                                                                    <li><a href="05_black-index-3.html">Homepage Black 3</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li className="menu-title">Homepage Retro Scheme</li>
                                                                    <li><a href="04_retro-index.html">Homepage Retro 1</a></li>
                                                                    <li><a href="04_retro-index-2.html">Homepage Retro 2</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="explore.html">Explore<span></span></a>
                                        <ul>
                                            <li><a href="wide_explore.html"><strong>New</strong>Wide Explore</a></li>
                                            <li><a href="explore.html">Explore</a></li>
                                            <li><a href="explore-2.html">Explore 2</a></li>
                                            <li><a href="explore-music-nft.html">New: Music</a></li>
                                            <li><a href="explore-video.html">New: Video</a></li>
                                            <li><a href="collection.html">Collections</a></li>
                                            <li><a href="live-auction.html">Live Auction</a></li>
                                            <li><a href="item-details.html">Item Details</a></li>
                                            <li><a href="help-center.html">Help Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages<span></span></a>
                                        <ul>
                                            <li><a href="author.html">Author</a></li>
                                            <li><a href="profile.html">Profile</a></li>
                                            <li><a href="wallet.html">Wallet</a></li>
                                            <li><a href="create-options.html">Create</a></li>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="login-2.html">Login 2</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Stats<span></span></a>
                                        <ul>
                                            <li><a href="activity.html">Activity</a></li>
                                            <li><a href="rankings.html">Rankings</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Elements<span></span></a>
                                        <ul>
                                            <li><a href="icons-elegant.html">Elegant Icons</a></li>
                                            <li><a href="icons-etline.html">Etline Icons</a></li>
                                            <li><a href="icons-font-awesome.html">Font Awesome Icons</a></li>
                                            <li><a href="accordion.html">Accordion</a></li>
                                            <li><a href="alerts.html">Alerts</a></li>
                                            <li><a href="counters.html">Counters</a></li>
                                            <li><a href="modal.html">Modal</a></li>
                                            <li><a href="popover.html">Popover</a></li>
                                            <li><a href="pricing-table.html">Pricing Table</a></li>
                                            <li><a href="progress-bar.html">Progress Bar</a></li>
                                            <li><a href="tabs.html">Tabs</a></li>
                                            <li><a href="tooltips.html">Tooltips</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                    <div className="de-login-menu">
                                        <a href="create-options.html" className="btn-main"><i className="fa fa-plus"></i><span>Create</span></a>

                                        <span id="de-click-menu-notification" className="de-menu-notification">
                                            <span className="d-count">8</span>
                                        <i className="fa fa-bell"></i>
                                        </span>

                                        <span id="de-click-menu-profile" className="de-menu-profile">                           
                                            <Image src="images/author_single/author_thumbnail.jpg" className="Image-fluid" alt="" />
                                        </span>

                                        <div id="de-submenu-notification" className="de-submenu">
                                            <div className="de-flex">
                                                <div>
                                                    <h4>Notifications</h4>
                                                </div>
                                                <a href="#">Show all</a>
                                            </div>

                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <Image className="lazy" src="images/author/author-2.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Mamie Barnett</b> started following you</span>
                                                            <span className="d-time">1 hour ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image className="lazy" src="images/author/author-3.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Nicholas Daniels</b> liked your item</span>
                                                            <span className="d-time">2 hours ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image className="lazy" src="images/author/author-4.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Lori Hart</b> started following you</span>
                                                            <span className="d-time">18 hours ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image className="lazy" src="images/author/author-5.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Jimmy Wright</b> liked your item</span>
                                                            <span className="d-time">1 day ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image className="lazy" src="images/author/author-6.jpg" alt="" />
                                                        <div className="d-desc">
                                                            <span className="d-name"><b>Karla Sharp</b> started following you</span>
                                                            <span className="d-time">3 days ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="de-submenu-profile" className="de-submenu">
                                            <div className="d-name">
                                                <h4>Monica Lucas</h4>
                                                <a href="profile.html">Set display name</a>
                                            </div>
                                            <div className="spacer-10"></div>
                                            <div className="d-balance">
                                                <h4>Balance</h4>
                                                12.858 ETH
                                            </div>
                                            <div className="spacer-10"></div>
                                            <div className="d-wallet">
                                                <h4>My Wallet</h4>
                                                <span id="wallet" className="d-wallet-address">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                                                <button id="btn_copy" title="Copy Text">Copy</button>
                                            </div>

                                            <div className="d-line"></div>

                                            <ul className="de-submenu-profile">
                                                    <li><a href="author.html"><i className="fa fa-user"></i> My profile</a> </li>
                                                    <li><a href="profile.html"><i className="fa fa-pencil"></i> Edit profile</a> </li>
                                                    <li><a href="#"><i className="fa fa-sign-out"></i> Sign out</a> </li>
                                            </ul>
                                        </div>
                                        <span id="menu-btn"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </header>
       </div>

    )
}

export default CreatePageHeader