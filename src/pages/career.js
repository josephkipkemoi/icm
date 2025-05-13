import Footer from "../components/footer"
import Header from "../components/header"

const CareerPage = () => {
    return (
        <div>
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