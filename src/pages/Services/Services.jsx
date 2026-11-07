import { Link } from 'react-router';

import servicesData from '../../data/servicesData';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';

import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <div className="services-page__hero-label">
            <span>02</span>
            <span className="services-page__hero-line" />
            <span>Our Services</span>
          </div>

          <div className="services-page__hero-content">
            <h1 className="services-page__hero-title">
              Engineering
              <br />
              <span>solutions that perform.</span>
            </h1>

            <p className="services-page__hero-description">
              Sapex Structural Solutions Pvt. Ltd. provides structural engineering, design,
              detailing and consultancy services across
              different project types and requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page__overview">
        <div className="container">
          <div className="services-page__overview-grid">
            <div className="services-page__overview-label">
              <span>What We Do</span>
            </div>

            <div className="services-page__overview-content">
              <h2>
                From structural design to technical
                consultancy, our services cover key stages of
                the engineering process.
              </h2>

              <p>
                Our capabilities bring together structural
                engineering, steel and industrial solutions,
                digital engineering, existing-structure
                assessment and project consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page__list-section">
        <div className="container">
          <div className="services-page__list">
            {servicesData.map((service) => (
              <article
                className="services-page__item"
                key={service.id}
              >
                <div className="services-page__item-number">
                  {service.number}
                </div>

                <div className="services-page__item-main">
                  <h2>{service.title}</h2>

                  <p className="services-page__item-description">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="services-page__item-services">
                  {service.services.map(
                    (serviceName, index) => (
                      <div
                        className="services-page__service"
                        key={`${service.id}-${index}`}
                      >
                        <span />
                        <span>{serviceName}</span>
                      </div>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page__note">
        <div className="container">
          <div className="services-page__note-content">
            <span>ENGINEERING SUPPORT</span>

            <h2>
              Need a specific structural engineering
              solution?
            </h2>

            <p>
              Tell us about your project requirements and we
              can discuss the engineering support relevant to
              your project.
            </p>

            <Link
              to="/contact"
              className="services-page__note-link"
            >
              <span>Discuss Your Project</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

export default Services;