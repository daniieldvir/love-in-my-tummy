import { socialMediaItems } from "../../constants/navItems.const";
import { openingHours } from "../../constants/storeInfo.tsx";
import { CopyrightFooter } from "./CopyrightFooter";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Love in my tummy</h3>
            <p>
              Authentic taste, artisanal soul. We are a team of passionate
              bakers who are dedicated to creating the best bread and pastries
              in the city.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Hours</h4>
            {openingHours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {socialMediaItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="social-media-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </footer>
  );
};
