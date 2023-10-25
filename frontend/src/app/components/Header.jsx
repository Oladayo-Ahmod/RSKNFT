import Image from "next/image"

function Header(){
    return (
        <header className="header-light scroll-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex sm-pt10">
                        <div className="de-flex-col">
                            <div className="de-flex-col">
                                {/* logo begin */}
                                <div id="logo">
                                    <a href="index.html">
                                        <Image alt="" className="logo" src={"/logo-7-light.png"} width={167} height={36} />
                                        <Image alt="" className="logo-2" src="/logo-7.png" width={167} height={36} />
                                    </a>
                                </div>
                                {/* logo close */}
                            </div>
                            <div className="de-flex-col">
                                <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                            </div>
                        </div>
                        <div className="de-flex-col header-col-mid">
                            {/* mainmenu begin */}
                            <ul id="mainmenu">
                                <li>
                                    <a href="index.html">Home<span></span></a>
                                </li>
                                <li>
                                    <a href="explore.html">Explore<span></span></a>
                                    
                                </li>
                                <li>
                                    <a href="#">Pages<span></span></a>
                                 
                                </li>
                                <li>
                                    <a href="#">Stats<span></span></a>
                                </li>
                                <li>
                                    <a href="#">Elements<span></span></a>
                                   
                                </li>
                            </ul>
                            <div className="menu_side_area">
                                <a href="07_modern-wallet.html" className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                <span  id="switch_scheme">
                                    <i className="ss_dark fa fa-moon-o"></i>
                                    <i className="ss_light fa fa-sun-o"></i>
                                </span>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header