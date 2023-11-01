"use client"

import Image from "next/image"
import Link from "next/link"

import { useContext, useEffect, useRef, useState } from 'react'
import { MarketplaceContext } from "../../../contexts/Marketplace";


function CreatePageHeader(){
    const {account,connectWallet} = useContext(MarketplaceContext)

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
                                    <button  onClick={connectWallet}  className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>
                                {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                                    </span></button>                                        
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