import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "./ContextStates";
import img from '../Icons/products.webp'
import { FaChevronLeft } from 'react-icons/fa'

function Product() {
  const context = useContext(AppContext);
  const id = useParams().id;
  const product = context.products.data[context.products.lookup[id]];
  const coll = context.collections.data[context.collections.lookup[product.collection]];
  const cat = context.categories.data[context.categories.lookup[coll.category]];

  return (
    <>

      <br />
      <div className="mx-lg-5 mx-3" style={{ "fontSize": "1rem", "fontWeight": 500 }}>
        <nav className="text-center" aria-label="breadcrumb">
          <ol className="breadcrumb mx-lg-0 mx-auto" style={{width:"max-fit"}}>
            <li className="breadcrumb-item d-block">&nbsp; <a className="link-dark" >Home</a></li>
            <li className="breadcrumb-item d-block">
              <a className="link-dark">
                {cat.name}
              </a>
            </li>
            <li className="breadcrumb-item d-block" aria-current="page">
              <a className="link-dark">
                {coll.name}
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="container-fluid my-5 px-lg-5 px-3">
        <div className="row justify-content-around">

          <div className="col-lg-8">
            <div className="container">
              <div className="row">
                <div className="col-12 p-0 d-flex justify-content-center">
                  <img src={img} style={{ "width": "80%" }} alt="" />
                </div>
              </div>
              <div className="row my-5 justify-content-between" style={{ "borderRadius": "20px", "boxShadow": "0 0 10px gray" }}>

                <div className="col-12 p-3 d-flex align-items-center justify-content-between">

                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr className="table-dark text-light">
                        <th scope="col">#</th>
                        <th scope="col">
                          ALL PRODUCTS SPECIFICATION
                        </th>
                        <th scope="col">
                          {product.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Array(8).fill(1).map((el, i) => {
                          return (product[`attributesName${i + 1}`] != null && product[`attributesName${i + 1}`] != "" && product[`attributes${i + 1}`] != "") ?
                            (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{product[`attributesName${i + 1}`]}</td>
                                <td>{product[`attributes${i + 1}`]}</td>
                              </tr>
                            ) : (<Fragment key={i}></Fragment>)
                        }
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-12">

                  <br />
                  <h3>{coll.heading}</h3>
                  <br />
                  <div style={{ "fontSize": "1.2rem" }}>
                    <p style={{ "textAlign": "justify" }}>
                      {coll.desc}
                    </p>
                  </div>
                  <br />

                  <ul className="ms-3" style={{ "fontSize": "1.1rem" }}>
                    {
                      Array(6).fill(1).map((el, i) => {
                        return (coll[`description${i + 1}`] != null && coll[`description${i + 1}`] != "") ?
                          (
                            <li key={i}>
                              {coll[`description${i + 1}`]}
                            </li>
                          ) : (<Fragment key={i}></Fragment>)
                      }
                      )
                    }

                  </ul>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-3 col-11 p-5 text-light align-self-start mt-5" style={{ "backgroundColor": "#333333", "borderRadius": "20px" }}>
            <div className="mb-3" style={{ "fontWeight": 100, "fontSize": "1.5rem" }}>
              {cat.name}
            </div>

            {
              context.collections.data.map((value, index) => {
                return (value.category == cat.id) ? (
                  <div key={index} className="my-2 p-2" role="button" style={{ "backgroundColor": "#555555", "fontSize": "1rem" }}>
                    <FaChevronLeft />
                    &nbsp; &nbsp; {value.name}
                  </div>
                ) : (<div key={index}></div>)
              })
            }


            <div className="my-3" style={{ "fontWeight": 100, "fontSize": "1.5rem" }}>
              Brochures
            </div>


            <button className="btn btn-light">
              Download PDF Brochure
            </button>
          </div>

        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  )
}


export default Product;