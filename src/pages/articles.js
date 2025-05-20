import Footer from "../components/footer"
import Header from "../components/header"
import "./articles.css"
import articlesData from "../data/blog.json"
import { Link } from "react-router-dom"
import WhatsAppComponent from "../components/whatsapp"

const ArticlePage = () => {
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
            <ArticleComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </div>
    )
}

const ArticleComponent = () => {
    return (
        <div className="p-5 mb-5 article">
            <h1 className="fw-bold text-danger">Articles</h1>
            <hr/>
            <h3 className="fw-bold text-danger">Farming</h3>
            <div className="d-sm-flex flex-wrap justify-content-start ">    
                {articlesData.data.farming.map((value, index) => {
                    const { blog_title, blog_author, blog_img_url,blog_published_on,blog_category,id } = value
                    return (
                    <Link to={`/articles/${blog_category}/${id}`} key={index} className="card border-0 shadow nav-link blog-container m-2">
                        <div className="card card-header border-0">
                             <img 
                                src={blog_img_url}
                                className="img-fluid rounded"
                                alt="farming_img"
                             />
                        </div>
                        <div className="card card-body border-0">
                            <h4>{blog_title}</h4>
                            <span><small>Author: {blog_author}</small></span>
                            <span><small>Published on: {blog_published_on}</small></span>
                            <span><small>Category: {blog_category}</small></span>
                            <hr/>                         
                        </div>
                    </Link>
                    )
                })}
            </div>
            <hr/>
            <h3 className="fw-bold text-danger">Crop Rotation</h3>
            <div className="d-sm-flex flex-wrap justify-content-start ">            
            {articlesData.data.crop_rotation.map((value, index) => {
                    const { blog_title, blog_author, blog_img_url,blog_published_on,blog_category,id } = value
                    return (
                    <Link to={`/articles/${blog_category}/${id}`} key={index} className="card nav-link border-0 shadow blog-container m-2">
                        <div className="card card-header border-0">
                             <img 
                                src={blog_img_url}
                                className="img-fluid rounded"
                                alt="farming_img"
                             />
                        </div>
                        <div className="card card-body border-0">
                            <h4>{blog_title}</h4>
                            <span><small>Author: {blog_author}</small></span>
                            <span><small>Published on: {blog_published_on}</small></span>
                            <span><small>Category: {blog_category}</small></span>
                            <hr/>                         
                        </div>
                    </Link>
                    )
                })}        
            </div>
        </div>
    )
}
export default ArticlePage