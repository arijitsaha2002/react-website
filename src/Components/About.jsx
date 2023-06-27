import dee from '../Icons/dee3.jpg'

function About() {
    return (
        <>
            
            <div className="container text-left mt-2">
                <div className="row">

                    <div className="col-lg text-center px-lg-5">
                        <img src={dee} style={{"width": "90%"}} />
                    </div>

                    <div className="col-lg d-flex justify-content-center" >

                        <div className="m-5">

                            <br />
                            <h3>About Deetec</h3>
                            <br />

                            Advanced Diamond Tools for Construction / Stone applications
                            <br />
                            <br />
                            DeeTec manufactures high-quality diamond tools for Construction & Stone applications using the advanced
                            Hot Isostatic Pressing technology.

                            <br />
                            <br />
                            <br />

                            <ul>
                                <li>
                                    Quality & Performance Guaranteed
                                </li>
                                <li>
                                    Our technology allows the tools to perform in demanding
                                    conditions on a consistent basis. We have combined 50 years
                                    of experience in diamond tools for various applications.
                                </li>
                                <li>
                                    Cost efficiencies are our biggest strength. With a strong focus on
                                    automation, our research ensures we are far more cost-efficient than
                                    local & global producers of our products.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />

        </>
    )
}


export default About;