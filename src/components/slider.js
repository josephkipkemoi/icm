import { Carousel } from "react-bootstrap"
import "./slider.css"
import Img5 from "../images/cabbages/img5.jpg"
import Img2 from "../images/cabbages/img2.jpg"
import Img3 from "../images/cabbages/img3.jpg"
import { Link } from "react-router-dom"

const SliderComponent = () => {
    return (
        <main className="p-4">
            <div className="row">
                <div className="col-sm d-flex flex-column justify-content-center text-center">
                    <h1 className="fw-bold">GROW YOUR PERFECT GARDEN WITH <strong className="text-success">PREMIUM SEEDS</strong></h1>
                    <p className="mt-4 mb-5">
                        Discover our curated collection of high-quality seeds for beautiful flowers, nutritious vegetables, and aromatic herbs.
                    </p>
                    <div>
                        <Link to="/products" className="btn btn-primary btn-lg">View Products</Link>
                    </div>                  
                </div>
                <Carousel className="col col-8 col-8-sm slider-img-container ">
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img5}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Cabbage Seeds at its Finest</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Lettuce Growing and Harvesting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="img-fluid d-block w-100 rounded-4"
                            src={Img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Best way to handle carrots</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
           
        </main>
    )
}

export default SliderComponent