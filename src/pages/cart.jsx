import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import "./cart.css"

const CartPage = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(storedCart)
    }, [])

    const updateCart = (items) => {
        localStorage.setItem("cart", JSON.stringify(items))
        setCartItems(items)
    }

    const removeItem = (index) => {
        const updated = [...cartItems]
        updated.splice(index, 1)
        updateCart(updated)
    }

    const incrementQuantity = (index) => {
        const updated = [...cartItems]
        updated[index].quantity += 1
        updateCart(updated)
    }

    const decrementQuantity = (index) => {
        const updated = [...cartItems]
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1
            updateCart(updated)
        }
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.quantity * (item.price || 0)), 0)

    return (
        <div>
            <Header />
            <div className="container mt-5 mb-5">
                <h2>Your Cart</h2>
                <hr />
                {cartItems.length === 0 ? (
                    <div className="alert alert-info text-center">Your cart is empty. <Link to="/products">Browse products</Link></div>
                ) : (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.image} alt={item.product_name} style={{ width: "70px", borderRadius: "10px" }} /></td>
                                        <td>{item.product_name}</td>
                                        <td>{item.size}g</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-sm btn-secondary me-1" onClick={() => decrementQuantity(index)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className="btn btn-sm btn-secondary ms-1" onClick={() => incrementQuantity(index)}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="text-end">
                            <h5>Total Items: {totalItems}</h5>
                            {totalPrice > 0 && <h5>Total Price: KES {totalPrice}</h5>}
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success">
                                Proceed to Checkout
                            </button>
                        </div>
                        <hr/>
                        <div className="mt-4 mb-4 text-center" >
                            <h5>All payments to be made via Safaricom Paybill below: </h5>
                            <h6 className="fw-bold">ICM SOLUTIONS LIMITED</h6>
                            <hr className="text-light"/>
                            <p>Paybill: <h2><strong>4166189</strong></h2> </p>
                            <p>Account No: <h2><strong>07xx-xxx-xxx </strong></h2>(Mobile Number)</p>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default CartPage
