
import { Button } from '../../assets/UI/Button/Button';
import type { Product } from '../../types/product';
import './FeaturedProducts.scss';

type Props = {
    products: Product[];
    onAddToBasket: (product: Product) => void;
}

const FeaturedProducts = ({ products, onAddToBasket }: Props) => {
    return <div className="products-grid">
        {products.map(product => (
            <div key={product.id} className="product-card animate-fade-in">
                <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                        <button className="quick-view">View Details</button>
                    </div>
                    <span className="category-tag">{product.category}</span>
                </div>
                <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-bottom">
                        <span className="price">{product.price}</span>
                        <Button text="Add to Basket" type="add-to-basket" className="add-btn" onClick={() => onAddToBasket(product)} />
                    </div>
                </div>
            </div>
        ))}
    </div>
}

export default FeaturedProducts;