import { useState } from 'react';
import FeaturedProducts from '../../components/Features/FeaturedProducts';
import { Header } from '../../components/Header/header';
import { products } from '../../constants/products.const';
import './Products.scss';

const CATEGORIES = ['All', ...Array.from(new Set(products.map(p => p.category)))];


export const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="products-page">
            <Header />

            <section className="products-hero">
                <div className="container">
                    <h1 className="animate-fade-in">Our Collection</h1>
                    <p className="animate-fade-in">Every item is handcrafted with the finest ingredients and a touch of magic.</p>
                </div>
            </section>

            <section className="catalog container">
                <div className="filter-bar">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <FeaturedProducts products={filteredProducts} />

            </section>

            <footer className="simple-footer">
                <p>&copy; 2024 Boulangerie Luxe • Handcrafted & Heartfelt</p>
            </footer>
        </div>
    );
};
