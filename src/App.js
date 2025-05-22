import { Link, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import SliderComponent from './components/slider';
import SupportComponent from './components/support';
import WhatsAppComponent from './components/whatsapp';
import ProductData from "./data/products.json"
import "./App.css"
import { useEffect, useRef } from 'react';

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
      <CabbageProductsComponent/>
      <SupportComponent/>
      <WhatsAppComponent/>
      <Footer/>
    </div>
  );
}

const CabbageProductsComponent = () => {
  return (
    <div className='p-3 mb-5'>
      <hr className='text-info'/>
      <h2 className='fw-bold text-danger m-3'>Cabbage Seeds</h2>
        <div className="d-sm-flex justify-content-start product-container-box m-4">
            {ProductData.data.cabbage.map((value, index) => {
              const { product_name, id, product_image_url, product_category } = value
                return (
                  <Link to={`/products/category/${product_category}/${id}`} className="card shadow  nav-link border-0 rounded-4 m-3" key={index}>
                      <div className="d-flex justify-content-between card card-body border-0 rounded-4 product-item-card">
                        <img 
                          src={product_image_url}
                          alt="cabbage"  
                          className="img-fluid rounded-4 p-2 m-2 bg-light"
                        />              
                        <h5 className="mt-2 fw-bold text-light">
                          {product_name}
                        </h5>
                      </div>
                  </Link>
                )
            })}                   
          </div>  
    </div> 
  )
}
export default App;
