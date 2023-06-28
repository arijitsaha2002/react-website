import { useContext, useEffect, useState } from "react";
import axios from "axios";
import './FAQ.css';
import { FaAngleDown } from "react-icons/fa";
import { AppContext } from "./ContextStates";


function Faqs() {
    const data = useContext(AppContext).faqs;
    const [height, setHeight] = useState(0);
    const [divName, setName] = useState(0);


    const toggleDiv = (e) => {
        setName(e);
        let h = document.getElementById("answer-" + e).scrollHeight;
        setHeight(h);
    }
    

    return (
        <div>
            {
                data.map((value, index) => {
                    return (
                        <>
                            <div className="question py-2 px-3 d-flex justify-content-between align-items-center"
                                style={{ "font-weight": 500 }} onClick={() => { toggleDiv(index) }}>
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
    )
}


export default Faqs;