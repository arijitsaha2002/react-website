import { useEffect, useState } from "react";
import axios from "axios";
import './FAQ.css'
import dee from '../Icons/dee3.jpg'
import { FaAngleDown } from "react-icons/fa"


function Faqs() {
    const [data, setData] = useState([]);
    const [height, setHeight] = useState(1000);
    const [divName, setName] = useState("0"); 


    const toggleDiv = (e) => {
        setName(e);
        let h = document.getElementById("answer-"+e).scrollHeight;
        setHeight(h);
    }   

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/faqs/").then((response) => {
            setData(response.data)
            console.log(response.data);
        })
    }, [])


    

    return (
        <>
            <div className="container-fluid text-left">
                <div className="row justify-content-center">

                    <div className="col-lg text-center px-lg-5">
                        <img src={dee} style={{ "width": "90%" }} alt="" />
                    </div>
                    <div className="col-lg col-11">

                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="me-lg-5">

                            {
                                data.map((value, index) => {
                                    return (
                                        <>
                                            <div className="question py-2 px-3 d-flex justify-content-between align-items-center"
                                                style={{ "font-weight": 500 }} onClick={() => {toggleDiv(index)}}>
                                                <div>
                                                    {value.question}
                                                </div>
                                                <div>
                                                    <FaAngleDown />
                                                </div>
                                            </div>

                                            <div id={`answer-${index}`} className="answer" style={{ "maxHeight": `${(divName === index) ? height : 0}px` }}>
                                                <div className="p-3">
                                                    {value.answer}
                                                </div>
                                            </div>
                                            <br />
                                        </>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Faqs;