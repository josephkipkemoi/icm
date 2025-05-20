import { Link, useLocation } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import { useEffect, useRef } from "react"

const TermsOfServicePage = () => {
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
            <TermsOfServiceComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const TermsOfServiceComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Terms of Service</h1>
            <hr/>
            <div>
                <small>Effective Date: 08/05/2025</small>
                <p>
                    Welcome to <strong>Integrated Crop Management Solutions Limited</strong>  ("ICMS", "we", "our", or "us").
                    By accessing or using our website at <strong>www.icm.co.ke</strong>  (the "Site"), you agree to be bound by these Terms of Service ("Terms").
                     Please read them carefully.
                </p>
                <h2 className="fw-bold">1. Use of Our Services</h2>
                <p>
                    We sell agricultural seeds and provide training services to companies. Our services are available to users in Kenya. 
                    You may use our services either by creating an account or as a guest.
                </p>
                <h2 className="fw-bold">2. Account Registration</h2>
                <p>
                    To access certain features, you may create an account. 
                    You agree to provide accurate and complete information. 
                    You are responsible for maintaining the confidentiality of your login credentials.
                </p>
                <h2 className="fw-bold">3. Payments</h2>
                <p>
                    We accept payments through MPESA and major card providers. All payments must be made in Kenyan Shillings (KES). We do not store your payment card details.
                </p>
                <h2 className="fw-bold">4. Data Collection and Privacy</h2>
                <p>
                 We collect personal information including your name, phone number, email address, and payment details. 
                 Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for information on how we collect, use, and protect your data.
                </p>
                <h2 className="fw-bold">5. Training Services</h2>
                <p>
                 All training materials and content provided by ICMS are the intellectual property of the company and may not be reproduced or redistributed without permission.
                </p>
                <h2 className="fw-bold">6. Intellectual Property</h2>
                <p>
                    All content on the Site, including text, images, logos, and trademarks, is the property of ICMS and protected by applicable laws.
                </p>             
                <h2 className="fw-bold">7. Prohibited Activities</h2>
                <p>
                    You agree not to:
                    <ul>
                        <li>Use the Site for any illegal purpose.</li>
                        <li>Attempt to interfere with the operation of the Site.</li>
                        <li>Distribute malware or engage in fraudulent activity.</li>
                    </ul>                   
                </p>
                <h2 className="fw-bold">8. Termination</h2>
                <p>
                    We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, for any behavior that violates these Terms.
                </p>   
                <h2 className="fw-bold">9. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, ICMS shall not be liable for any indirect, incidental, 
                    or consequential damages arising out of your use of our Site or services.
                </p> 
                 <h2 className="fw-bold">10. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of Kenya.
                </p> 
                <h2 className="fw-bold">11. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at info@icm.co.ke.
                </p> 
            </div>
        </div>
    )
}
export default TermsOfServicePage