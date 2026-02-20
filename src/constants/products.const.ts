import chocolateCake from "../assets/images/chocolate_cake.jpeg";
import lemonPieWithChocolate from "../assets/images/lemon_pie_chocolate.jpeg";
import macaroons from "../assets/images/macaroons.jpeg";
import vanillaCake from "../assets/images/vanilla_cake.jpeg";
import birthdayCake from "../assets/images/birthday_cake.jpeg";
import cinnamonCake from "../assets/images/cinnamon.jpeg";
import benitza from "../assets/images/benitza.jpeg";
import almondPie from "../assets/images/almond_pie.jpeg";
import appleCake from "../assets/images/apple_cake.jpeg";
import raspberryPistachioPie from "../assets/images/raspberry_pistachio_pie.jpeg";
import chocolateCroissant from "../assets/images/chocolate_croissant.jpeg";
import garlicBread from "../assets/images/garlic_bread.jpeg";
import spinachCheesePastry from "../assets/images/spinach_cheese_pastry.jpeg";
import coconutCakeWithChocolate from "../assets/images/coconut_cake_with_chocolate.jpeg";
import cheeseSweetPotatoPastry from "../assets/images/cheese_sweet_potato.jpeg";
import almondPastry from "../assets/images/almond_pastry.jpeg";
import saintHonore from "../assets/images/saint_honore.jpeg";
import classicSourdough from "../assets/images/classic_sourdough.jpeg";
import challahWithCheeseAndHerbs from "../assets/images/challah_cheese_herbs.jpeg";
import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Sourdough",
    category: "Breads",
    price: 8.5,
    image: classicSourdough,
    description: "Naturally leavened for 24 hours for deep flavor.",
  },
  {
    id: 2,
    name: "Almond Croissant",
    category: "Pastries",
    price: 5.5,
    image: almondPastry,
    description: "Double-baked with almond cream and sliced almonds.",
  },
  {
    id: 3,
    name: "Raspberry pistachio pie",
    category: "Pies",
    price: 45.0,
    image: raspberryPistachioPie,
    description:
      "Delicious and crispy pie with raspberry filling and pistachio cream on top.",
  },
  {
    id: 4,
    name: "Challah with cheese and herbs",
    category: "Breads",
    price: 8.0,
    image: challahWithCheeseAndHerbs,
    description: "A traditional Jewish bread made with cheese and herbs.",
  },
  {
    id: 5,
    name: "Macaroons",
    category: "Pastries",
    bestseller: true,
    price: 12.0,
    image: macaroons,
    description: "Box of 6 delicate macaroons with different flavors.",
  },
  {
    id: 6,
    name: "Apple Cake",
    category: "Cakes",
    price: 30.0,
    image: appleCake,
    description:
      "Delicious and crispy cake with apple filling and chocolate on top.",
  },
  {
    id: 7,
    name: "Chocolate Cake",
    category: "Cakes",
    price: 45.5,
    image: chocolateCake,
    description: "Delicious and crispy croissant with chocolate filling.",
  },
  {
    id: 8,
    name: "Lemon Pie with white chocolate",
    category: "Pies",
    bestseller: true,
    price: 35.0,
    image: lemonPieWithChocolate,
    description:
      "Delicious and crispy pie with lemon filling and white chocolate on top.",
  },
  {
    id: 9,
    name: "Vanilla Cake",
    category: "Cakes",
    price: 45.5,
    image: vanillaCake,
    description: "Delicious and crispy croissant with vanilla filling.",
  },
  {
    id: 10,
    name: "Birthday Cake",
    category: "Cakes",
    price: 50.0,
    image: birthdayCake,
    description:
      "3 layers of cracker cake with vanilla cream and cookie crumble topping.",
  },
  {
    id: 11,
    name: "Cinnamon Cake",
    category: "Cakes",
    price: 35.5,
    image: cinnamonCake,
    description:
      "Cinnamon flavored cake with cinnamon cream and Cream cheese on top.",
  },
  {
    id: 12,
    name: "Benitza",
    category: "Pastries",
    price: 35.5,
    image: benitza,
    description: "Filo pastry with royal cream and spinach",
  },
  {
    id: 13,
    name: "Almond pie",
    category: "Pies",
    price: 34.5,
    image: almondPie,
    description:
      "Delicious and crispy pie with almond filling and caramel on top.",
  },
  {
    id: 14,
    name: "Chocolate croissant",
    category: "Pastries",
    price: 4.5,
    image: chocolateCroissant,
    description: "Delicious and crispy croissant with chocolate filling.",
  },
  {
    id: 15,
    name: "Garlic bread stuffed with cheese",
    category: "Breads",
    bestseller: true,
    price: 28.0,
    image: garlicBread,
    description: "Buttery, flakey, and baked fresh every morning.",
  },
  {
    id: 16,
    name: "Spinach cheese pastry",
    category: "Pastries",
    price: 34.5,
    image: spinachCheesePastry,
    description:
      "Delicious and crispy pastry with spinach filling and cheese on top.",
  },
  {
    id: 17,
    name: "Coconut cake with chocolate",
    category: "Cakes",
    price: 45.5,
    image: coconutCakeWithChocolate,
    description:
      "Delicious and crispy cake with coconut filling and chocolate on top.",
  },
  {
    id: 18,
    name: "Cheese and sweet potato pastry",
    category: "Pastries",
    price: 45.5,
    image: cheeseSweetPotatoPastry,
    description:
      "Delicious and crispy pastry with cheese and sweet potato filling and cream cheese on top.",
  },
  {
    id: 19,
    name: "Saint Honore",
    category: "Pastries",
    price: 34.5,
    image: saintHonore,
    description:
      "A circular puff pastry base topped with caramel-glazed choux puffs, filled with cream and finished with whipped cream.",
  },
];
