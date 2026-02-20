import { FaEnvelope } from 'react-icons/fa';
import { faqItems } from '../../constants/storeInfo';
import type { FaqItem } from '../../types/variance';
import './FrequentlyAsked.scss';


const FrequentlyAsked = () => {
    return <div className="contact-side">
        <div className="faq-section">
            <span className="section-label">Quick Answers</span>
            <h3>Frequently Asked</h3>
            <div className="faq-list">
                {faqItems.map((item: FaqItem, i: number) => (
                    <div className="faq-item" key={i}>
                        <h4>{item.question}</h4>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>

            <div className="direct-contact">
                <FaEnvelope />
                <a href="mailto:hello@loveinmytummy.com">hello@loveinmytummy.com</a>
            </div>
        </div>
    </div>
};

export default FrequentlyAsked;