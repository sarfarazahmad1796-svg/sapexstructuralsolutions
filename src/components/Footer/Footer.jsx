import { Link } from 'react-router';

import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link
              to="/"
              className="footer__logo"
              aria-label="Sapex Structural Solutions Pvt. Ltd. home"
            >
              <img
                src="/images/logo/sapex-logo.jpg"
                alt="Sapex Structural Solutions"
              />
            </Link>

            <p className="footer__description">
              Structural engineering, design and consultancy
              solutions from Mohali, Punjab, serving projects
              across India.
            </p>

            <div className="footer__established">
              <span>EST.</span>
              <strong>2024</strong>
            </div>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <span className="footer__column-title">
                Navigation
              </span>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/sectors">Sectors</Link>
              <Link to="/projects">Projects</Link>
            </div>

            <div className="footer__column">
              <span className="footer__column-title">
                Services
              </span>

              <Link to="/services">Structural Engineering</Link>
              <Link to="/services">Steel & Industrial</Link>
              <Link to="/services">Digital Engineering</Link>
              <Link to="/services">Existing Structures</Link>
              <Link to="/services">Consultancy</Link>
            </div>

            <div className="footer__column">
              <span className="footer__column-title">
                Contact
              </span>

              <span>Basti Complex, Sector 68</span>
              <span>Mohali, Punjab, India</span>
      

              <a href="tel:+919135086995">
                +91 91350 86995
              </a>

              <a href="mailto:info@sapexstructuralsolutions.com">
                info.sapexpvt@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} Sapex Structural Solutions Pvt. Ltd. All rights
            reserved.
          </span>

          <div className="footer__legal">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>
          </div>

          <span>Punjab · Chandigarh · Haryana · India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;