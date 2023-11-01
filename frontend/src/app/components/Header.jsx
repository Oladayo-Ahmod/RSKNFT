"use client"

import { useContext, useEffect, useRef, useState } from 'react'
import { MarketplaceContext } from "../../../contexts/Marketplace";
import Link from 'next/link';
import Image from "next/image"



function Header(){

    const {account,connectWallet} = useContext(MarketplaceContext)

     // wallet connection
     useEffect(()=>{
        connectWallet()
      },[])


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
                           
                        </div>
                        <div className="de-flex-col header-col-mid">
                            {/* mainmenu begin */}
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
                            </ul>
                            <div className="menu_side_area">
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
    </header>
    )
}

export default Header