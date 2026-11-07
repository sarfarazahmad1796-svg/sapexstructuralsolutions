import approachData from '../../data/approachData';

import './ApproachSection.css';

function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="container">
        <div className="approach-section__header">
          <div className="approach-section__label">
            <span className="approach-section__number">06</span>
            <span className="approach-section__line" />
            <span>Our Approach</span>
          </div>

          <div className="approach-section__intro">
            <h2 className="approach-section__title">
              Engineering with
              <br />
              <span>purpose and clarity.</span>
            </h2>

            <p className="approach-section__description">
              We approach every engineering requirement by
              considering technical performance, practical
              construction requirements and the specific needs
              of each project.
            </p>
          </div>
        </div>

        <div className="approach-section__content">
          <div className="approach-section__visual">
              <img
                src="/images/approach/structural-engineering-approach.jpg"
                alt="Sapex Structural Solutions Pvt. Ltd. structural engineering approach"
                className="approach-section__image"
              />
  
            <div className="approach-section__visual-grid" />

            <div className="approach-section__visual-label">
              <span>STRUCTURAL</span>
              <span>ENGINEERING</span>
              <span>APPROACH</span>
            </div>

            <div className="approach-section__visual-corner">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="approach-section__list">
            {approachData.map((item) => (
              <article
                className="approach-item"
                key={item.id}
              >
                <div className="approach-item__number">
                  {item.number}
                </div>

                <div className="approach-item__content">
                  <h3 className="approach-item__title">
                    {item.title}
                  </h3>

                  <p className="approach-item__description">
                    {item.description}
                  </p>
                </div>

                <div className="approach-item__arrow">
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

export default ApproachSection;