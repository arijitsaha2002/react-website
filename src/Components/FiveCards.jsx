import './Home.css';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function move_left() {
    document.getElementById("main-container-background").scrollTo(0, 0);
}

function move_right() {
    document.getElementById("main-container-background").scrollTo(1000, 0);
}

function FiveCards() {

    return (
        <>
            <br />
            <br />
            <div className="position-relative">

                <div className="arrow-left d-lg-inline d-none bg-dark bg-opacity-50 px-3 py-4" role="button" onClick={move_left}>
                    <FaChevronLeft color='white' />
                </div>

                <div className="arrow-right d-lg-inline d-none bg-dark bg-opacity-50 px-3 py-4" role="button" onClick={move_right}>
                    <FaChevronRight color='white' />
                </div>

                <div id="main-container-background" className="d-flex flex-nowrap overflow-x-scroll justify-content-start mx-4 text-uppercase">
                    <div className="my-card-home p-3">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <div className="my-text">
                                This is a text
                            </div>
                        </div>
                    </div>
                    <div className="my-card-home p-3">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <div className="my-text">
                                This is a text
                            </div>
                        </div>
                    </div>
                    <div className="my-card-home p-3">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <div className="my-text">
                                This is a text
                            </div>
                        </div>
                    </div>
                    <div className="my-card-home p-3">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <div className="my-text">
                                This is a text
                            </div>
                        </div>
                    </div>

                    <div className="my-card-home p-3">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <div className="my-text">
                                This is a text
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
        </>
    )
}


export default FiveCards;