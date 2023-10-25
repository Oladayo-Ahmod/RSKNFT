"use client"

import Image from "next/image"

function TopSeller(){
    return (

        <section id="section-collections" className="no-top no-bottom">
            <style jsx>
                {
                `
                .author_list_info a{
                    text-decoration : none;
                }
                `
                }
            
            </style>
        <div className="m-5 mt-0 mb-0 padding30 br-15 bg-custom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Top Sellers in</h2>
                        <div id="top_sellers_filter" className="dropdown alt-2">
                            <a href="#" className="btn-selector">30 days</a>
                            <ul>
                                <li className="active"><span>30 days</span></li>
                                <li><span>1 day</span></li>
                                <li><span>7 days</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 wow fadeIn " style={{'visibility':'visible'}}>
                        <ol className="author_list alt-2 d-col-3">
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">
                                    <Image className="lazy" src="/author/author-1.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Monica Lucas</a>
                                    <span>@monica</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>3.2 ETH</span> $4,823
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-2.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Mamie Barnett</a>
                                    <span>@mamieb</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>2.8 ETH</span> $4,210
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-3.jpg" alt="" width={50} height={50}/>
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Nicholas Daniels</a>
                                    <span>@nicdaniels</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>2.5 ETH</span> $3,757
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-4.jpg" alt="" width={50} height={50}/>
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Lori Hart</a>
                                    <span>@lorihart</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>2.2 ETH</span> $3,300
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-5.jpg" alt=""width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Jimmy Wright</a>
                                    <span>@thejimmy</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>1.9 ETH</span> $2,846
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-6.jpg" alt="" width={50} height={50}/>
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Karla Sharp</a>
                                    <span>@karlasharp</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>1.6 ETH</span> $2,395
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-7.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Gayle Hicks</a>
                                    <span>@gayleee</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>1.5 ETH</span> $2,244
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-8.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Claude Banks</a>
                                    <span>@claudebanks</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>1.3 ETH</span> $1,945
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-9.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Franklin Greer</a>
                                    <span>@franklin</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.9 ETH</span> $1,347
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-10.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Stacy Long</a>
                                    <span>@stacylong</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.8 ETH</span> $1,197
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-11.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Ida Chapman</a>
                                    <span>@chapman</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.6</span> $898
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-12.jpg" alt=""  width={50} height={50}/>
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Fred Ryan</a>
                                    <span>@fredryan</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.4 ETH</span> $599
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-13.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Ramon Tipps</a>
                                    <span>@ramontipps</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.3 ETH</span> $450
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-14.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Norene Jette</a>
                                    <span>@jette</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.2 ETH</span> $300
                                </div>
                            </li>
                            <li>
                                <div className="author_list_pp">
                                    <a href="author.html">                                    
                                    <Image className="lazy" src="/author/author-15.jpg" alt="" width={50} height={50} />
                                    <i className="fa fa-check"></i>
                                </a>
                                </div>
                                <div className="author_list_info">
                                    <a href="author.html">Chin Haward</a>
                                    <span>@chinhaward</span>
                                </div>
                                <div className="author_list_info_e">
                                    <span>0.2 ETH</span> $300
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TopSeller