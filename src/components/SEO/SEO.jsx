import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SITE_URL = 'https://sapexstructuralsolutions.in';

function setMetaTag(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function SEO({ title, description, keywords }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${SITE_URL}${pathname}`;
    const imageUrl = `${SITE_URL}/images/logo/sapex-logo.jpg`;

    document.title = title;
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [description, keywords, pathname, title]);

  return null;
}

export default SEO;
