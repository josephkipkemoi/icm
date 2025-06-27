import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const SupportComponent = () => {
    return (
        <div className="mt-2 mb-5 bg-light">
            <div className="d-flex justify-content-center">
                <div className="mt-5 mb-5 text-center">
                    <h1 className="text-danger fw-bold text-center ">Contact Support</h1>
                    <p className="m-3">If you have any questions, get in touch with our support team</p>
                </div>  
            </div>          
            <div className="d-sm-flex justify-content-around">
                <div className="text-center m-4">
                    <h1 className="text-danger text-center m-4">
                        <FontAwesomeIcon icon={faPhone} />
                    </h1>                   
                    <h5>Tel: +254-795-216-873 /</h5>
                    <h5>+254-704-734-454</h5>
                    <p>The best way to get answers fast.</p>
                </div>
                <div className="text-center m-4">
                    <h1 className="text-danger text-center m-4">
                        <FontAwesomeIcon icon={faMessage} />
                    </h1>  
                    <h5>Email: info@icm.co.ke</h5>
                    <h5>You can also send us a message <Link to="/contact-us" className="fw-bold text-danger">here</Link></h5>
                    <p>Always happy to help.</p>
                </div>
            </div>     
        </div>
    )
}

export default SupportComponent