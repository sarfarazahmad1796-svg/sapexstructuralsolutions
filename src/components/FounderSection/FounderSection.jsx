import companyData from '../../data/companyData';

import './FounderSection.css';

function FounderSection() {
  const { founder } = companyData;

  return (
    <section className="founder-section">
      <div className="container">
        <div className="founder-section__header">
          <div className="founder-section__label">
            <span className="founder-section__number">03</span>
            <span className="founder-section__line" />
            <span>Leadership</span>
          </div>

          <div className="founder-section__intro">
            <h2 className="founder-section__title">
              The person
              <br />
              <span>behind Sapex Structural Solutions Pvt. Ltd.</span>
            </h2>

            <p className="founder-section__description">
              Sapex Structural Solutions Pvt. Ltd. was established by
              Sarfaraz Ahmad with a focus on structural
              engineering, design and technical consultancy.
            </p>
          </div>
        </div>

        <div className="founder-section__content">
          <div className="founder-section__image">
            <img
                src="/images/founder/sarfaraz-ahmad.jpg"
                alt="Sarfaraz Ahmad, Founder of Sapex Structural Solutions"
                className="founder-section__image-element"
            />
          </div>

          <div className="founder-section__details">
            <span className="founder-section__eyebrow">
              Founder
            </span>

            <h3 className="founder-section__name">
              {founder.name}
            </h3>

            <p className="founder-section__role">
              {founder.designation}
              <span> · </span>
              Sapex Structural Solutions Pvt. Ltd.
            </p>

            <div className="founder-section__divider" />

            <p className="founder-section__text">
              Sarfaraz Ahmad founded Sapex Structural Solutions Pvt. Ltd.
              in 2024 in Mohali, Punjab, establishing the
              company around structural engineering and
              consultancy services.
            </p>

            <p className="founder-section__text">
              The company focuses on providing engineering
              solutions across structural design, analysis,
              detailing, digital engineering and consultancy,
              serving project requirements across India.
            </p>

            <div className="founder-section__signature">
              <span>Sapex</span>
              <span>Structural Solutions Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;