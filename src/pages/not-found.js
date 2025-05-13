import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import "./not-found.css"

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <div className="p-5 text-center d-flex flex-column not-found-container">
                <h1 className="mt-5 fw-bold text-danger mb-4">
                    404 
                </h1>
                <h2 className="fw-bold mt-5 mb-5">Page Not Found</h2>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-danger shadow-sm btn-lg mb-5 d-flex align-items-center rounded-5">
                        <FontAwesomeIcon icon={faHome} className="m-2" />
                        <span className="m-2">Take Me Back Home</span>               
                    </Link>
                </div>            
            </div>              
            <Footer/>
        </>  
    )
}

export default NotFoundPage