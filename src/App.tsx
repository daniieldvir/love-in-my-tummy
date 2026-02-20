import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About/About";
import { Checkout } from "./pages/Checkout/Checkout";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { BasketProvider } from "./Provider/BasketProvider";

const App: React.FC = () => {
  return (
    <BasketProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BasketProvider>
  );
};

export default App;
