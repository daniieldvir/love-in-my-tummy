import './Footer.scss';
import { navItems } from '../../constants/navItems.const';
import { socialMediaItems } from '../../constants/navItems.const';
export const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Love in my tummy</h3>
                    <p>Authentic taste, artisanal soul. We are a team of passionate bakers who are dedicated to creating the best bread and pastries in the city.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        {socialMediaItems.map((item) => (
                            <li key={item.label}>
                                <a className="social-media-icon" href={item.href}>{item.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Hours</h4>
                    <p>Sun - Thu: 8am - 8pm</p>
                    <p>Friday: 8am - 14pm</p>
                    <p>Saturday: Closed</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Love in my tummy. All rights reserved.</p>
            </div>
        </div>
    </footer>
};

export default Footer;