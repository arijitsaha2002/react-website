import { AppContext } from "./ContextStates";
import { BsChevronRight } from 'react-icons/bs'
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dropDownList } from "./Navbar";


function MobileSideBar() {
    const context = useContext(AppContext);
    return (
        <div class="row justify-content-around align-items-center  text-center">
            <div class="col-12 d-md-flex justify-content-center">
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="h5">Construction Tools</span>
                    </button>

                    <ul class="dropdown-menu bg-dark" data-bs-theme="dark">

                        {context.collections.data.map((value, index) => {
                            return (
                                <div key={index}>{(value.category == 1) ? dropDownList(value) : ""}</div>
                            )
                        })}

                    </ul>
                </div>

            </div>

            <div class="col-12 d-md-flex justify-content-center">

                <div class="btn-group">
                    <button type="button" class="mx-auto btn dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="h5">Stone Tools</span>
                    </button>


                    <ul class="dropdown-menu bg-dark" data-bs-theme="dark">

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