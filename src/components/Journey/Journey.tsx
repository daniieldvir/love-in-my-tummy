import { milestonesData } from "../../constants/milestones.const";
import "./Journey.scss";

export const Journey = () => {
  const milestones = milestonesData;
  return (
    <section className="our-journey">
      <div className="container">
        <div className="journey-header">
          <span className="section-label">How We Got Here</span>
          <h2>Our Journey</h2>
        </div>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">
                <span>{m.year}</span>
              </div>
              <div className="timeline-connector">
                <div className="connector-dot" />
                {i < milestones.length - 1 && (
                  <div className="connector-line" />
                )}
              </div>
              <div className="timeline-content">
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
