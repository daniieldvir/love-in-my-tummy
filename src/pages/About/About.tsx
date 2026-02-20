import aboutPic from "../../assets/images/about2.jpeg";
import { CtaBanner } from "../../components/UI/CtaBanner/CtaBanner";
import { Hero } from "../../components/Hero/Hero";
import { Journey } from "../../components/Journey/Journey";
import { Philosophy } from "../../components/Philosophy/Philosophy";
import "./About.scss";

export const About = () => {
  return (
    <div className="about-page">
      <Hero
        variant="cinematic"
        title={
          <>
            A Story Told <br />
            in Every Bite
          </>
        }
        description="We don't just bake — we pour our whole soul into every single thing that comes out of our oven."
        image={aboutPic}
      />

      <section className="about-statement">
        <div className="container">
          <blockquote className="big-quote">
            "I wake up at 4am every morning not because I have to — but because
            I can't imagine anyone starting their day without something truly{" "}
            <em>delicious</em>."
          </blockquote>
          <cite>— The Baker, Love in My Tummy</cite>
        </div>
      </section>

      <Journey />
      <Philosophy />
      <CtaBanner
        title="Taste the Story Yourself"
        description="Every item we make is available to order — fresh, made-to-order, delivered with love."
        buttonText="Shop Our Bakes"
        buttonLink="/products"
      />
    </div>
  );
};
