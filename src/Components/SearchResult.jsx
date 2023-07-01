import { NavLink, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "./ContextStates";
import './Tools.css'
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

function SearchResult() {

    const param = String(useParams().col).replaceAll('-', ' ');
    const products = useContext(AppContext).products.data;

    return (
        <div style={{ "backgroundColor": "#CFE4E6FF" }}>
            <br />
            <div className="mx-5" style={{ "fontSize": "1rem", "fontWeight": 500 }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="link-dark" >Home</a></li>
                        <li className="breadcrumb-item">
                            <a className="link-dark">
                                Search
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a className="link-dark">
                                {param}
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>


            <div className="container-fluid">
                <div className="row justify-content-center p-0">

                    <div className="col-md-auto text-light align-self-start mt-5 ps-4 text-nowrap">
                        <SideBar />
                    </div>
                    

                    <div className="col-md-7 col-lg-9 py-3">
                        <div className="p-0 text-center" style={{ "fontSize": "2rem", "fontWeight": "500" }} id="product-header">

                        </div>
                            <div className="product-box justify-content-between">

                                {products.map((value, index) => {
                                    return (String(value.total).toLowerCase().indexOf(param) > -1) ? (
                                        <ProductCard key={index} value={value} />
                                    ) : (<div key={index}></div>)
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
        </div>
    )
}




export default SearchResult;