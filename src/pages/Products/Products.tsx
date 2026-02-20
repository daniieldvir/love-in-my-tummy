import { useState } from "react";
import FeaturedProducts from "../../components/Features/FeaturedProducts";
import { products } from "../../constants/products.const.ts";
import { useBasket } from "../../Provider/BasketProvider";
import "./Products.scss";
import { Button } from "../../components/UI/Button/Button.tsx";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToBasket } = useBasket();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1 className="animate-fade-in">Our Collection</h1>
          <p className="animate-fade-in">
            Every item is handcrafted with the finest ingredients and a touch of
            magic.
          </p>
        </div>
      </section>

      <section className="catalog container">
        <div className="filter-bar">
          {CATEGORIES.map((cat) => (
            <Button
              type="button"
              key={cat}
              text={cat}
              designType="secondary"
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <FeaturedProducts
          products={filteredProducts}
          onAddToBasket={(product) => addToBasket(product)}
        />
      </section>
    </div>
  );
};
