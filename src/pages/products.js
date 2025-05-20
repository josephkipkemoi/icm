import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import "./product.css"
import ProductData from "../data/products.json"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

const ProductPage = () => {
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
            <ProductComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const ProductComponent = () => {
    return (
        <div className="p-5 mb-5 product-container">
            <h1 className="text-danger fw-bold">Products</h1>
            <hr/>
            <div className="d-flex mt-3 mb-5">
                    <input type="search" className="form-control p-3" placeholder="Search for product..." />
                </div>
            <div>
                <h2 className="fw-bold mb-3">Cabbage Seeds</h2>
                <CabbageComponent/>   
                <hr className="text-success mt-5 mb-5" />
                <h2 className="fw-bold mb-3">Squash Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.squash.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div>     
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Carrot Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.carrot.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Beans Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.beans.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Celery Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.celery.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Tomato Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.tomatoe.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Pakchoi Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.pakchoi.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Lettuce Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.lettuce.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Capsicum Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.capsicum.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Spinach Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.spinach.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Watermellon Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.watermellon.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
                <hr className="text-success mt-5 mb-5" />      
                <h2 className="fw-bold mb-3">Onion Seeds</h2>
                <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.onion.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
                </div> 
            </div>
        </div>
    )
}

const CabbageComponent = () => {
    return (
    <div className="d-sm-flex flex-wrap justify-content-start product-container-box">
                    {ProductData.data.cabbage.map((value, index) => {
                        const { product_name, id, product_image_url, product_category } = value
                        return (
                        <Link to={`/products/category/${product_category}/${id}`} className="card shadow nav-link border-0 rounded-4 m-2" key={index}>
                            <div className="card card-body border-0 rounded-4">
                                <img 
                                src={product_image_url}
                                alt="cabbage" 
                                className="img-fluid rounded-4"
                                />
                                <h5 className="mt-4">{product_name}</h5>
                            </div>
                        </Link>
                        )
                    })}                   
    </div>  
    )
}

export { 
    ProductPage, 
    CabbageComponent
}