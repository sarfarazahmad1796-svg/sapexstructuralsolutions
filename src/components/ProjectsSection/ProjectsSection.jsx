import { Link } from 'react-router';

import projectsData from '../../data/projectsData';

import './ProjectsSection.css';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-section__header">
          <div className="projects-section__label">
            <span className="projects-section__number">05</span>
            <span className="projects-section__line" />
            <span>Selected Work</span>
          </div>

          <div className="projects-section__intro">
            <h2 className="projects-section__title">
              Structures
              <br />
              <span>shaped by engineering.</span>
            </h2>

            <p className="projects-section__description">
              Explore representative project categories
              supported by our structural engineering
              capabilities. From residential developments to
              healthcare and education facilities, each project
              reflects thoughtful engineering shaped around its
              purpose and practical requirements.
            </p>
          </div>
        </div>

        <div className="projects-section__grid">
          {projectsData.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-card__overlay" />

                <span className="project-card__status">
                  {project.status}
                </span>

                <span className="project-card__number">
                  {project.number}
                </span>

                <span className="project-card__arrow">
                  ↗
                </span>
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>

                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-section__bottom">
          <div className="projects-section__bottom-text">
            <span>PROJECT PORTFOLIO</span>
            <p>
              Verified Sapex Structural Solutions Pvt. Ltd. project documentation will be
              added as the portfolio develops.
            </p>
          </div>

          <Link
            to="/projects"
            className="projects-section__link"
          >
            <span>View All Projects</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;