import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../Provider/BasketProvider";
import { BasketItem } from "./BasketItem/BasketItem";
import "./ShoppingList.scss";

interface ShoppingListProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingList = ({ isOpen, onClose }: ShoppingListProps) => {
  const { basket, addToBasket, removeFromOne, removeItem } = useBasket();
  const navigate = useNavigate();

  const total = basket.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return createPortal(
    <>
      <div
        className={`shopping-list-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <div className={`shopping-list ${isOpen ? "open" : ""}`}>
        <div className="shopping-list-header">
          <h2>Your Basket</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="basket-content">
          {basket.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-message">Your basket is currently empty.</p>
            </div>
          ) : (
            <div className="basket-items">
              {basket.map((item) => (
                <BasketItem
                  key={item.product.id}
                  item={item}
                  removeItem={() => removeItem(item.product.id)}
                  addToBasket={() => addToBasket(item.product)}
                  onRemoveOne={() => removeFromOne(item.product.id)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="shopping-list-footer">
          <div className="total-section">
            <span>Total Amount</span>
            <span className="total-price">${total.toFixed(2)}</span>
          </div>
          <button
            className="checkout-btn"
            disabled={basket.length === 0}
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </>,
    document.body,
  );
};
