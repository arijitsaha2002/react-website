import { useParams } from "react-router-dom";
import React from "react";

function Tools() {

    const param = useParams().col;

    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-3 my-1 ps-lg-5 mb-4">
                        
                    </div>

                    <div class="col-lg-9 py-0">
                        <div class="p-0 text-center" style={{"fontSize": "2rem", "fontWeight": "500"}} id="product-header">

                        </div>

                        <div class="products">
                            <div class="product-box mx-auto">

                                {/*{% for product in products %}*/}

                               {/* <div class="all-products p-4 m-3 {{ product.collection.category.name | slugify }} {{ product.collection.name | slugify }}"
                                    onclick="window.open('/product/{{ product.id }}', '_blank');" role="button">
                                    <div style="font-size: 1rem; font-weight: 600; height: 20%;">
                                        {{ product.name }}
                                    </div>
                                    <div style="height: 40%;">

                                    </div>
                                    <div class="" style="height: 70%;">
                                        <div style={{"fontWeight": "500"}}>{{ product.attributesName2 }}</div>
                                        <h8>{{ product.attributes2 }}</h8>
                                        <br />
                                        <div style={{"fontWeight": "500"}}>{{ product.attributesName3 }}</div>
                                        <h8>{{ product.attributes3 }}</h8>
                                        <br />
                                        <div style={{"fontWeight": "500"}}>{{ product.attributesName4 }}</div>
                                        <h8>{{ product.attributes4 }}</h8>
                                    </div>

                                    <div class="total-text" style="display: none;">
                                        {{ product.total }}
                                    </div>

                                </div>*/}


                                <div class="placeholder-cards"></div>
                                <div class="placeholder-cards"></div>
                                <div class="placeholder-cards"></div>
                                <div class="placeholder-cards"></div>
                                <div class="placeholder-cards"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Tools;