import { Link } from 'react-router';

import servicesData from '../../data/servicesData';

import './ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Section Header */}
        <div className="services-section__header">

          <div className="services-section__label">
            <span className="services-section__number">
              02
            </span>

            <span className="services-section__line" />

            <span>Our Services</span>
          </div>

          <div className="services-section__intro">
            <h2 className="services-section__title">
              Engineering expertise
              <br />
              <span>for every structure.</span>
            </h2>

            <p className="services-section__description">
              From structural design and analysis to digital
              engineering and consultancy, Sapex Structural Solutions Pvt. Ltd. provides
              integrated engineering solutions tailored to
              project requirements.
            </p>
          </div>

        </div>

        {/* Services List */}
        <div className="services-section__list">

          {servicesData.map((service) => (
            <article
              className="service-item"
              key={service.id}
            >

              {/* Number */}
              <div className="service-item__number">
                {service.number}
              </div>

              {/* Main information */}
              <div className="service-item__main">

                <h3 className="service-item__title">
                  {service.title}
                </h3>

                <p className="service-item__description">
                  {service.shortDescription}
                </p>

              </div>

              {/* Service list */}
              <div className="service-item__services">

                {service.services.map(
                  (serviceName, index) => (
                    <div
                      className="service-item__service"
                      key={`${service.id}-${index}`}
                    >
                      <span className="service-item__service-dot" />

                      <span>{serviceName}</span>
                    </div>
                  )
                )}

              </div>

              {/* Arrow */}
              <Link
                to="/services"
                className="service-item__arrow"
                aria-label={`View ${service.title} services`}
              >
                ↗
              </Link>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="services-section__bottom">

          <p>
            Need a specific engineering solution?
          </p>

          <Link
            to="/contact"
            className="services-section__cta"
          >
            <span>Discuss Your Project</span>
            <span>↗</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;