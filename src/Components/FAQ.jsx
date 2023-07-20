import { useContext } from "react";
import { AppContext } from "./ContextStates";


function Faqs() {
    const data = useContext(AppContext).faqs;

    return (
        <div className="accordion" id="accordionExample">
            
            {
                data.map((value, index) => {    
                    return (
                        <div className="accordion-item" key={index} style={{ border: "none" }}>
                            <div className="accordion-header">
                                <div role="button" className={`accordion-button ${(index == 0) ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#answer-${index}`} aria-expanded="true" aria-controls="collapseOne" style={{ "backgroundColor": "#eee", "borderBottom": "2px solid #B0B0B0FF", "padding": "10px 15px 5px 15px" }}>
                                    <h6>{value.question}</h6>
                                </div>
                            </div>

                            <div id={`answer-${index}`} className={`accordion-collapse collapse ${(index == 0) ? "show" : ""}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {value.answer}
                                </div>
                            </div>
                            <br />
                        </div>                        
                    )
                }
                )
            }
        </div>

    )
}


export default Faqs;

