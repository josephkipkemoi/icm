import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"
import GalleryData from "../data/images.json"

const GalleryPage = () => {
    return (
        <div>
            <Header/>
            <GalleryComponent/>     
            <WhatsAppComponent/>      
            <Footer/>
        </div>
    )
}

const GalleryComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-danger fw-bold">Gallery</h1>
            <hr/>      
            <div className="row">
                <div id="list-example" className="list-group col-sm-3">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">Event Gallery 1</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-2">Event Gallery 2</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">Event Gallery 3</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">Event Gallery 4</a>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example col-sm-8" tabIndex="0">
                    <h4 id="list-item-1" className="fw-bold mt-3 mb-3">Event Gallery 1</h4>
                        <div className="rounded-5">
                            {GalleryData.images_1.map((val, i) => {
                                const { img_url,caption } = val
                                return (
                                    <img key={i} src={img_url} className="p-4 shadow rounded-4 img-fluid m-2" alt={caption}/>
                                )
                            })}
                        </div>
                    <h4 id="list-item-2"  className="fw-bold mt-3 mb-3">Event Gallery 2</h4>
                    <div className="rounded-5">
                        {GalleryData.images_2.map((val, i) => {
                            const { img_url,caption } = val
                            return (
                                <img key={i} src={img_url} className=" p-4 shadow rounded-4 img-fluid m-2" alt={caption}/>
                            )
                        })}
                    </div>
                    <h4 id="list-item-3" className="fw-bold mt-3 mb-3">Gallery 3</h4>
                    <div className="rounded-5">
                        {GalleryData.images_3.map((val, i) => {
                            const { img_url, caption } = val
                            return (
                                <img key={i} src={img_url} className=" p-4 shadow rounded-4 img-fluid m-2" alt={caption}/>
                            )
                            })}
                    </div>
                    <h4 id="list-item-4" className="fw-bold mt-3 mb-3">Gallery 4</h4>
                    <div className="rounded-5">
                        {GalleryData.images_4.map((val, i) => {
                            const { img_url, caption } = val
                            return (
                                <img key={i} src={img_url} className=" p-4 shadow rounded-4 img-fluid m-2" alt={caption}/>
                            )
                            })}
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default GalleryPage