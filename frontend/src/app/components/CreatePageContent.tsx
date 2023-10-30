import Image from "next/image"

function CreatePageContent(){
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
                                        <input type="button" id="get_file" className="btn-main" value="Browse" />
                                        <input type="file" id="upload_file" />
                                    </div>

                                    <div className="spacer-40"></div>


                                    <div className="spacer-20"></div>

                                  
                                    <div className="spacer-20"></div>

                                    <h5>Title</h5>
                                    <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'Crypto Funk" />

                                    <div className="spacer-20"></div>

                                    <h5>Description</h5>
                                    <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'This is very limited item'"></textarea>

                                    <div className="spacer-20"></div>

                                    <h5>Royalties</h5>
                                    <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%" />

                                    <div className="spacer-single"></div>

                                    <input type="button" id="submit" className="btn-main" value="Create Item" />
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