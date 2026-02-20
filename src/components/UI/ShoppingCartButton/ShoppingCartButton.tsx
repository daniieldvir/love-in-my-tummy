import { FaShoppingCart } from "react-icons/fa";
import { useBasket } from "../../../Provider/BasketProvider";
import "./ShoppingCartButton.scss";
type Props = {
  className: string;
  onClick: () => void;
};

export const ShoppingCartButton = ({ className, onClick }: Props) => {
  const { basket } = useBasket();
  const badge = basket.reduce((total, item) => total + item.quantity, 0);
  return (
    <button className={`shopping-cart-btn ${className}`} onClick={onClick}>
      <FaShoppingCart />
      <span className="cart-badge">{badge}</span>
    </button>
  );
};
