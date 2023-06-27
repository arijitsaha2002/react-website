import { useEffect, useState } from "react";
import axios from "axios";
import './Contact.css'


function Contact() {
    return (
        <div>
            
            <div class="container text-left my-5">
                <div class="row justify-content-around p-3">

                    <div class="col-lg-5 col-12 d-flex justify-content-center">
                        <div class="d-flexbox">
                            <div id="contact-text"> Dee Tec Tools LLP </div>
                            <br />
                            <div id="address">

                                <h3>Address</h3>
                                <div class="normal-text">
                                    DeeTec Tools LLP
                                    <br />
                                    1404 Maker Chamber 5
                                    <br />
                                    Nariman Point
                                    <br />
                                    Mumbai 400021, India

                                </div>

                                <br />
                                <br />

                                <h3>sales@deetec.in</h3>
                                <div class="normal-text">
                                    Tel No : +91-022-35113202
                                    <br />
                                </div>
                                <br />
                                <br />
                                <div class="normal-text">
                                    WhatsApp : <span class="fst-italic fw-normal">+9137 49 8003</span>
                                    <br />
                                    Viber Chat : <span class="fst-italic fw-normal">+9137 49 8003</span>
                                    <br />
                                    E Mail Us : <span class="fst-italic fw-normal">sales@deetec.in</span>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-5 col-12 d-flex justify-content-center">
                        <div class="d-flexbox">

                            <br />
                            Please use this contact form below, and let our partnership begin.

                            <form class="mt-5" action="/contact-us" method="post">

                                <div class="mb-3 form-group">
                                    <label for="name">Your Name (required)</label>
                                    <input type="text" class="form-control" name="name" id="name" required />
                                </div>

                                <div class="mb-3 form-group">
                                    <label for="email">Your Email (required)</label>
                                    <input type="email" class="form-control" name="email" id="email" required />
                                </div>

                                <div class="mb-3 form-group">
                                    <label for="sub">Subject</label>
                                    <input type="text" class="form-control" name="sub" id="sub" />
                                </div>

                                <div class="mb-3 form-group">
                                    <label for="msg">Your Message</label>
                                    <textarea class="form-control" name="msg" id="msg" rows="10"></textarea>
                                </div>
                                <input type="submit" class="btn btn-dark" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;