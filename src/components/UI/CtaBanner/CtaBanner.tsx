import { useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import './CtaBanner.scss';

type CtaBannerProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export const CtaBanner = ({ title, description, buttonText, buttonLink }: CtaBannerProps) => {
    const navigate = useNavigate();
    return (
        <section className="cta-banner">
            <div className="container">
                <h2>{title}</h2>
                <p>{description}</p>
                <Button text={buttonText} type="button" designType="primary" onClick={() => navigate(buttonLink)} />
            </div>
        </section>
    )
}