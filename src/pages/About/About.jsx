import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';
import FounderSection from '../../components/FounderSection/FounderSection';

import './About.css';

function About() {
  return (
    <div className="about-page">
      <main>
        <section className="about-page__hero">
          <div className="container">
            <div className="about-page__hero-label">
              <span>01</span>
              <span className="about-page__hero-line" />
              <span>About Sapex Structural Solutions Pvt. Ltd.</span>
            </div>

            <div className="about-page__hero-content">
              <h1 className="about-page__hero-title">
                Engineering
                <br />
                <span>with purpose.</span>
              </h1>
              
              <div className="about-page__hero-right">


              <p className="about-page__hero-description">
                Sapex Structural Solutions Pvt. Ltd. is a structural
                engineering company based in Mohali, Punjab,
                providing structural design, engineering and
                consultancy services across India.
              </p>
            </div>
            </div>
          </div>
        </section>

        <section className="about-page__intro">
          <div className="container">
            <div className="about-page__intro-grid">
              <div className="about-page__intro-label">
                <span>Who We Are</span>
              </div>

              <div className="about-page__intro-content">
                <h2>
                  A structural engineering practice built
                  around technical understanding and practical
                  solutions.
                </h2>

                <p>
                  Sapex Structural Solutions Pvt. Ltd. was established in
                  2024 by Sarfaraz Ahmad in Mohali, Punjab.
                  The company provides structural engineering,
                  design and consultancy services for a wide
                  range of building and infrastructure
                  requirements.
                </p>

                <p>
                  Our work is focused on understanding the
                  structural requirements of each project and
                  developing solutions that consider safety,
                  performance, efficiency and practical
                  construction requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__facts">
          <div className="container">
            <div className="about-page__facts-grid">
              <div>
                <span>Established</span>
                <strong>2024</strong>
              </div>

              <div>
                <span>Founder</span>
                <strong>Sarfaraz Ahmad</strong>
              </div>

              <div>
                <span>Headquarters</span>
                <strong>Mohali, Punjab</strong>
              </div>

              <div>
                <span>Service Area</span>
                <strong>Across India</strong>
              </div>
            </div>
          </div>
        </section>

        <FounderSection />

        <section className="about-page__story">
          <div className="container">
            <div className="about-page__story-grid">

              <div className="about-page__story-visual">
                <img
                  src="/images/about/sapex-story.jpg"
                  alt="Sapex Structural Solutions Pvt. Ltd. - The Story"
                  className="about-page__story-image"
                />
              </div>

              <div className="about-page__story-content">
                <span className="about-page__eyebrow">
                  The Sapex Structural Solutions Pvt. Ltd. Story
                </span>

                <h2>
                  From engineering requirements
                  <br />
                  <span>to practical solutions.</span>
                </h2>

                <p>
                  Sapex Structural Solutions Pvt. Ltd. was established with a focus on
                  structural engineering and technical
                  consultancy. Our approach is centred around
                  understanding project requirements before
                  developing engineering solutions.
                </p>

                <p>
                  From structural analysis and design to
                  detailing, digital engineering and assessment
                  of existing structures, our capabilities are
                  organised to support different stages of a
                  project's engineering requirements.
                </p>

                <p>
                  Based in Mohali, Sapex Structural Solutions Pvt. Ltd. serves clients across
                  Punjab, Chandigarh, Haryana and other parts of
                  India.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
    </div>
  );
}

export default About;