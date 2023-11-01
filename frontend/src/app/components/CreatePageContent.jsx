"use client"

import { useContext, useEffect, useRef, useState } from 'react'
import { MarketplaceContext } from "../../../contexts/Marketplace";

function CreatePageContent(){

    const {disability,setFormData,formData,CreateNft,message,imageHandler,handleMethod} = useContext(MarketplaceContext)
    return(
        <>
               <section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-1">
                            <form id="form-create-item" className="form-border" method="post" action="email.php">
                                <div className="field-set">
                                    <h5>Upload file</h5>

                                    <div className="d-create-file">
                                        <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                        <input type="file" id="get_file"  onChange={e=>imageHandler(e)} className="btn-main" value="Browse" />
                                    </div>

                                    <div className="spacer-40"></div>

                                    <h5>Select method</h5>
                                    <div className="de_tab tab_methods">
                                        <ul className="de_nav">
                                            <li onClick={()=>handleMethod('fixed')} className="active"><span><i className="fa fa-tag"></i>Fixed price</span>
                                            </li>
                                            <li onClick={()=>handleMethod('timed')}><span><i className="fa fa-hourglass-1"></i>Timed auction</span>
                                            </li>
                                          
                                        </ul>

                                        <div className="de_tab_content">
                                            <div id="tab_opt_2" className='d-none'>
                                                <h5>Minimum bid</h5>
                                                <input type="text" name="item_price_bid" id="item_price_bid" className="form-control" placeholder="enter minimum bid" />

                                                <div className="spacer-20"></div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Starting date</h5>
                                                        <input type="date" name="bid_starting_date" id="bid_starting_date" className="form-control" min="1997-01-01" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5>Expiration date</h5>
                                                        <input type="date" name="bid_expiration_date" id="bid_expiration_date" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tab_opt_3">
                                            </div>

                                        </div>

                                    </div>

                                    <div className="spacer-20"></div>

                                    <h5>Title</h5>
                                    <input type="text" name="item_title" id="item_title" className="form-control" onChange={e => setFormData({...formData, name : e.target.value  })}  placeholder="e.g. 'Crypto Funk" />

                                    <div className="spacer-20"></div>

                                    <h5>Price</h5>
                                    <input type='number' name="item_desc" id="item_desc" className="form-control" onChange={e => setFormData({...formData, price : e.target.value  })} placeholder="e.g. '1 RBTC'" />

                                    <div className="spacer-20"></div>

                                    <div className="spacer-single"></div>

                                    <button type="button" id="submit" className="btn-main" value="Create Item"  onClick={CreateNft} >{message} </button>
                                    <div className="spacer-single"></div>
                                </div>
                            </form>
                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreatePageContent