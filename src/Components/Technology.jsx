import { useState, useEffect } from 'react';
import './Technology.css';
import axios from 'axios';

function Technology() {
    return (
        <div>
            <h3>Our Technology</h3>
            <br />

            Dee Tec manufactures diamond tools for construction & stone applications using advanced Hot Isostatic
            Pressing technology. Our technology allows the tools to perform in demanding conditions on a consistent
            basis. We have over 50 years’ of experience in diamond tools for various applications.
            <br />
            <br />
            Our products are always designed to be ahead of the competition based on continuous improvement “Kaizen
            Methods” with a strong focus on research. Cost efficiencies are our biggest strength. With a strong
            focus on automation, our research also ensures we are far more cost-efficient than local and global
            producers of these products.
            <br />
            <br />
            Our new line ProHYBRID for construction has been designed to produce high-quality tools for various
            applications such as wall sawing, floor sawing, core drilling, hand saw machines, and diamond wire.

        </div>
    )
}


function Tech(i) {

    return (
        <>
            <div className="col-lg-6 col-12 justify-content-center d-flex mt-5 mb-5">
                <div className="technology-card">

                    <div className="technology-card-img">
                        <img src={i.left_logo} className="top-img" />
                    </div>
                    <br />
                    <br />

                    <center>
                        <div className='heading-text'>
                            {i.left_heading}
                        </div>
                    </center>


                    <center className='desc-text'>
                        {i.left_description}
                    </center>



                </div>
            </div>

            <div className="col-lg-6 col-12 justify-content-center d-flex mt-5 mb-5">
                <div className="technology-card">
                    <div className="technology-card-img">
                        <img src={i.right_logo} className="top-img" />
                    </div>
                    <br />                
                    <br />

                    <center>
                        <div className='heading-text'>
                            {i.right_heading}
                        </div>
                    </center>

                    <center className='desc-text'>
                        {i.right_description}
                    </center>

                </div>
            </div>
        </>
    )
}


function Techs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/technology/").then((response) => {
            setData(response.data);
        })
    }, [])


    return (
        <>
            {
                data.map((value, index) => {
                    return (
                        <div key={index}>
                            {Tech(value)}
                        </div>
                    )
                })
            }
        </>
    )
}

export { Technology, Techs };