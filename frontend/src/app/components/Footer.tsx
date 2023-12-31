function Footer(){
    return(
            <footer style={{'backgroundColor':'#040836'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-xs-1">
                            <div className="widget">
                                <h5>Get the latest updates</h5>
                                <p>Signup for our newsletter to get the latest updates in your inbox.</p>
                                <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                    <div className="col text-center">
                                        <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <a href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></a>
                                        <div className="clearfix"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Marketplace</h5>
                                        <ul>
                                            <li><a href="#">All NFTs</a></li>
                                            <li><a href="#">Art</a></li>
                                            <li><a href="#">Music</a></li>
                                            <li><a href="#">Domain Names</a></li>
                                            <li><a href="#">Virtual World</a></li>
                                            <li><a href="#">Collectibles</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Resources</h5>
                                        <ul>
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Partners</a></li>
                                            <li><a href="#">Suggestions</a></li>
                                            <li><a href="#">Discord</a></li>
                                            <li><a href="#">Docs</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Community</h5>
                                        <ul>
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Documentation</a></li>
                                            <li><a href="#">Brand Assets</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Forum</a></li>
                                            <li><a href="#">Mailing List</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-xs-1">
                            <div className="widget">
                                <h5>Join the community</h5>
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-youtube fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-envelope-o fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a href="index.html">
                                <span className="copy">&copy; Copyright 2023 - Gigaland by Designesia</span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer