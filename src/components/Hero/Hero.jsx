import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './Hero.css';

function Hero() {

  const heroImages = [
  '/images/hero/hero-structure-01.jpg',
  '/images/hero/hero-structure-02.jpg',
  '/images/hero/hero-structure-03.jpg',
  '/images/hero/hero-structure-04.jpg',
];

const [activeImage, setActiveImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero">

      {/* Background */}
    <div className="hero__background">
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className={`hero__background-image ${
            index === activeImage
              ? 'hero__background-image--active'
              : ''
          }`}
      />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__container">

        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />

            <span>
              Structural Engineering Solutions
            </span>
          </div>

          <h1 className="hero__title">
            Engineering
            <br />
            <span>Structures That Last.</span>
          </h1>

          <p className="hero__description">
            Sapex Structural Solutions Pvt. Ltd. delivers reliable
            structural engineering, design and consultancy
            services for projects across India.
          </p>

          <div className="hero__actions">

            <Link
              to="/services"
              className="btn btn-light"
            >
              <span>Explore Services</span>
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="hero__secondary-link"
            >
              <span>Start a Conversation</span>
              <span>↗</span>
            </Link>

          </div>
        </div>

        {/* Hero bottom information */}
        <div className="hero__bottom">

          <div className="hero__location">
            <span className="hero__location-dot" />

            <span>
              Mohali, Punjab
              <br />
              Serving Across India
            </span>
          </div>

          <div className="hero__scroll">
            <span>Scroll to explore</span>

            <span className="hero__scroll-line" />
          </div>

          <div className="hero__year">
            <span>EST.</span>
            <strong>2024</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;