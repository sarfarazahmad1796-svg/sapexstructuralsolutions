import sectorsData from '../../data/sectorsData';

import './SectorsSection.css';

function SectorsSection() {
  return (
    <section className="sectors-section">
      <div className="container">

        {/* Header */}
        <div className="sectors-section__header">

          <div className="sectors-section__label">
            <span className="sectors-section__number">
              03
            </span>

            <span className="sectors-section__line" />

            <span>Sectors</span>
          </div>

          <div className="sectors-section__intro">
            <h2 className="sectors-section__title">
              Engineering across
              <br />
              <span>diverse sectors.</span>
            </h2>

            <p className="sectors-section__description">
              Our structural engineering capabilities can
              support a wide range of building types and
              project environments, with solutions tailored
              to each project's technical requirements.
            </p>
          </div>

        </div>

        {/* Sectors Grid */}
        <div className="sectors-section__grid">

          {sectorsData.map((sector) => (
            <article
              className="sector-card"
              key={sector.id}
            >

              <div className="sector-card__top">

                <span className="sector-card__number">
                  {sector.number}
                </span>

                <span className="sector-card__arrow">
                  ↗
                </span>

              </div>

              <div className="sector-card__content">

                <h3 className="sector-card__title">
                  {sector.title}
                </h3>

                <p className="sector-card__description">
                  {sector.description}
                </p>

              </div>

              <div className="sector-card__line" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SectorsSection;