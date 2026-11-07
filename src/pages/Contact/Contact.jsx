import { useState } from 'react';
import companyData from '../../data/companyData';

import './Contact.css';

function Contact() {
    const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbxGb6Krd_Nj9rNxQMZmy3vy-h5XI2HACcqR6rmL1zGK3qLI7kOZdn_TpIDRnR_ghEI/exec';
  const officeMapQuery = encodeURIComponent(
    `${companyData.headquarters.address}, ${companyData.headquarters.city}`
  );
  const officeMapMarker = '30.6976,76.7242';
  const [formData, setFormData] = useState({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message || 'Unable to submit enquiry.'
      );
    }

    setSubmitStatus({
      type: 'success',
      message:
        'Thank you. Your project enquiry has been submitted successfully.',
    });

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  } catch (error) {
    console.error('Enquiry submission failed:', error);

    setSubmitStatus({
      type: 'error',
      message:
        'Unable to submit your enquiry right now. Please try again or contact us directly.',
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-page__hero">
        <div className="container">
          <div className="contact-page__hero-label">
            <span>05</span>
            <span className="contact-page__hero-line" />
            <span>Contact</span>
          </div>

          <div className="contact-page__hero-content">
            <h1 className="contact-page__hero-title">
              Let's discuss
              <br />
              <span>your project.</span>
            </h1>

            <p className="contact-page__hero-description">
              Have a structural engineering requirement,
              project enquiry or technical requirement?
              Share the details with Sapex Structural Solutions Pvt. Ltd. and our team can
              understand how we may support you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-page__information">
        <div className="container">
          <div className="contact-page__information-grid">
            <div className="contact-page__information-intro">
              <span className="contact-page__section-label">
                Get in Touch
              </span>

              <h2>
                Start with a
                <br />
                <span>conversation.</span>
              </h2>

              <p>
                Tell us about your project requirements,
                structural scope or consultancy needs. We can
                discuss the requirements and determine the
                appropriate next step.
              </p>
            </div>

            <div className="contact-page__details">
              <div className="contact-page__detail">
                <span>Email</span>

                <a href={`mailto:${companyData.email}`}>
                  {companyData.email}
                </a>
              </div>

              <div className="contact-page__detail">
                <span>Phone</span>

                <a href={`tel:${companyData.phone.replace(/\s/g, '')}`}>
                  {companyData.phone}
                </a>
              </div>

              <div className="contact-page__detail">
                <span>Office</span>

                <p>
                  {companyData.headquarters.address}
                  <br />
                  {companyData.headquarters.city}
                </p>
              </div>

              <div className="contact-page__detail">
                <span>Service Area</span>

                <p>{companyData.serviceArea}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="contact-page__form-section">
        <div className="container">
          <div className="contact-page__form-grid">
            <div className="contact-page__form-intro">
              <span className="contact-page__section-label">
                Project Enquiry
              </span>

              <h2>
                Tell us what
                <br />
                <span>you need.</span>
              </h2>

              <p>
                Provide some basic information about your
                project. The more context you provide, the
                easier it will be to understand your
                requirement.
              </p>
            </div>

            <form
              className="contact-page__form"
              onSubmit={handleSubmit}
            >
              <div className="contact-page__field-row">
                <div className="contact-page__field">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-page__field-row">
                <div className="contact-page__field">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-page__field">
                <label htmlFor="service">
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="structural-engineering">
                    Structural Engineering
                  </option>

                  <option value="steel-industrial">
                    Steel & Industrial
                  </option>

                  <option value="digital-engineering">
                    Digital Engineering
                  </option>

                  <option value="existing-structures">
                    Existing Structures
                  </option>

                  <option value="consultancy">
                    Consultancy
                  </option>

                  <option value="other">
                    Other Requirement
                  </option>
                </select>
              </div>

              <div className="contact-page__field">
                <label htmlFor="message">
                  Project Details <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell us about your project, location, structure type, approximate size and the engineering support you require."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

             <div className="contact-page__form-footer">
                <div className="contact-page__form-message">
                    {submitStatus && (
                    <p
                        className={
                        submitStatus.type === 'success'
                            ? 'contact-page__form-message--success'
                            : 'contact-page__form-message--error'
                        }
                    >
                        {submitStatus.message}
                    </p>
                    )}

                    {!submitStatus && (
                    <p>
                        By submitting this form, you are requesting
                        contact regarding your project enquiry.
                    </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="contact-page__submit"
                    disabled={isSubmitting}
                >
                    <span>
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </span>

                    <span>
                    {isSubmitting ? '...' : '↗'}
                    </span>
                </button>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="contact-page__direct">
        <div className="container">
          <div className="contact-page__direct-content">
            <div>
              <span className="contact-page__section-label">
                Prefer Direct Contact?
              </span>

              <h2>
                Call or message
                <br />
                <span>us directly.</span>
              </h2>
            </div>

            <div className="contact-page__direct-actions">
                <a
                    href={`tel:${companyData.phone.replace(/\s/g, '')}`}
                    className="contact-page__direct-button contact-page__direct-button--light"
                >
                    <span>Call Us</span>
                    <span>↗</span>
                </a>

                <a
                    href={`https://wa.me/${companyData.phone.replace(
                    /\D/g,
                    ''
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-page__direct-button"
                >
                    <span>WhatsApp</span>
                    <span>↗</span>
                </a>

                <a
                    href={`mailto:${companyData.email}`}
                    className="contact-page__direct-button"
                >
                    <span>Email Us</span>
                    <span>↗</span>
                </a>
                </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="contact-page__location">
        <div className="container">
          <div className="contact-page__location-grid">
            <div>
              <span className="contact-page__section-label">
                Our Location
              </span>

              <h2>
                Mohali,
                <br />
                <span>Punjab.</span>
              </h2>
            </div>

            <div className="contact-page__location-details">
              <p>
                {companyData.headquarters.address}
                <br />
                {companyData.headquarters.city}
              </p>

              <p>
                Landmark:
                <br />
                {companyData.headquarters.landmark}
              </p>

              <span className="contact-page__location-note">
                Serving Punjab, Chandigarh, Haryana and
                projects across India.
              </span>
            </div>
          </div>

          <div className="contact-page__map-wrap">
            <iframe
              title="Sapex Structural Solutions office location"
              src={`https://maps.google.com/maps?q=${officeMapQuery}&z=14&iwloc=A&output=embed&markers=color:red%7C${officeMapMarker}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;