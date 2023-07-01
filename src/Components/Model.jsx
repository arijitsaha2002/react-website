import { useNavigate } from "react-router-dom";

function MyModel() {

    const navigate = useNavigate();

    const handleInput = (key, value) => {
        if(key == "Enter"){
            document.getElementById("close-search").click();
            navigate("/tools/search/" + String(value).toLowerCase().replaceAll(" ", "-"), { replace: true });
        }
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bg-transparent" id="my-search-bar" style={{"top": "8vh"}}>
                <div className="modal-content">
                    <div className="modal-body">


                        <input id="my-new-search-bar" onKeyUp={(event)=> {handleInput(event.key, event.target.value)}} type="search" name="search-bar"
                            placeholder="What're you searching for ?" className="text-left border-0 m-1"
                            style={{"fontSize": "1.4rem", "fontWeight": 400, "outline": "none", "borderStyle": "none", "width": "100%"}} />

                    </div>
                    <div className="modal-footer d-none">
                        <button id="close-search" type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyModel;