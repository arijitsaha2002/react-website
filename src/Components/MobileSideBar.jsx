import { AppContext } from "./ContextStates";
import { useContext } from "react";
import { dropDownList } from "./Navbar";


function MobileSideBar() {
    const context = useContext(AppContext);
    return (
        <div className="row justify-content-around align-items-center text-center">
            <div className="col-12 d-md-flex justify-content-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span className="h5">Construction Tools</span>
                    </button>

                    <ul className="dropdown-menu bg-dark" data-bs-theme="dark">

                        {context.collections.data.map((value, index) => {
                            return (
                                <div key={index}>{(value.category == 1) ? dropDownList(value) : ""}</div>
                            )
                        })}

                    </ul>
                </div>

            </div>

            <div className="col-12 d-md-flex justify-content-center my-2">
                <div className="btn-group">
                    <button type="button" className="mx-auto btn btn-dark dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="h5">Stone Tools</span>
                    </button>


                    <ul className="dropdown-menu bg-dark" data-bs-theme="dark">

                        {context.collections.data.map((value, index) => {
                            return (
                                <div key={index}>{(value.category == 1) ? dropDownList(value) : ""}</div>
                            )
                        })}


                    </ul>

                </div>
            </div>
        </div>
    )
}


export default MobileSideBar;