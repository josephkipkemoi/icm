import { useEffect, useRef } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SupportComponent from "../components/support"
import WhatsAppComponent from "../components/whatsapp"
import FaqData from "../data/faq.json"
import { useLocation } from "react-router-dom"

const FAQ = () => {
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
            <FAQComponent/>
            <SupportComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const FAQComponent = () => {
    return (
        <div className="container mt-3">
            <div>
                <h1 className="text-danger fw-bold mt-5 mb-5">FAQs</h1>
            </div>
            <article>
                 <hr className="text-secondary"/>
                {FaqData.data.map((value,index) => {
                    const { question_answer, question_title } = value
                    return (
                        <>                       
                            <details key={index}>                  
                                <summary>
                                    <h3 className="d-flex align-items-center fw-bold"><h1 className="fw-bold text-danger">Q.</h1>{question_title}</h3>
                                </summary>
                                <h5 className="d-flex align-items-center"><h3 className="text-warning fw-bold">A.</h3>{question_answer}</h5>
                            </details>
                            <hr className="text-secondary"/>
                        </>                  
                    )
                })}             
            </article>
        </div>
    )
}

export default FAQ