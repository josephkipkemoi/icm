import { useEffect, useRef } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import { useLocation } from "react-router-dom"

const CookiePolicyPage = () => {
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
            <CookiePolicyComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const CookiePolicyComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Cookie Policy</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <p>
                This Cookie Policy explains how we use cookies and similar technologies on our website. 
                By using our Site, you agree to the use of cookies as described in this policy.
            </p>
            <h2 className="fw-bold">1. What Are Cookies?</h2>
            <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember your preferences, improve performance, and personalize your experience.
            </p>
            <h2 className="fw-bold">2. Types of Cookies We Use</h2>
            <ol>
                <li>
                    Essential Cookies 
                </li>
                <p>
                    These cookies are necessary for the operation of our website. 
                    They include, for example, cookies that allow you to log in, add products to your cart, or make payments.
                </p>
                <li>
                    Performance and Analytics Cookies
                </li>
                <p>
                    These cookies help us understand how visitors interact with our website by collecting anonymous information. 
                    This helps us improve functionality and user experience.
                </p>
                <li>
                    Functional Cookies
                </li>
                <p>
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences or login details.
                </p>
                <li>
                    Marketing and Advertising Cookies
                </li>
                <p>
                    We may use these to deliver relevant ads or promotions. They may be set by us or third-party advertising partners.
                </p>
            </ol>
           
            <h2 className="fw-bold">3. Third-Party Cookies</h2>
            <p>
                We may allow third-party services such as payment gateways (e.g., MPESA, card processors) or analytics tools (like Google Analytics) 
                to place cookies on your device when you use our website. These third parties are responsible for their own cookie policies.
            </p>
            <h2 className="fw-bold">4. How to Manage Cookies</h2>
            <p>
                You can manage or disable cookies through your browser settings. Please note that disabling cookies may impact the functionality of certain parts of our website.
                <ul>
                    <li>For Chrome: chrome://settings/cookies</li>
                    <li>For Firefox: about:preferences#privacy</li>
                    <li>For Safari: Preferences - Privacy - Manage Website Data</li>
                    <li>For Edge: Settings - Cookies and site permissions</li>
                </ul>
            </p>
            <h2 className="fw-bold">5. Changes to This Cookie Policy</h2>
            <p>
                We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. 
                Any updates will be posted on this page with a new effective date.
            </p>
            <h2 className="fw-bold">6. Contact Us</h2>
            <p>
            If you have any questions about our use of cookies, please contact us at: <br/>
            Email: info@icm.co.ke
            </p>
        </div>
    )
}


export default CookiePolicyPage