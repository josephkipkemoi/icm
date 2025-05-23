import { Link } from "react-router-dom"
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation, faMessage, faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import SocialMediaLinksComponent from "./social-media-links"

const Footer = () => {
    return (
        <footer className="p-5 text-light footer-container pb-2">
            <div className="row">
                <div className="col-sm">
                    <h6 className="fw-bold">Contact</h6>
                    <hr/>
                    <div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="m-1" icon={faLocation} />
                            <p className="m-1">Milimani Apartment G4, Lena Moi Road, Nakuru Kenya</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="m-1" icon={faPhone} />
                            <p className="m-1">
                                Tel: +254-795-216-873 <br/>
                                    +254-704-734-454 
                            </p>                           
                        </div>
                        <a href="https://wa.me/254795216873" target="_blank" rel="noreferrer" className="d-flex align-items-center nav-link">
                                <FontAwesomeIcon className="m-1" icon={faPhoneFlip} />            
                                <p className="m-1">WhatsApp: +254-795-216-873</p>                                      
                        </a>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="m-1" icon={faMessage} />
                            <p className="m-1">Email: info@icm.co.ke</p>
                        </div>
                     
                    </div>
                </div>
                <div className="col-sm">
                    <h6 className="fw-bold mt-3">Press Releases</h6>
                    <hr/>
                    <div>
                        <Link className="nav-link mt-3"  to="/careers">Careers</Link>
                    </div>
                </div>
                <div className="col-sm">
                    <h6 className="fw-bold  mt-3">Information</h6>
                    <hr/>
                    <div>
                        <Link to="/returns" className="nav-link mt-3">Returns</Link>
                        <Link to="/delivery" className="nav-link mt-3">Delivery</Link>
                        <Link to="/services" className="nav-link mt-3">Services</Link>
                        <Link to="/gift-cards" className="nav-link mt-3">Gift Cards</Link>
                    </div>
                </div>
                <div className="col-sm">
                    <h6 className="fw-bold  mt-3">Legal Information</h6>
                    <hr/>
                    <div>
                        <Link to="/terms-of-service" className="nav-link mt-3">Terms of Service</Link>
                        <Link to="/privacy-policy" className="nav-link mt-3">Privacy Policy</Link>
                        <Link to="/cookie-policy" className="nav-link mt-3">Cookie Policy</Link>
                        <Link to="/terms-of-use" className="nav-link mt-3">Terms of Use</Link>
                    </div>
                </div>
                <div className="col-sm">
                    <h6 className="fw-bold  mt-3">Social Media Links</h6>
                    <hr/>
                    <div>
                       <SocialMediaLinksComponent/>
                    </div>
                </div>
            </div>
            <div className="text-center mt-1">
                <p>Copyright &copy; 2025 | All Rights Reserved | Powered by RiftKoders</p>
            </div>           
        </footer>
    )
}




export default Footer