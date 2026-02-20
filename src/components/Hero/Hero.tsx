import './Hero.scss';
type HeroVariant = 'split' | 'cinematic';

interface HeroProps {
    variant?: HeroVariant;
    title: React.ReactNode;
    subtitle?: string;
    description?: string;
    image: string;
    actions?: React.ReactNode;
    tagline?: string;
}

export const Hero = (props: HeroProps) => {
    const variant = props.variant ?? 'split';
  
    if (variant === 'cinematic') {
      return (
        <section className={`hero hero--cinematic`}>
          <div className="hero-bg-image">
            <img src={props.image} alt="" />
            <div className="hero-overlay" />
          </div>
  
          <div className="hero-content animate-fade-in">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </section>
      );
    }
  
    return (
      <section className={`hero hero--split`}>
        <div className="hero-content animate-fade-in">
          {props.tagline && <span className="hero-tagline">{props.tagline}</span>}
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          {props.actions && <div className="hero-actions">{props.actions}</div>}
        </div>
  
        <div className="hero-image">
          <img src={props.image} alt="" />
        </div>
      </section>
    );
  };
  