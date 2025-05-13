import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"

const GiftCardsPage = () => {
    return (
        <>
            <Header/>
            <GiftCardComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </>
    )
}

const GiftCardComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Gift Card Policy</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <p>
                This Gift Card Policy outlines the terms and conditions for the purchase, use, and redemption of gift cards offered by Integrated Crop Management Solutions Limited.
            </p>
            <h2 className="fw-bold">1. Purchase of Gift Cards</h2>
            <p>
            Gift cards are available for purchase on our website in various denominations. They may be used to purchase products or services available at www.icm.co.ke.
            <ul>
                <li>Gift cards are non-refundable and cannot be redeemed for cash.</li>
                <li>No taxes are charged on the purchase of gift cards; applicable taxes will be charged when the gift card is used to make a purchase.</li>
            </ul>
            </p>
            <h2 className="fw-bold">2. Redemption</h2>
            <p>
            <ul>
                <li>Gift cards may be redeemed during checkout by entering the unique gift card code.</li>
                <li>Multiple gift cards can be used in a single order.</li>
                <li>If the total order amount exceeds the gift card value, the remaining balance must be paid via MPESA or card.</li>
            </ul>
            </p>
            <h2 className="fw-bold">3. Expiry and Validity</h2>
            <p>
            <ul>
                <li>Unless otherwise stated, gift cards are valid for 12 months from the date of purchase.</li>
                <li>Expired gift cards will not be reissued, extended, or refunded.</li>
            </ul>
            </p>
            <h2 className="fw-bold">4. Lost or Stolen Gift Cards</h2>
            <p>
                Treat your gift card like cash. We are not responsible for lost, stolen, or unauthorized use of gift cards.
                 If you suspect any fraudulent activity, please contact us immediately at info@icm.co.ke.
            </p>
            <h2 className="fw-bold">5. Restrictions</h2>
            <p>
                Gift cards cannot be used to:
                <ul>
                    <li>Purchase other gift cards</li>
                    <li>Pay for training services that are already booked and invoiced</li>
                    <li>Make purchases outside of Kenya</li>
                </ul>
            </p>
            <h2 className="fw-bold">6. Refunds for Orders Paid with Gift Cards</h2>
            <p>
                If an order paid for with a gift card is canceled or returned, the refund will be issued back to the gift card used.
            </p>
            <h2 className="fw-bold">7. Contact Us</h2>
            <p>
                For assistance with gift card purchases, balances, or redemptions, please contact: <br/>
                📧 info@icm.co.ke
            </p>
        </div>
    )
}

export default GiftCardsPage