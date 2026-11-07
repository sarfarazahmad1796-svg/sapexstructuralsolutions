import { Link } from 'react-router';

import './ConsultationCTA.css';

function ConsultationCTA() {
  return (
    <section className="consultation-cta">
      <div className="consultation-cta__background">
        <div className="consultation-cta__grid" />
        <div className="consultation-cta__circle consultation-cta__circle--one" />
        <div className="consultation-cta__circle consultation-cta__circle--two" />
      </div>

      <div className="container">
        <div className="consultation-cta__content">
          <div className="consultation-cta__label">
            <span className="consultation-cta__label-line" />
            <span>Start a Project</span>
          </div>

          <h2 className="consultation-cta__title">
            Have a structure
            <br />
            <span>to engineer?</span>
          </h2>

          <p className="consultation-cta__description">
            Share your project requirements with Sapex
            Structural Solutions Pvt. Ltd. and let us understand how
            we can support your engineering needs.
          </p>

          <div className="consultation-cta__actions">
            <Link
              to="/contact"
              className="consultation-cta__button"
            >
              <span>Discuss Your Project</span>
              <span>↗</span>
            </Link>

            <a
              href="tel:+919135086995"
              className="consultation-cta__phone"
            >
              <span>Call Us</span>
              <strong>+91 91350 86995</strong>
            </a>
          </div>
        </div>

        <div className="consultation-cta__bottom">
          <span>Sapex Structural Solutions Pvt. Ltd.</span>
          <span>MOHALI · PUNJAB · INDIA</span>
        </div>
      </div>
    </section>
  );
}

export default ConsultationCTA;