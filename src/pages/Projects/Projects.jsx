import { Link } from 'react-router';

import projectsData from '../../data/projectsData';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';

import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="projects-page__hero">
        <div className="container">
          <div className="projects-page__hero-label">
            <span>04</span>
            <span className="projects-page__hero-line" />
            <span>Selected Work</span>
          </div>

          <div className="projects-page__hero-content">
            <h1 className="projects-page__hero-title">
              Structures
              <br />
              <span>built around purpose.</span>
            </h1>

            <p className="projects-page__hero-description">
              Explore representative project categories
              demonstrating the range of structural engineering
              requirements Sapex Structural Solutions Pvt. Ltd. can support.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="projects-page__intro">
        <div className="container">
          <div className="projects-page__intro-grid">
            <div className="projects-page__intro-label">
              <span>Project Portfolio</span>
            </div>

            <div className="projects-page__intro-content">
              <h2>
                Engineering solutions shaped around
                different project requirements.
              </h2>

              <p>
                Sapex Structural Solutions Pvt. Ltd. works across
                residential, commercial, industrial and other
                structural environments. This portfolio section
                is currently using temporary project entries and
                will be updated with Sapex Structural Solutions Pvt. Ltd. project information
                as the portfolio develops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-page__list-section">
        <div className="container">
          <div className="projects-page__list">
            {projectsData.map((project) => (
              <article
                className="projects-page__card"
                key={project.id}
              >
                <div className="projects-page__card-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  {project.status === 'Placeholder' && (
                    <span className="projects-page__status">
                      Temporary
                    </span>
                  )}
                </div>

                <div className="projects-page__card-content">
                  <div className="projects-page__card-top">
                    <span className="projects-page__number">
                      {project.number}
                    </span>

                    <span className="projects-page__category">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="projects-page__card-title">
                    {project.title}
                  </h2>

                  <p className="projects-page__location">
                    {project.location}
                  </p>
                    {project.configuration && (
                    <p className="projects-page__configuration">
                        {project.configuration}
                    </p>
                    )}

                  <p className="projects-page__description">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     {/* Additional Projects */}
<section className="projects-page__additional">
  <div className="container">
    <div className="projects-page__additional-content">
      <div className="projects-page__additional-number">
        <span>100+</span>
        <small>Projects</small>
      </div>

      <div className="projects-page__additional-text">
        <span className="projects-page__additional-label">
          BEYOND THE FEATURED WORK
        </span>

        <h2>
          More projects.
          <br />
          <span>More engineering experience.</span>
        </h2>

        <p>
          Sapex Structural Solutions Pvt. Ltd. has
          experience supporting 100+ projects across
          different structural, building and engineering
          requirements.
        </p>
      </div>
    </div>
  </div>
</section>

      <ConsultationCTA />
    </div>
  );
}

export default Projects;