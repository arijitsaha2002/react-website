import logo from "../Icons/main-logo.png";

function Footer() {
    return (


        <footer className="page-footer font-small bg-dark pt-4 text-body-secondary" data-bs-theme="dark">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0">
                        <img src={logo} className="mt-auto" />
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-3 mb-md-0 mb-3 text-start">

                            <h5 className="text-uppercase">Company</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="footer-text" href="#!">Home</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">About Us</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Technology</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Contact Us</a>
                                </li>
                            </ul>

                        </div>


                        <div className="col-md-3 mb-md-0 mb-3 text-start">

                            <h5 className="text-uppercase">Construction Tools</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="footer-text" href="#!">Diamond Wire</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Wall Saw Blades</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Floor Saw Blades</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Core Drills</a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-2 mb-md-0 mb-3 text-start">

                            <h5 className="text-uppercase">Stone Tools</h5>

                            <ul className="list-unstyled ">
                                <li>
                                    <a className="footer-text" href="#!">Blades & Segments</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Wire for Marble</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Wire for Granite</a>
                                </li>
                                <li>
                                    <a className="footer-text" href="#!">Multiwire Beads & Wire</a>
                                </li>
                            </ul>

                        </div>

                </div>
            </div>

            <div className="footer-copyright text-center py-3 bg-black">
        
            </div>

        </footer>

    )
}

export default Footer;