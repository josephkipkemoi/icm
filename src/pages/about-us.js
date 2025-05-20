import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import "./about-us.css"
import { faLocation, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const AboutUsPage = () => {
    const topRef = useRef(null)
    const {pathname} = useLocation()
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToTop()
    }, [pathname])

    return (
        <div ref={topRef}>
            <Header/>
            <AboutUsComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const AboutUsComponent = () => {
    return (
        <div className="container mt-5 mb-5 about-container ">
            <h1 className="text-danger fw-bold">About Us</h1>
            <hr/>
            <p>
            <strong>ICM Solutions Ltd.</strong>  is a dynamic agribusiness company rooted in the mission of advancing sustainable, science-driven agriculture. We specialize in the distribution of high-performance vegetable seeds, execution of pesticide efficacy trials, and the provision of laboratory diagnostics and professional agricultural training. <br/>
Our foundation is built on a commitment to agricultural innovation, scientific integrity, and environmental sustainability. We support a wide client base — from farmers and exporters to agrochemical developers and government agencies — with quality products, validated data, and capacity-building services. <br/>
Partnering with globally recognized seed breeders, research institutions, and regulatory bodies, ICM Solutions bridges practical field knowledge with scientific research to address modern agricultural challenges.
            </p>
            <div className="mt-5">
                <h2 className="text-danger fw-bold">Our Mission</h2>
                <p>
                    To empower growers of all sizes with access to healthy, reliable seeds that contribute to sustainable agriculture, food security, and the joy of growing.
                </p>
                <h2 className="text-danger fw-bold">Our Vision</h2>
                <p>
                    To empower growers of all sizes with access to healthy, reliable seeds that contribute to sustainable agriculture, food security, and the joy of growing.
                </p>
                <h2 className="text-danger fw-bold">Who We Are</h2>
                <p>
                    We are a passionate team of horticulturists, farmers, and seed specialists who understand the power of a well-grown plant. Whether you’re sowing your first garden or managing acres of farmland, we are here to help you succeed — from seed to harvest.
                </p>
                <h2 className="text-danger fw-bold">What We Offer</h2>
                <ul>
                    <li><strong>Vegetable Seeds</strong> – From everyday staples like tomatoes and carrots to unique heirloom varieties.</li>
                    <li><strong>Flower Seeds</strong> – Annuals, perennials, and pollinator-friendly blooms.</li>
                    <li><strong>Specialized Training</strong> – For home cooks, herbalists, and kitchen gardeners.</li>
                    <li><strong>Organic & Non-GMO Seeds</strong> – Verified for purity, safety, and environmental health.</li>
                    <li><strong>Bulk & Custom Orders</strong> – Serving farms, garden centers, schools, and institutions.</li>
                </ul>
                <p>Each seed is carefully tested for germination rate, purity, and disease resistance to ensure you receive the very best.</p>
                <h2 className="text-danger fw-bold">Our Values</h2>
                <ul>
                    <li><strong>Sustainability</strong> – We promote eco-friendly farming and organic practices.</li>
                    <li><strong>Integrity</strong> – Transparent labeling and honest information.</li>
                    <li><strong>Quality</strong> – Rigorously tested seeds from trusted growers.</li>
                    <li><strong>Education</strong> – We support our customers with growing tips, seasonal advice, and planting guides.</li>
                </ul>
                <h2 className="text-danger fw-bold">Our Farmers, Our Partners</h2>
                <p>
                    We work closely with local and international seed producers who share our commitment to quality and sustainability. By supporting small farmers and ethical suppliers, we help build stronger, greener communities.
                </p>
                <h2 className="text-danger fw-bold">Let’s Grow Together</h2>
                <p>
                    Whether you’re a seasoned farmer or a beginner gardener, you’re part of a global movement of growers. We’re here to support you every step of the way — with knowledge, service, and seeds you can count on.
                </p>
                <div>
                    <p className="fw-bold">Contact Us Today:</p>
                    <p className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocation} className="m-1" />
                        <span className="m-1">Milimani Apartment G4, Lena Moi Road, Nakuru Kenya</span>                        
                    </p>
                    <p className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="m-1" />
                        <span className="m-1">+254-795-216-873 / +254-704-734-454</span>                        
                    </p>
                    <p className="d-flex align-items-center whatsapp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                        </svg>  
                        <span className="m-1">+254-795-216-873 </span>                      
                    </p>
                    <p className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faMessage} className="m-1" />
                        <span className="m-1">info@icm.co.ke</span>    
                    </p>                  
                </div>
            </div>
            
        </div>
    )
}

export default AboutUsPage