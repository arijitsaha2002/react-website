import { NavLink } from "react-router-dom";

function ProductCard({ value }) {
    return (
        <NavLink className="all-products p-4 m-3 text-decoration-none text-black" to={`/products/${value.id}`}>
            <div style={{ "fontSize": "1rem", "fontWeight": 600, "height": "20%" }}>
                {value.name}
            </div>
            <div style={{ "height": "40%" }}>

            </div>
            <div style={{ "height": "70%" }}>
                <div style={{ "fontWeight": "500" }}>{value.attributesName2}</div>
                {value.attributes2}
                <br />
                <div style={{ "fontWeight": "500" }}>{value.attributesName3}</div>
                {value.attributes3}
                <br />
                <div style={{ "fontWeight": "500" }}>{value.attributesName4}</div>
                {value.attributes4}
                
            </div>

            <div className="total-text d-none">
                {value.total}
            </div>

        </NavLink>
    )
}

export default ProductCard;