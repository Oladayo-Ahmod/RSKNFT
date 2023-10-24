"use client"

import React, { useEffect } from 'react'
import Image from "next/image"
import { Swiper } from 'swiper/react'
import 'swiper/css'
import { SwiperSlide } from 'swiper/react'



function Content(){
    return(
        <>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper)=> console.log('swiper change')}
            onSwiper={(swiper)=> console.log('swiper set')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
            <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="section-hero" className="no-top no-bottom mt90 sm-mt-0" aria-label="section">
            <div className="m-5 padding30 br-15 bg-custom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-sm-30">
                            <h1>Explore, collect, and sell extraordinary <span className="text-gradient">NFTs</span></h1>
                            <p className="lead">
                                Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.</p>
                            <a href="explore.html" className="btn-main btn-lg">Explore</a>&nbsp;&nbsp;
                            <a href="login.html" className="btn-main btn-lg btn-light">Sell</a>
                        </div>

                        <div className="col-lg-6">
                            <div className="d-carousel">
                                <div id="item-carousel-big-type-2" className="owl-carousel owl-center" >
                                    <Swiper >
                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Blue Nomad</span>
                                                <span className="nft_pic_by">Mamie Barnett</span>
                                            </span>
                                        
                                            <div className="nft_pic_wrap">
                                                <Image src={"/carousel/crs-12.jpg"} className="lazy Image-fluid" width={546} height={546} alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Cytotoxin</span>
                                                <span className="nft_pic_by">Monica Lucas</span>
                                            </span>
                                        
                                            <div className="nft_pic_wrap">
                                                <Image src="/carousel/crs-13.jpg" width={546} height={546} className="lazy Image-fluid" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Diminishable</span>
                                                <span className="nft_pic_by">Nicholas Daniels</span>
                                            </span>
                                        
                                            <div className="nft_pic_wrap">
                                                <Image width={546} height={546} src="/carousel/crs-16.jpg" className="lazy Image-fluid" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Manganite</span>
                                                <span className="nft_pic_by">Fred Ryan</span>
                                            </span>
                                            
                                            <div className="nft_pic_wrap">
                                                <Image src="/carousel/crs-17.jpg" width={546} height={546} className="lazy Image-fluid" alt="" />  
                                            </div>
                                        </a>
                                    </div>


                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Elutriator</span>
                                                <span className="nft_pic_by">Lori Hart</span>
                                            </span>
                                            
                                            <div className="nft_pic_wrap">
                                                <Image width={546} height={546} src="/carousel/crs-15.jpg" className="lazy Image-fluid" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="nft_pic mod-b br-15">
                                        <a href="07_modern-collection.html">
                                            <span className="nft_pic_info">
                                                <span className="nft_pic_title">Forest Women</span>
                                                <span className="nft_pic_by">Fred Ryan</span>
                                            </span>
                                            
                                            <div className="nft_pic_wrap">
                                                <Image width={546} height={546} src="/carousel/crs-14.jpg" className="lazy Image-fluid" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    </Swiper>
                                  

                                </div>
                                <div className="d-arrow-left mod-a"><i className="fa fa-angle-left"></i></div>
                                <div className="d-arrow-right mod-a"><i className="fa fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section aria-label="section" className="mt-20 no-top no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay=".2s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/1.png" alt="" className="mb20" width={70} height={70}  />
                            <h4>Metamask</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay=".4s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/2.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Bitski</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay=".6s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/3.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Fortmatic</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay=".8s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/4.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>WalletConnect</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay="1s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/5.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Coinbase Wallet</h4>
                        </a>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-6 mb30 wow fadeInRight" data-wow-delay="1.2s">
                        <a className="box-url style-2" href="login.html">
                            <Image src="/wallet/6.png" alt="" className="mb20"  width={70} height={70}  />
                            <h4>Arkane</h4>
                        </a>
                    </div>

                </div>
            </div>
        </section>

       

        </div>
        </>
    )
}

export default Content