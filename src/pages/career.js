import { useEffect, useRef } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { useLocation } from "react-router-dom"

const CareerPage = () => {
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
            <CareerPageComponent/>
            <Footer/>
        </div>
    )
}

const CareerPageComponent = () => {
    return (
        <div className="container  mt-5 mb-5">
            <h1 className=" fw-bold">Careers</h1>
            <hr/>
            <p>There are currently no careers</p>
        </div>
    )
}

export default CareerPage