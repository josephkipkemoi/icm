import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"

const ReturnPage = () => {
    return (
        <>
            <Header/>
            <ReturnsComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </>
    )
}

const ReturnsComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Returns and Refund Policy</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <p>
                We want you to be satisfied with your purchase. Please read our Return and Refund Policy to understand how we handle returns, exchanges, and refunds.
            </p>
            <h2 className="fw-bold">1. Return Eligibility</h2>
            <p>
                You may return eligible items purchased from our website under the following conditions:
                <ul>
                    <li>The return request is made within 7 days of delivery</li>
                    <li>The product is unused, unopened, and in its original packaging</li>
                    <li>You have a valid proof of purchase (order confirmation or receipt)</li>
                </ul>
            </p>
            <h2 className="fw-bold">2. Non-Returnable Items</h2>
            <p>
             We do not accept returns on the following:
                <ul>
                    <li>Opened or used seed packets</li>
                    <li>Digital training materials or services</li>
                    <li>Gift cards or promotional items</li>
                    <li>Perishable items or those damaged after delivery</li>
                </ul>
            </p>
            <h2 className="fw-bold">3. How to Request a Return</h2>
            <p>
                To initiate a return, contact our customer service team at info@icm.co.ke with the following:
                <ul>
                    <li>Your name and order number</li>
                    <li>Reason for the return</li>
                    <li>Photos (if the item is damaged or incorrect)</li>
                </ul>
                Once approved, we will provide instructions for returning the product.
            </p>
            <h2 className="fw-bold">4. Refunds</h2>
            <p>
                Once we receive and inspect your returned item, we will notify you of the status. If approved:
            <ul>
                <li>Refunds will be processed to the original payment method (MPESA or card)</li>
                <li>It may take up to 7-14 business days for the funds to reflect, depending on your bank or payment provider</li>
            </ul>
            </p>
            <h2 className="fw-bold">5. Exchanges</h2>
            <p>
                We only replace items if they are defective or damaged upon delivery. 
                To request an exchange, email us with details and photos of the product within 48 hours of receiving it.
            </p>
            <h2 className="fw-bold">6. Shipping Costs</h2>
            <p>
                <ul>
                    <li>Return shipping costs are the responsibility of the customer, unless the return is due to our error (e.g., wrong or defective item).</li>
                    <li>We recommend using a trackable shipping service. We are not responsible for items lost in transit.</li>
                </ul>
            </p>
            <h2 className="fw-bold">7. Local Delivery Policy</h2>
            <p>
                As we operate within Kenya only, all returns must be shipped back to our local warehouse or drop-off location, which will be shared with you upon return approval.
            </p>
            <h2 className="fw-bold">8. Contact Us</h2>
            <p>
                If you have any questions about this policy or need help with a return, contact:<br/>
                📧 info@icm.co.ke
            </p>
        </div>
    )
}

export default ReturnPage