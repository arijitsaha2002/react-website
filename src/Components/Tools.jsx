import { NavLink, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "./ContextStates";
import './Tools.css'
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

function Tools() {

    const param = useParams().col;
    const context = useContext(AppContext);
    const products = useContext(AppContext).products.data;
    const coll = context.collections.data[context.collections.lookup[param]]
    const cat = context.categories.data[coll.category - 1]

    const Blank = () => {
        return (
            <></>
        )
    }

    return (
        <div style={{ "backgroundColor": "#CFE4E6FF" }}>
            <br />
            <div className="mx-5" style={{ "fontSize": "1rem", "fontWeight": 500 }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="link-dark" >Home</a></li>
                        <li className="breadcrumb-item">
                            <a className="link-dark">
                                {cat.name}
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a className="link-dark">
                                {coll.name}
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>


            <div className="d-flex justify-content-between flex-row flex-nowrap">

                <div className="text-light align-self-start text-nowrap">
                    <div className="d-none d-lg-inline-block"> 
                        <div className="my-4 px-3 py-2">
                            <SideBar />
                        </div>
                    </div>
                </div>
                    

                <div className="" style={{"width" : "max-content"}}>
                        
                    {/* <div className="p-0 text-center" style={{ "fontSize": "2rem", "fontWeight": "500" }} id="product-header">

                        </div>*/}

                    <div className="product-box justify-content-around align-items-start">

                        {products.map((value, index) => {
                            return (value.collection == param) ? (
                                <ProductCard key={index} value={value} />
                            ) : (<Blank key={index} />)
                        })

                        }

                        <div className="placeholder-cards"></div>
                        <div className="placeholder-cards"></div>
                        <div className="placeholder-cards"></div>
                        <div className="placeholder-cards"></div>
                        <div className="placeholder-cards"></div>

                    </div>
                        
                </div>
            </div>
        </div>
    )
}




export default Tools;