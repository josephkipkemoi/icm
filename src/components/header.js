import { Link, useLocation } from "react-router-dom"
import "./header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo512.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = ({ updateCart }) => {
    return (
        <header className="nav-bg-component">
            {/* <SocialMediaLinksComponent/>
            <hr/> */}
            <HeaderComponent
                updateCart={updateCart}
            />
        </header>
    )
}

// const SocialMediaLinksComponent = () => {
//     return (
//         <div className="nav-media-link d-flex justify-content-end align-items-center p-1">
//             <button className="text-light">
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                     <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
//                 </svg>
//             </button>
//             <button className=" text-light">
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
//                     <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
//                 </svg>
//             </button>
//             <button className=" text-light">
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
//                     <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
//                 </svg>
//             </button>
//             <a href="https://wa.me/254795216873" target="_blank" rel="noreferrer" className=" text-light">
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                     <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
//                 </svg> 
//             </a>
//             <button className=" text-light">
//                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                     <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
//                 </svg>
//             </button>
//         </div>
//     )
// }

const HeaderComponent = ({ updateCart }) => {
    const location = useLocation()
    const [cartCounter, setCartCounter] = useState(0)

    const fetchCartFromLocalStorage = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart"))
        setCartCounter(cartItems?.length)
    }

    useEffect(() => {
        fetchCartFromLocalStorage()
    }, [cartCounter,location,updateCart])
    return (
        <div className="nav-bg-component">
            <Navbar variant="none" expand="lg" className=" nav-bg" >
                <Container fluid className="nav-bg-component">
                    <Navbar.Brand className="nav-bg-component">
                    <h1 className="fw-bold text-primary ">
                        <Link to="/" className="text-decoration-none">
                            <img src={Logo} alt="logo" className="img-fluid rounded-4 p-2"/>
                        </Link>                    
                    </h1> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="nav-bg-component" />
                    <Navbar.Collapse id="navbarScroll"  className="nav-bg-component">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-bg-component"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="nav-link text-decoration-none"> 
                                Home
                        </Link>   
                        <NavDropdown className="text-light" title="About Us" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-down">
                            <Link to="/about-us" className="text-decoration-none text-dark"> 
                                About Us
                            </Link>                
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/returns" className="text-decoration-none text-dark"> 
                                Returns
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delivery" className="text-decoration-none text-dark"> 
                                Delivery
                            </Link>                
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <Link to="/careers" className="text-decoration-none text-dark"> 
                                Careers
                            </Link> 
                        </NavDropdown.Item>
                        </NavDropdown>                 
                        <Link to="/products" className="nav-link text-decoration-none"> 
                                Products
                        </Link> 
                        <Link to="/services" className="nav-link text-decoration-none"> 
                                Services
                        </Link> 
                        <Link to="/gallery" className="nav-link text-decoration-none"> 
                                Gallery
                        </Link> 
                        <Link to="/articles" className="nav-link text-decoration-none"> 
                                Articles
                        </Link> 
                        <Link to="/contact-us" className="nav-link text-decoration-none"> 
                                Contact Us
                        </Link>
                        <Link to="/faq" className="nav-link text-decoration-none"> 
                                FAQ
                        </Link> 
                       <Link to="/cart" className="btn  d-flex align-items-center">
                            <FontAwesomeIcon icon={faShoppingCart} /> 
                            <span className="cart-counter">{cartCounter}</span>
                            <span className="m-1">Cart</span>
                       </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default Header