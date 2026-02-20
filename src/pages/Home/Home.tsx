import { useNavigate } from "react-router-dom";
import me from "../../assets/images/me.jpeg";
import FeaturedProducts from "../../components/Features/FeaturedProducts";
import { Hero } from "../../components/Hero/Hero";
import { Button } from "../../components/UI/Button/Button";
import { CtaBanner } from "../../components/UI/CtaBanner/CtaBanner";
import { InfoCards } from "../../components/UI/InfoCards/InfoCards";
import { products } from "../../constants/products.const";
import { features } from "../../constants/storeInfo.tsx";
import { useBasket } from "../../Provider/BasketProvider";
import type { Product } from "../../types/product";
import "./Home.scss";

export const Home = () => {
  const featuredProducts = products.filter(
    (product: Product) => product.bestseller,
  );
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Hero
        variant="split"
        tagline="Since 2021"
        title={
          <>
            {" "}
            Artisan Baking, <br />
            Crafted with Love
          </>
        }
        description="Experience the finest pastries and breads in the city, using traditional techniques and organic ingredients."
        image={me}
        actions={
          <>
            <Button
              text="Explore Menu"
              type="button"
              designType="primary"
              onClick={() => navigate("/products")}
            />
            <Button
              text="Our Story"
              type="button"
              designType="secondary"
              onClick={() => navigate("/about")}
            />
          </>
        }
      />

      <InfoCards
        className="container"
        infoCards={features}
        variant="simple-icon"
      />

      <section className="featured-products">
        <div className="section-header">
          <h2>Our Signature Treats</h2>
          <p>Hand-picked favorites from our master baker</p>
        </div>
        <FeaturedProducts
          products={featuredProducts}
          onAddToBasket={(product) => addToBasket(product)}
        />
      </section>
      <CtaBanner
        title="Visit Us Today"
        description="Smell the fresh aroma of baking bread and enjoy a warm cup of coffee."
        buttonText="Get Directions"
        buttonLink="/contact"
      />
    </div>
  );
};
