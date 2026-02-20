import './Philosophy.scss';
export const Philosophy = () => {
    return (
        <section className="about-philosophy">
        <div className="container">
            <div className="philosophy-grid">
                <div className="philosophy-number">01</div>
                <div className="philosophy-body">
                    <h3>Organic Only</h3>
                    <p>Every ingredient is locally sourced and organically grown. We believe great flavor starts long before the oven.</p>
                </div>

                <div className="philosophy-number">02</div>
                <div className="philosophy-body">
                    <h3>No Shortcuts</h3>
                    <p>Our sourdough ferments for 24 hours. Our croissants take three days. If something worth eating takes time, we take the time.</p>
                </div>

                <div className="philosophy-number">03</div>
                <div className="philosophy-body">
                    <h3>Family Recipes</h3>
                    <p>Many of our recipes come straight from handwritten notebooks passed down through generations. We just give them a modern twist.</p>
                </div>
            </div>
        </div>
    </section>
    )
}