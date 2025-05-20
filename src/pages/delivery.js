import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"

const DeliveryPage = () => {
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
            <DeliveryComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const DeliveryComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="fw-bold text-success">Delivery Policy</h1>
            <hr/>
            <small>Effective Date: 08/05/2025</small><br/>
            <small>Website: www.icm.co.ke</small><br/>
            <small>Company: Integrated Crop Management Solutions Limited ("ICMS", "we", "us", or "our")</small>
            <p>
            This Delivery Policy outlines how we handle the shipment and delivery of products purchased from our website. 
            We are committed to ensuring timely and secure delivery across Kenya.
            </p>
            <h2 className="fw-bold">1. Delivery Areas</h2>
            <p>
             We deliver products within Kenya only. Delivery availability is subject to your location and may be limited by courier coverage.
            </p>
            <h2 className="fw-bold">2. Delivery Timeframes</h2>
            <p>
                <li>Standard Delivery: 2–5 business days (depending on location)</li>
                <li>Same-Day or Next-Day Delivery: May be available in select urban areas (e.g., Nairobi) for orders placed before 12 PM</li>
                <li>Deliveries are made during working hours: Monday to Saturday, 8:00 AM – 5:00 PM </li>
                Please note that delivery times are estimates and not guaranteed, especially during peak seasons or in remote areas.
           </p>
            <h2 className="fw-bold">3. Delivery Charges</h2>
            <p>
                <ul>
                    <li>Delivery fees vary based on your location and order size. The exact fee will be calculated at checkout.</li>
                    <li>Free delivery may be offered for promotional periods or orders above a specific value.</li>
                </ul>
            </p>
            <h2 className="fw-bold">4. Order Processing</h2>
            <p>
                <ul>
                    <li>Orders are processed once payment is confirmed via MPESA or card.</li>
                    <li>Orders placed after business hours or on public holidays will be processed the next working day.</li>
                </ul>
            </p>
            <h2 className="fw-bold">5. Delivery Partners</h2>
            <p>
                We use trusted third-party couriers and local delivery services to fulfill orders. Once dispatched, you will receive a confirmation email or SMS with tracking details (if applicable).
            </p>
            <h2 className="fw-bold">6. Missed Deliveries</h2>
            <p>
                If the delivery cannot be completed due to incorrect address, unavailability, or other issues, our team or courier will contact you to reschedule. Additional delivery attempts may incur extra charges.
            </p>
            <h2 className="fw-bold">7. Damaged or Missing Items</h2>
            <p>
                Please inspect your order upon delivery. If an item is damaged, missing, or incorrect:
                <ul>
                    <li>Contact us within 48 hours at info@icm.co.ke</li>
                    <li>Provide your order number, details of the issue, and photos (if applicable)</li>
                </ul>
                We will investigate and resolve the matter as quickly as possible.
            </p>
            <h2 className="fw-bold">8. In-Store Pickup (if applicable)</h2>
            <p>
                If we offer a pick-up option, it will be listed at checkout. You must bring proof of purchase (order confirmation or ID) when collecting your order.
            </p>
            <h2 className="fw-bold">9. Contact Us</h2>
            <p>
            For questions about delivery or order tracking, contact: <br/>
            📧 info@icm.co.ke            
            </p>
        </div>
    )
}

export default DeliveryPage