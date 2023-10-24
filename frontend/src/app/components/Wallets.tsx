"use client"

import Image from "next/image"

function Wallets(){
    return (
        
        <section aria-label="section" className="mt-20 no-top no-bottom">
            <style jsx>
                {
                `
                .box-url{
                    text-decoration : none;
                }
                `
                }

            </style>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/1.png" alt="" className="mb20" width={70} height={70}  />
                            <h4>Metamask</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/2.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Bitski</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/3.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Fortmatic</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/4.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>WalletConnect</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/5.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Coinbase </h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 " >
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/6.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Arkane</h4>
                        </a>
                    </div>

                </div>
            </div>
    
        </section>
    )
}

export default Wallets