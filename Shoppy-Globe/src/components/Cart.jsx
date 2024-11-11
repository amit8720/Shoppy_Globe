
import React, { useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

// Lazy load the CartItem component
const CartItem = React.lazy(() => import('./CartItem'));

const Cart = () => {
    const [checkout, setCheckout] = useState(false); // Track checkout status
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total price based on quantity
    const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Add items to your cart before proceeding to checkout.");
        } else {
            setCheckout(true); // Mark checkout as completed
            alert("Your order is successfully placed!"); // Show success message
        }
    };

    return (
        <div className="cart" style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',

            backgroundImage: `url('https://t4.ftcdn.net/jpg/09/57/83/79/240_F_957837916_6D8j20nOuqI88ynpg35hz0q6ozbJPAlD.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '20px',
        }}>
            <div className="cart-container" style={{
                backgroundColor: '#3d246c',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                maxWidth: '600px',
                width: '100%',
                color: 'white',
            }}>
                <h1 className="cart-title">Your Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <div className="cart-items-container">
                        <Suspense fallback={<div>Loading cart items...</div>}>
                            {cartItems.map((item) => (
                                <CartItem key={item.id} item={item} checkout={checkout} />
                            ))}
                        </Suspense>
                    </div>
                )}

                <div className="total-price-container">
                    <h2 className="total-price-title">Total Price</h2>
                    <p className="total-price">${totalPrice}</p>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
