"use client"
import Image from 'next/image'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import { SwiperSlide } from 'swiper/react'
import { Navigation,Scrollbar,Autoplay } from 'swiper/modules'

function TrendingNFT(){
    return (
        <>
        <style>
            {
            `
            .nft__item_wrap{
                height: 224px !important;
                background-size: cover !important;
            }
            
            .nft__item img, .nft__item video{
                display : block;
            }
            .d-item{
                display : block;
                width :280px !important;
                background-size : cover;
            }
            .nft__item .s2{
                width :300px;
            }
            a{
                text-decoration : none;
            }
            `
            }
        </style>
            <section id="section-trending" className="pt40 no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Trending NFTs</h2>
                            <Swiper 
                                modules={[Navigation, Scrollbar,Autoplay]}
                                navigation
                                slidesPerView={4}
                                autoplay={{delay: 3000}}
                                onSlideChange={(swiper)=> console.log('swiper change')}
                                onSwiper={(swiper)=> console.log('swiper set')}
                            >

                            <div id="items-carousel-s2" className="owl-carousel wow fadeIn" style={{'visibility':'visible'}}>
                                {/* nft item begin */}
                                <SwiperSlide>
                                    <div className="d-item">
                                        <div className="nft__item s2">
                                            {/* <div className="de_countdown" data-year="2023" data-month="11" data-day="8" data-hour="8"></div> */}
                                            <div className="author_list_pp">
                                                <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Gigaland">                                    
                                                    <Image className="lazy" src="/author/author-4.jpg" width={50} height={50} alt="" />
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <div className="nft__item_extra">
                                                    <div className="nft__item_buttons">
                                                        <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                        <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                        <div className="nft__item_share">
                                                            <h4>Share</h4>
                                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="07_modern-item-details.html">
                                                    <div className="d-placeholder"></div>
                                                    <Image src="/items/anim-10.webp" className="lazy nft__item_preview" width={224} height={224} alt="" />
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="07_modern-item-details.html">
                                                    <h4>Defraudment</h4>
                                                </a>
                                                <div className="nft__item_click">
                                                    <span></span>
                                                </div>
                                                <div className="nft__item_price">
                                                    0.09 ETH<span>1/14</span>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>94</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    {/* nft item begin */}
                                <div className="d-item">
                                    <div className="nft__item s2">
                                        <div className="author_list_pp">
                                            <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                                <Image className="lazy" src="/author/author-10.jpg" alt="" width={50} height={50} />
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="07_modern-item-details.html">
                                                <div className="d-placeholder"></div>
                                                <Image src="/items/static-22.jpg" className="lazy nft__item_preview" alt="" width={224} height={224} />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="07_modern-item-details.html">
                                                <h4>Dendroclastic</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span></span>
                                            </div>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/22</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    {/* nft item begin */}
                                <div className="d-item">
                                    <div className="nft__item s2">
                                        <div className="de_countdown" data-year="2023" data-month="11" data-day="12" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                                <Image className="lazy" src="/author/author-11.jpg" alt="" width={50} height={50} />
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="07_modern-item-details.html">
                                                <div className="d-placeholder"></div>
                                                <Image src="/items/static-23.jpg" className="lazy nft__item_preview" width={224} height={224} alt=""/>
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="07_modern-item-details.html">
                                                <h4>Masterling</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span></span>
                                            </div>
                                            <div className="nft__item_price">
                                                0.05 ETH<span>1/11</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>97</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                

                                <SwiperSlide>
                                    {/* nft item begin */}
                                <div className="d-item">
                                    <div className="nft__item s2">
                                        <div className="author_list_pp">
                                            <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                                <Image className="lazy" src="/author/author-12.jpg" alt="" width={50} height={50} />
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="07_modern-item-details.html">
                                                <div className="d-placeholder"></div>
                                                <Image src="/items/static-24.jpg" className="lazy nft__item_preview" width={224} height={224} alt="" />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="07_modern-item-details.html">
                                                <h4>Blue Planet</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span></span>
                                            </div>
                                            <div className="nft__item_price">
                                                0.02 ETH<span>1/15</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>73</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                               <SwiperSlide>
                                 {/* nft item begin */}
                                 <div className="d-item">
                                    <div className="nft__item s2">
                                        <div className="author_list_pp">
                                            <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                                <Image className="lazy" src="/author/author-9.jpg" alt="" width={50} height={50}/>
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="07_modern-item-details.html">
                                                <div className="d-placeholder"></div>
                                                <Image src="/items/anim-9.webp" className="lazy nft__item_preview" width={224} height={224} alt="" />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="07_modern-item-details.html">
                                                <h4>Superpious</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span></span>
                                            </div>
                                            <div className="nft__item_price">
                                                0.06 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>26</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </SwiperSlide>
                               <SwiperSlide>

                                 {/* nft item begin */}
                                 <div className="d-item">
                                    <div className="nft__item s2">
                                        <div className="de_countdown" data-year="2023" data-month="11" data-day="6" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                                <Image className="lazy" src="/author/author-1.jpg" alt="" width={50} height={50} />
                                                <i className="fa fa-check"></i>
                                            </a>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                                                    <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="07_modern-item-details.html">
                                                <div className="d-placeholder"></div>
                                                <Image src="/items/static-21.jpg" className="lazy nft__item_preview" width={224} height={224} alt="" />
                                            </a>
                                        </div>
                                        <div className="nft__item_info">
                                            <a href="07_modern-item-details.html">
                                                <h4>Delectus Antiendotoxin</h4>
                                            </a>
                                            <div className="nft__item_click">
                                                <span></span>
                                            </div>
                                            <div className="nft__item_price">
                                                0.08 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </SwiperSlide>
                               <SwiperSlide>

{/* nft item begin */}
<div className="d-item">
   <div className="nft__item s2">
       <div className="de_countdown" data-year="2023" data-month="11" data-day="6" data-hour="8"></div>
       <div className="author_list_pp">
           <a href="grey-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
               <Image className="lazy" src="/author/author-1.jpg" alt="" width={50} height={50} />
               <i className="fa fa-check"></i>
           </a>
       </div>
       <div className="nft__item_wrap">
           <div className="nft__item_extra">
               <div className="nft__item_buttons">
                   <button data-bs-toggle="modal" data-bs-target="#buy_now">Buy Now</button>
                   <button data-bs-toggle="modal" data-bs-target="#place_a_bid">Place a Bid</button>
                   <div className="nft__item_share">
                       <h4>Share</h4>
                       <a href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                       <a href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                       <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes"><i className="fa fa-envelope fa-lg"></i></a>
                   </div>
               </div>
           </div>
           <a href="07_modern-item-details.html">
               <div className="d-placeholder"></div>
               <Image src="/items/static-21.jpg" className="lazy nft__item_preview" width={224} height={224} alt="" />
           </a>
       </div>
       <div className="nft__item_info">
           <a href="07_modern-item-details.html">
               <h4>Delectus Antiendotoxin</h4>
           </a>
           <div className="nft__item_click">
               <span></span>
           </div>
           <div className="nft__item_price">
               0.08 ETH<span>1/20</span>
           </div>
           <div className="nft__item_like">
               <i className="fa fa-heart"></i><span>50</span>
           </div>
       </div>
   </div>
</div>
</SwiperSlide>
                            </div>
                            </Swiper>
                        </div>


                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrendingNFT