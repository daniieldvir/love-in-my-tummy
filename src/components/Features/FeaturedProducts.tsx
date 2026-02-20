import type { Product } from "../../types/product";
import { Button } from "../UI/Button/Button";
import "./FeaturedProducts.scss";

type Props = {
  products: Product[];
  onAddToBasket: (product: Product) => void;
};

const FeaturedProducts = ({ products, onAddToBasket }: Props) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card animate-fade-in">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} />
            <span className="category-tag">{product.category}</span>
          </div>
          <div className="product-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-bottom">
              <span className="price"> $ {product.price.toFixed(2)}</span>
              <Button
                text="Add to Basket"
                type="button"
                designType="secondary"
                className="add-to-basket-btn"
                onClick={() => onAddToBasket(product)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
