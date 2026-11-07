import { Link } from 'react-router';

import './AboutIntro.css';

function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="container">

        {/* Section Header */}
        <div className="about-intro__top">

          <div className="about-intro__label">
            <span className="about-intro__label-number">
              01
            </span>

            <span className="about-intro__label-line" />

            <span>About Sapex Structural Solutions Pvt. Ltd.</span>
          </div>

          <div className="about-intro__top-description">
            Structural engineering built around precision,
            practical thinking and dependable solutions.
          </div>

        </div>

        {/* Main Content */}
        <div className="about-intro__content">

          {/* Left Visual */}
          <div className="about-intro__visual">

           <img
            src="/images/about/about-sapex.jpg"
            alt="Sapex Structural Solutions"
            className="about-intro__image"
          />

          </div>

          {/* Right Content */}
          <div className="about-intro__text">

            <h2 className="about-intro__title">
              Built around
              <br />
              <span>engineering precision.</span>
            </h2>

            <p className="about-intro__description">
              Sapex Structural Solutions Pvt. Ltd. provides structural
              engineering, design and consultancy services
              for a wide range of building and infrastructure
              requirements.
            </p>

            <p className="about-intro__description">
              Based in Mohali, Punjab, Sapex Structural Solutions Pvt. Ltd. serves clients
              across Punjab, Chandigarh, Haryana and other
              parts of India. Our approach combines technical
              understanding, practical design and attention
              to structural safety to develop solutions that
              are efficient, reliable and suited to each
              project's requirements.
            </p>

            <Link
              to="/about"
              className="about-intro__link"
            >
              <span>Discover Sapex Structural Solutions Pvt. Ltd.</span>
              <span className="about-intro__link-icon">
                ↗
              </span>
            </Link>

          </div>
        </div>

        {/* Company Information */}
        <div className="about-intro__facts">

          <div className="about-intro__fact">
            <span className="about-intro__fact-label">
              Established
            </span>

            <strong>2024</strong>
          </div>

          <div className="about-intro__fact">
            <span className="about-intro__fact-label">
              Headquarters
            </span>

            <strong>Mohali, Punjab</strong>
          </div>

          <div className="about-intro__fact">
            <span className="about-intro__fact-label">
              Service Area
            </span>

            <strong>Across India</strong>
          </div>

          <div className="about-intro__fact">
            <span className="about-intro__fact-label">
              Focus
            </span>

            <strong>Structural Engineering</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutIntro;