import { Carousel } from "react-bootstrap"
import "./slider.css"
import Img5 from "../images/cabbages/img5.jpg"
import Img2 from "../images/cabbages/img2.jpg"
import Img3 from "../images/cabbages/img3.jpg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const SliderComponent = () => {
    return (
        <main className="p-4 slider-main-component">
            <div className="row">
                <div className="col-sm d-flex flex-column justify-content-center text-center">
                    <h1 className="fw-bolder">GROW YOUR PERFECT GARDEN WITH <strong className="text-warning">PREMIUM SEEDS</strong></h1>
                    <p className="mt-4 mb-5">
                        Discover our curated collection of high-quality seeds for beautiful flowers, nutritious vegetables, and aromatic herbs.
                    </p>                   
                    <div>
                    <Link to="/products" className="btn btn-warning btn-lg">
                        <span className=" d-flex align-items-center fw-bold">
                            <FontAwesomeIcon className="m-1" icon={faShoppingCart} />
                            <span className="m-1">Shop Now</span>
                        </span>                       
                    </Link>
                    </div>                  
                </div>
                <Carousel className="col col-8 col-8-sm slider-img-container bg-light p-4 m-2 rounded-4 carousel-mobile shadow-lg">
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
           
        </main>
    )
}

export default SliderComponent