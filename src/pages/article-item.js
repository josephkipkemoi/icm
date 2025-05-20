import { useLocation, useParams } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import ArticleData from "../data/blog.json"
import "./article-item.css"
import SocialMediaLinksComponent from "../components/social-media-links"
import { useEffect, useRef } from "react"

const ArticleItemPage = () => {
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
            <ArticleItemComponent/>
            <Footer/>
        </div>
    )
}

const ArticleItemComponent = () => {
    const { article_category, article_id } = useParams()
 
    const data = ArticleData.data[article_category.toLowerCase()].filter(val => val.id === Number(article_id))

    return (
        <div className="container mt-5 mb-5 blog-article-container">
           {data.map((val, i) => {
            const { blog_title, blog_author, blog_published_on, blog_img_url, blog_post, blog_category } = val
            return (
                <article key={i}>
                    <h1 className="mb-3"><strong>{blog_title}</strong></h1>
                    <div className="d-flex justify-content-center">
                        <img src={blog_img_url} alt="blog_img" className="img-fluid rounded-4" /> 
                    </div>
                    <div className="mt-3">
                        <small>Author: {blog_author}</small> <br/>
                        <small>Published on: {blog_published_on}</small> <br/>
                        <small>Category: {blog_category}</small>
                    </div>
                    <p>
                        {blog_post}
                    </p>
                    <div>
                        <p>Share this Article:</p>
                        <SocialMediaLinksComponent/>
                    </div>
                </article>
            )
           })}
        </div>
    )
}

export default ArticleItemPage