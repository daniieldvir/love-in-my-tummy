import './Features.scss';
export const Features = () => {
    const features = [
        {
            icon: '🌾',
            title: 'Organic Flour',
            description: 'We use only the highest quality stone-ground organic flour.'
        },
        {
            icon: '⏰',
            title: 'Freshly Baked',
            description: 'Every item is baked daily to ensure maximum freshness.'
        },
        {
            icon: '❤️',
            title: 'Handmade',
            description: 'No machines here. Everything is shaped by hand with care.'
        }
    ]
    return <div className="features">
            {features.map((feature) => (
                <div className="feature-item" key={feature.title}>
                    <div className="feature-icon">
                        {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
    </div>
};