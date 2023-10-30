"use client"

import Image from "next/image"
import Link from "next/link"


function CreatePageHeader(){
    return(
    //    <div>
            <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <a href="index.html">
                                            <Image alt="" src="/logo-1.png" width={35} height={35} />
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
                                        <Link href='/'>Home<span></span></Link>
                                    </li>
                                    <li>
                                        <Link href={'/create'}>Create<span></span></Link>
                                    </li>
                                    <li>
                                    <Link href={'/nfts'}>My NFTs<span></span></Link>
                                    </li>
                                    {/* <li>
                                        <a href="#">Elements<span></span></a>
                                       
                                    </li> */}
                                </ul>
                                <div className="menu_side_area">
                                    <div className="de-login-menu">
                                        <a href="create-options.html" className="btn-main"><i className="fa fa-plus"></i><span>Create</span></a>
                                        
                                        <span id="menu-btn"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
    //    </div>

    )
}

export default CreatePageHeader