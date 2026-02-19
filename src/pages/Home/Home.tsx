import { useNavigate } from 'react-router-dom';
import me from '../../assets/images/me.jpeg';
import FeaturedProducts from '../../components/Features/FeaturedProducts';
import { Features } from '../../components/Features/Features';
import { Footer } from '../../components/Footer/Footer';
import { Button } from '../../components/UI/Button/Button';
import { products } from '../../constants/products.const';
import { useBasket } from '../../Provider/BasketProvider';
import type { Product } from '../../types/product';
import './Home.scss';

export const Home = () => {
    const featuredProducts = products.filter((product: Product) => product.bestseller);
    const { addToBasket } = useBasket();
    const navigate = useNavigate();


    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content animate-fade-in">
                    <span className="hero-tagline">Since 2021</span>
                    <h1>Artisan Baking, <br />Crafted with Love</h1>
                    <p>Experience the finest pastries and breads in the city, using traditional techniques and organic ingredients.</p>
                    <div className="hero-actions">
                        <Button text="Explore Menu" type="primary" className="explore-menu" onClick={() => navigate('/products')} />
                        <Button text="Our Story" type="secondary" className="our-story" onClick={() => navigate('/about')} />
                    </div>
                </div>
                <div className="hero-image">
                    <img src={me} alt="chef" />
                </div>
            </section>

            <section className="container">
                <Features />
            </section>

            <section className="featured-products container">
                <div className="section-header">
                    <h2>Our Signature Treats</h2>
                    <p>Hand-picked favorites from our master baker</p>
                </div>
                <FeaturedProducts products={featuredProducts} onAddToBasket={(product) => addToBasket(product)} />

            </section>

            <section className="cta-banner">
                <div className="container animate-fade-in">
                    <h2>Visit Us Today</h2>
                    <p>Smell the fresh aroma of baking bread and enjoy a warm cup of coffee.</p>
                    <Button text="Get Directions" type="primary" className="get-directions" onClick={() => { }} />
                </div>
            </section>

            <Footer />
        </div>
    );
};