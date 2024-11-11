import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/colorful-gradient-wavy-background_23-2149118590.jpg?GA1.1.1945723705.17306317157semt=ais_hybrid')` }}>
            <div className="hero-card">
                <header className="card-header">
                    <div className="header-logo">
                        <Link to="/" className="logo-link">

                            <img
                                src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-6902.jpg?ga=GA1.1.918818175.1715698361&semt=ais_hybrid"
                                alt="Shopping Cart"
                                className="cart-icon"
                            />
                            Shoppy Globe
                        </Link>
                    </div>
                    <nav className="header-nav">
                        <Link to="/">Home</Link>
                        <Link to="/explore">Explore</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                </header>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Welcome to Our <span>Store</span>
                        </h1>
                        <p className="hero-subtitle">Discover the convenience of online shopping with Shoppy Globe. Browse our extensive collection and find your favorites today. Experience the joy of shopping at your fingertips!</p>
                        <Link to="/explore" className="hero-button">Shop Now</Link>
                    </div>
                    <div className="hero-image">
                        <img src="https://softrockindia.com/wp-content/uploads/2020/12/ecommerce-services.jpg" alt="E-commerce services" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
