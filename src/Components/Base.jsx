import dee from '../Icons/dee3.jpg'


function Base({ Com, Bottom }) {
    return (
        <>
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-6 col-12">
                        <div className="col-lg text-center px-lg-5">
                            <img src={dee} style={{ "width": "90%" }} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 py-3">
                        <div className="my-5">
                            <Com />
                        </div>
                    </div>

                </div>

            </div>
            <div className='container-fluid' >
                <div className="row">
                    <Bottom />
                </div>
            </div>            
        </>
    )
}

export default Base;