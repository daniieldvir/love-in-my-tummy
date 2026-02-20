import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { SuccessIcon } from "../../components/UI/SuccessIcon/SuccessIcon";
import { useBasket } from "../../Provider/BasketProvider";
import "./Checkout.scss";
import {
  CustomerInfoForm,
  OrderSummary,
  ShippingInfoForm,
} from "./CheckoutSections";

export const Checkout = () => {
  const { basket, clearBasket } = useBasket();
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = basket.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const shipping = 5.0;
  const total = subtotal + shipping;

  const canSubmit =
    !!customerInfo.name &&
    !!customerInfo.email &&
    !!customerInfo.phone &&
    !!shippingInfo.address &&
    !!shippingInfo.city;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;
    setIsOrdered(true);
    clearBasket();
  };

  if (basket.length === 0 && !isOrdered) {
    return (
      <div className="checkout-success">
        <h1>Your basket is empty</h1>
        <p>Add some delicious treats before checking out!</p>
        <Link to="/products" className="back-home-btn">
          Go to Shop
        </Link>
      </div>
    );
  }

  if (isOrdered) {
    return (
      <div className="checkout-success">
        <SuccessIcon backgroundColor="#e8f5e9" color="#4caf50" />
        <h1>Order Placed!</h1>
        <p>
          Thank you for placing your order! We will contact you by phone to
          confirm the details before processing it
        </p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header-logo">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <CustomerInfoForm data={customerInfo} setData={setCustomerInfo} />
          <ShippingInfoForm data={shippingInfo} setData={setShippingInfo} />
        </form>
        <OrderSummary
          basket={basket}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          handlePlaceOrder={handlePlaceOrder}
          isFormValid={canSubmit}
        />
      </div>
    </div>
  );
};
