import capabilitiesData from '../../data/capabilitiesData';

import './CapabilitiesSection.css';

function CapabilitiesSection() {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="capabilities-section__header">
          <div className="capabilities-section__label">
            <span className="capabilities-section__number">04</span>
            <span className="capabilities-section__line" />
            <span>Technical Expertise</span>
          </div>

          <div className="capabilities-section__intro">
            <h2 className="capabilities-section__title">
              Technical depth
              <br />
              <span>behind every solution.</span>
            </h2>

            <p className="capabilities-section__description">
              Our engineering capabilities cover structural
              analysis, design, detailing and digital workflows,
              supporting projects from concept through
              construction documentation.
            </p>
          </div>
        </div>

        <div className="capabilities-section__content">

          
          <div className="capabilities-section__statement">
            <span className="capabilities-section__statement-label">
              Sapex Structural Solutions Pvt. Ltd. Approach
            </span>

            <p>
              Every structure requires a balance between
              safety, functionality, efficiency and practical
              construction requirements.
            </p>

            <div className="capabilities-section__statement-mark">
              +
            </div>
             <div className="capabilities-section__visual">
                <img
                  src="/images/capabilities/technical-expertise.jpg"
                  alt="Sapex Structural Solutions Pvt. Ltd. technical expertise"
                  className="capabilities-section__image"
                />
              </div>
          </div>

          <div className="capabilities-section__list">
            {capabilitiesData.map((capability) => (
              <article
                className="capability-item"
                key={capability.id}
              >
                <div className="capability-item__number">
                  {capability.number}
                </div>

                <div className="capability-item__main">
                  <h3 className="capability-item__title">
                    {capability.title}
                  </h3>

                  <p className="capability-item__description">
                    {capability.description}
                  </p>
                </div>

                <div className="capability-item__icon">
                  ↗
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;