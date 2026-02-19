import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo/logo.png';
import { ShoppingCartButton } from '../../assets/UI/ShoppingCartButton/ShoppingCartButton';
import { navItems } from '../../constants/navItems.const';
import './header.scss';


export const Header = () => {
    return <div className="header">
        <div className="header-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="header-nav">
            <ul>
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className="header-actions">
                <ShoppingCartButton className="cart-btn" onClick={() => { }}>
                    <FaShoppingCart />
                    <span className="cart-badge">0</span>
                </ShoppingCartButton>
            </div>

        </div>

    </div>;
};