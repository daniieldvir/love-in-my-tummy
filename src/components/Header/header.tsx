import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo/logo.png';
import { navItems } from '../../constants/navItems.const';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { ShoppingCartButton } from '../UI/ShoppingCartButton/ShoppingCartButton';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);

    const navLinks = (closeMenu: boolean) => (
        <ul>
            {navItems.map((item) => (
                <li key={item.label}>
                    <Link className="nav-link" to={item.href} onClick={() => closeMenu && setIsMenuOpen(false)}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );

    return <div className="header">
        <div className="header-logo">
            <img src={logo} alt="logo" />
        </div>

        <div className="header-right">
            {/* Desktop Navigation */}
            <nav className="header-nav desktop-nav">
                {navLinks(false)}
            </nav>

            <div className="header-actions">
                <ShoppingCartButton className="cart-btn" onClick={() => { setIsShoppingListOpen(true) }} />
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>

        {/* Mobile Navigation Portal */}
        {createPortal(
            <>
                <div
                    className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                />
                <nav className={`header-nav mobile-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <button className="mobile-nav-close" onClick={() => setIsMenuOpen(false)}>
                        <FaTimes />
                    </button>
                    {navLinks(true)}
                </nav>
            </>,
            document.body
        )}

        <ShoppingList isOpen={isShoppingListOpen} onClose={() => setIsShoppingListOpen(false)} />
    </div>;
};