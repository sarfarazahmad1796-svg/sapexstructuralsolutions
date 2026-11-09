import { Link } from 'react-router';

import sectorsData from '../../data/sectorsData';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';
import SEO from '../../components/SEO/SEO';

import './Sectors.css';

function Sectors() {
  return (
    <div className="sectors-page">
      <SEO
        title="Building & Infrastructure Sectors | Sapex Structural Solutions"
        description="Sapex provides structural engineering for residential, commercial, industrial, healthcare, educational, warehousing, and infrastructure projects."
        keywords="building structural engineering, industrial structural engineering, commercial building design, infrastructure engineering India, warehouse structural design, Sapex Structural Solutions"
      />
      <section className="sectors-page__hero">
        <div className="container">
          <div className="sectors-page__hero-label">
            <span>03</span>
            <span className="sectors-page__hero-line" />
            <span>Sectors</span>
          </div>

          <div className="sectors-page__hero-content">
            <h1 className="sectors-page__hero-title">
              Engineering
              <br />
              <span>across sectors.</span>
            </h1>

            <p className="sectors-page__hero-description">
              Structural engineering solutions adapted to
              different building types, project environments
              and technical requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="sectors-page__intro">
        <div className="container">
          <div className="sectors-page__intro-grid">
            <div className="sectors-page__intro-label">
              <span>Areas We Serve</span>
            </div>

            <div className="sectors-page__intro-content">
              <h2>
                Structural engineering for different
                project environments.
              </h2>

              <p>
                Every sector presents different structural,
                functional and construction requirements.
                Sapex Structural Solutions Pvt. Ltd. approaches each project according to its
                specific engineering needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectors-page__list-section">
        <div className="container">
          <div className="sectors-page__list">
            {sectorsData.map((sector) => (
              <article
                className="sectors-page__item"
                key={sector.id}
              >
                <div className="sectors-page__item-number">
                  {sector.number}
                </div>

                <div className="sectors-page__item-main">
                  <h2>{sector.title}</h2>
                </div>

                <div className="sectors-page__item-content">
                  <p>{sector.description}</p>

                  <Link
                    to="/contact"
                    className="sectors-page__item-link"
                  >
                    <span>Discuss a Project</span>
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors-page__coverage">
        <div className="container">
          <div className="sectors-page__coverage-content">
            <span>PROJECT COVERAGE</span>

            <h2>
              Supporting projects across
              <br />
              <span>Punjab, Chandigarh, Haryana and India.</span>
            </h2>

            <p>
              Based in Mohali, Punjab, Sapex Structural Solutions Pvt. Ltd. provides
              structural engineering and consultancy services
              for projects across its regional service areas
              and other parts of India.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

export default Sectors;