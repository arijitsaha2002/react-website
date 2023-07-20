import { AppContext } from "./ContextStates";
import { BsChevronRight } from 'react-icons/bs'
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
    const context = useContext(AppContext);

    return (
        
            <div className="mb-5 px-4 py-4" style={{ "backgroundColor": "#333333", "borderRadius": "20px" }}>
                <div className="mb-3 mx-3" style={{ "fontWeight": 300, "fontSize": "1.5rem" }}>
                    Construction Tools
                </div>

                {
                    context.collections.data.map((value, index) => {
                        return (value.category == 1) ? (
                            <NavLink key={index} className="mx-3 text-decoration-none text-white d-flex justify-content-between my-3 p-2" role="button" to={`/tools/${value.id}`} style={{ "backgroundColor": "#555555", "fontSize": "1.1rem" }}>
                                <div>
                                    &nbsp; {value.name}
                                </div>

                                <div className="ms-3 me-1">
                                    <BsChevronRight />
                                </div>
                            </NavLink>
                        ) : (<div key={index}></div>)
                    })
                }

                <div className="mt-4 mx-3" style={{ "fontWeight": 300, "fontSize": "1.5rem" }}>
                    Stone Tools
                </div>

                {
                    context.collections.data.map((value, index) => {
                        return (value.category == 2) ? (
                            <NavLink key={index} className="mx-3 text-decoration-none text-white d-flex justify-content-between my-3 p-2" role="button" to={`/tools/${value.id}`} style={{ "backgroundColor": "#555555", "fontSize": "1.1rem" }}>
                                <div>
                                    &nbsp; {value.name} 
                                </div>

                                <div className="ms-3 me-1">
                                    <BsChevronRight />
                                </div>
                            </NavLink>
                        ) : (<div key={index}></div>)
                    })
                }

            </div>
        
    )
}

export default SideBar;