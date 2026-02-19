import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Checkout } from './pages/Checkout/Checkout';
import { BasketProvider } from './Provider/BasketProvider';

const App: React.FC = () => {
  return (
    <BasketProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BasketProvider>
  );
};

export default App
