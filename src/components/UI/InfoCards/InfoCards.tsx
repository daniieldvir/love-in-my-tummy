import type { InfoCardItem } from '../../../types/variance';
import './InfoCards.scss';

type Props = {
    infoCards: InfoCardItem[];
    className?: string;
    variant?: 'simple-icon' | 'designed-icon';
};


export const InfoCards = ({ infoCards, className, variant = 'simple-icon' }: Props) => {
    return <div className={`info-cards-container ${className} ${variant}`}>
        {infoCards.map((infoCard) => (
            <div className="info-card" key={infoCard.title}>
                <div className="info-icon ">
                    {infoCard.icon}
                </div>
                <h3>{infoCard.title}</h3>
                {Array.isArray(infoCard.description) ? infoCard.description.map((description) => <p key={description}>{description}</p>) : <p>{infoCard.description}</p>}
            </div>
        ))}
    </div>
};