import { useEffect, useRef } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import { useLocation } from "react-router-dom"

const PrivacyPolicyPage = () => {
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
            <PrivacyPolicyComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const PrivacyPolicyComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Privacy Policy</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <h2 className="fw-bold">1. Information We Collect</h2>
            <p>
                <ul>
                    <li>Personal Identifiers: Full name, email address, phone number</li>
                    <li>Payment Information: MPESA transaction details or card payment details (processed through secure third-party providers)</li>
                    <li>Account Information: If you create an account, we collect your login credentials</li>
                    <li>Usage Information: IP address, device type, browser information, and browsing activity on our site </li>
                </ul>                        
            </p>
            <h2 className="fw-bold">2. How We Use Your Information</h2>
            <p>
                We use your information for the following purposes:
                <ul>
                    <li>To process and fulfill your orders</li>
                    <li>To communicate with you regarding purchases or inquiries</li>
                    <li>To send you updates, newsletters, and promotional offers (only if you opt in)</li>
                    <li>To improve our website, products, and customer service</li>
                    <li> To comply with legal and regulatory requirements</li>
                </ul>                    
            </p>
            <h2 className="fw-bold">3. How We Share Your Information</h2>
            <p>
                We do not sell your personal information. We may share your data with:
                <ul>
                    <li>Payment processors (e.g., MPESA, card processing partners) to complete transactions</li>
                    <li> Service providers who assist in website hosting, email services, or customer support</li>
                    <li>Government authorities if required by law or to protect our legal interests </li>
                </ul>        
            </p>
            <h2 className="fw-bold">4. Data Storage and Security</h2>
            <p>
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, no method of transmission or storage is 100% secure. We encourage users to keep their login credentials confidential.
            </p>
            <h2 className="fw-bold">5. Your Rights</h2>
            <p>
                As a user in Kenya, you have the right to:
                <ul>
                    <li>Access the personal data we hold about you</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Withdraw consent to marketing at any time</li>
                    <li>Request deletion of your data where applicable</li>
                    <li>To exercise these rights, email us at info@icm.co.ke.</li>
                </ul>
            </p>
            <h2 className="fw-bold">6. Cookies</h2>
            <p>
                We may use cookies and similar technologies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, 
                though some features of the Site may not function properly.
            </p>
            <h2 className="fw-bold">7. Children’s Privacy</h2>
            <p>
                Our services are not intended for children under 18. We do not knowingly collect data from minors without parental consent.
            </p>
            <h2 className="fw-bold">8. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
            </p>
            <h2 className="fw-bold">9. Contact Us</h2>
            <p>
                For questions or concerns about this Privacy Policy, please contact: <br/>
            Integrated Crop Management Solutions Limited <br/>
            Email: info@icm.co.ke            
            </p>
        </div>
    )
}

export default PrivacyPolicyPage