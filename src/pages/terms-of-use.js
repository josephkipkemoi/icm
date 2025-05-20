import { useEffect, useRef } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import { useLocation } from "react-router-dom"

const TermsOfUsePage = () => {
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
            <TermsOfUsageComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const TermsOfUsageComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Terms of Use</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <p>
                Please read these Terms of Use ("Terms") carefully before using our website. 
                By accessing or using our Site, you agree to these Terms. If you do not agree, 
                please do not use the Site.
            </p>
            <h2 className="fw-bold">1. Acceptance of Terms</h2>
            <p>
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and any applicable laws and regulations.
            </p>
            <h2 className="fw-bold">2. Who May Use the Site</h2>
            <p>
                You may use the Site if you are located in Kenya and are at least 18 years old or have permission from a parent or guardian.
            </p>
            <h2 className="fw-bold">3. Use of Website Content</h2>
            <p>
                The content provided on this Site, including text, graphics, images, training materials, and product information, 
                is for informational and transactional purposes only. You may not reproduce, 
                republish, distribute, or modify any content without prior written consent from ICMS.
            </p>
            <h2 className="fw-bold">4. User Accounts</h2>
            <p>
                If you choose to create an account, you are responsible for maintaining the confidentiality of your login information and for all activity that occurs under your account.
            </p>
            <h2 className="fw-bold">5. Purchases</h2>
            <p>
                Purchases made through the Site must be paid via MPESA or card (processed securely through our payment gateway). You agree to provide current, complete, and accurate payment and contact information.
            </p>
            <h2 className="fw-bold">6. Data Collection and Use</h2>
            <p>
                We collect and store personal information (such as name, phone number, and email) to facilitate orders and customer service. See our [Privacy Policy] for full details on data handling practices.
            </p>
            <h2 className="fw-bold">7. Restrictions on Use</h2>
            <p>
                You agree not to:
                <ul>
                    <li>Use the Site in any way that could damage or impair its operation.</li>
                    <li>Attempt to gain unauthorized access to any part of the Site.</li>
                    <li>Upload or transmit viruses or other harmful code.</li>
                    <li>Use the Site to engage in fraudulent or illegal activities. </li>
                </ul>     
            </p>
            <h2 className="fw-bold">8. Termination of Access</h2>
            <p>
                We reserve the right to restrict or terminate your access to the Site at any time without notice for any breach of these Terms.
            </p>
            <h2 className="fw-bold">9. Third-Party Links</h2>
            <p>
                Our Site may contain links to third-party websites, including payment processors. We are not responsible for the content or practices of those websites.
            </p>
            <h2 className="fw-bold">10. Disclaimer</h2>
            <p>
                This Site is provided "as is" and without warranties of any kind, whether express or implied. We do not warrant that the Site will be uninterrupted or error-free.
            </p>
            <h2 className="fw-bold">11. Limitation of Liability</h2>
            <p>
                ICMS shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this Site.
            </p>
            <h2 className="fw-bold">12. Changes to Terms</h2>
            <p>
                We may revise these Terms of Use at any time. Updated versions will be posted on this page with the effective date. Continued use of the Site constitutes acceptance of any changes.
            </p>
            <h2 className="fw-bold">13. Governing Law</h2>
            <p>
                These Terms are governed by the laws of Kenya.
            </p>
            <h2 className="fw-bold">14. Contact Information</h2>
            <p>
                For questions regarding these Terms, please contact us at info@icm.co.ke.
            </p>
        </div>
    )
}

export default TermsOfUsePage