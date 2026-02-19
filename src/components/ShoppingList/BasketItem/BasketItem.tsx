import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import './BasketItem.scss';
import type { Product } from '../../../types/product';
import type { BasketItem as BasketItemType } from '../../../Provider/BasketProvider';

interface BasketItemProps {
    item: BasketItemType;
    removeItem: (productId: number) => void;
    addToBasket: (product: Product) => void;
    onRemoveOne: (productId: number) => void;
}
export const BasketItem = ({ item, removeItem, addToBasket, onRemoveOne }: BasketItemProps) => {
    return <div key={item.product.id} className="basket-item">
        <div className="item-image">
            <img src={item.product.image} alt={item.product.name} />
        </div>
        <div className="item-details">
            <div className="item-info">
                <h3>{item.product.name}</h3>
                <div className="price-details">
                    <span className="unit-price">{item.product.price}</span>
                    {item.quantity > 1 && (
                        <span className="item-subtotal">
                            Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                    )}
                </div>
            </div>

            <div className="item-controls">
                <div className="quantity-toggle">
                    <button
                        onClick={() => onRemoveOne(item.product.id)}
                        className="qty-btn"
                    >
                        <FaMinus size={10} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                        onClick={() => addToBasket(item.product)}
                        className="qty-btn"
                    >
                        <FaPlus size={10} />
                    </button>
                </div>
                <button
                    className="remove-item"
                    onClick={() => removeItem(item.product.id)}
                >
                    <FaTrash size={12} />
                </button>
            </div>
        </div>
    </div>
}