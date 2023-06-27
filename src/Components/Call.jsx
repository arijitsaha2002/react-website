import './Call.css'
import { FaWhatsapp, FaViber, FaPhone } from 'react-icons/fa';
import xmark from '../Icons/xmark-solid.svg';
import phone from '../Icons/phone-solid.svg';


function Call() {


    return (
        <>
            <div className="pulse"></div>
            <div id="background-cross" role="button" className="bg-danger text-center p-3" onclick="hide_call_back()">
                <div className="d-flex align-items-center">
                    <img src={ xmark } width="50%" className="m-auto" />
                </div>
            </div>

            <div id="call-container">

                <img id="background-call" className='position-fixed' src={phone} />

                <div id="white">
                    <div id="slider" style={{"padding-left": "11px", "padding-bottom" : "2px"}}>
                        <div className="call-items">
                            <FaWhatsapp size="24px" color='brown' />
                        </div>
                        <div className="call-items">
                            <FaViber size="24px" color='brown' />
                        </div>
                        <div className="call-items">
                            <FaPhone size="22px" color='brown' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Call;