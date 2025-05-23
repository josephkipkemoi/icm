import { Link, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import SliderComponent from './components/slider';
import SupportComponent from './components/support';
import WhatsAppComponent from './components/whatsapp';
import ProductData from "./data/products.json"
import "./App.css"
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faSeedling, faUserDoctor, faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
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
      <SliderComponent/>  
      <ServicesComponent/>
      <CabbageProductsComponent/>
      <SupportComponent/>
      <WhatsAppComponent/>
      <Footer/>
    </div>
  );
}

const CabbageProductsComponent = () => {
  return (
    <div className='landing-component-container'>
      <hr className='text-info'/>
      <div className='p-3 mb-5'>
            <h2 className='fw-bold text-danger m-3'>Cabbage Seeds</h2>
            <div className="row justify-content-around product-container-box">
                {ProductData.data.cabbage.map((value, index) => {
                  const { product_name, id, product_image_url, product_category } = value
                    return (
                      <Link to={`/products/category/${product_category}/${id}`} className=" col-sm-3 nav-link border-0 rounded-4 m-1 mb-5" key={index}>
                          <div className="d-flex flex-column justify-content-between border-0 rounded-4 product-cart-item text-left">
                            <img 
                              src={product_image_url}
                              alt="cabbage"  
                              className="img-fluid rounded-4 p-1 bg-light shadow"
                            />              
                            <div className='d-flex justify-content-center'>
                              <h5 className=" fw-bold text-dark btn  mt-4 rounded-5 shadow btn-lg d-flex justify-content-center">
                                {product_name}
                              </h5>
                            </div>
                          
                          </div>
                      </Link>
                    )
                })}                   
              </div>  
        </div> 
    </div>
  
  )
}

const ServicesComponent = () => {
  return (
    <div className='p-3 text-center service-seeds-component '>
      <h1 className='mt-4 mb-5 fw-bold text-light'>Curated list of  <br/> Services</h1>
      <div className='d-sm-flex justify-content-center mb-5'>
        <div className='card shadow-lg p-5  m-2 rounded-4 product-item-card service-seeds-component-sz text-light'>
          <FontAwesomeIcon icon={faSeedling} size='6x' className='m-3 text-light' />
          <h3 className='text-center fw-bold mt-4'>Vegetable Seed <br/> Merchandising</h3>
        </div>
        <div className='card shadow-lg p-5  m-2 rounded-4 product-item-card service-seeds-component-sz text-light'>
           <FontAwesomeIcon icon={faVialCircleCheck} size='6x' className='m-3 text-light' />
          <h3 className='text-center fw-bold mt-4'>Pesticide Efficacy <br/> Trials</h3>
        </div>
        <div className='card shadow-lg p-5 m-2 rounded-4 product-item-card service-seeds-component-sz text-light'>
          <FontAwesomeIcon icon={faMicroscope} size='6x' className='m-3 text-light' />
          <h3 className='text-center fw-bold mt-4'>Laboratory Services</h3>
        </div>
        <div className='card shadow-lg p-5  m-2 rounded-4 product-item-card service-seeds-component-sz text-light'>
           <FontAwesomeIcon icon={faUserDoctor} size='6x' className='m-3 text-light' />
            <h3 className='text-center fw-bold mt-4'>Professional Training <br/> & Capacity Building</h3>
        </div>
      </div>   
      <Link to="/services" className='btn btn-lg btn-warning fw-bold mb-5'>
          View Services
      </Link>    
    </div>
  )
}
export default App;
