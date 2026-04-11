import { useEffect } from 'react';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}


function upsertMeta(attrKey: string, attrValue: string, content: string) {
  const selector = `meta[${attrKey}="${attrValue}"]`;
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrValue);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
    document.title = fullTitle;

    upsertMeta('name', 'description', description);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    if (canonical) {
      upsertMeta('property', 'og:url', canonical);
    }

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonical);
        document.head.appendChild(linkCanonical);
      }
    }

    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, schema]);

  return null;
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PlumbingHeatingContractor",
    "name": BUSINESS_INFO.name,
    "description": BUSINESS_INFO.description,
    "url": DOMAIN,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "postalCode": BUSINESS_INFO.address.postcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.address.latitude,
      "longitude": BUSINESS_INFO.address.longitude
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "priceRange": "££",
    "openingHours": ["Mo-Fr 08:00-17:00"],
    "foundingDate": "2010",
    "sameAs": [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.twitter
    ]
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "PlumbingHeatingContractor",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "url": DOMAIN,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "postalCode": BUSINESS_INFO.address.postcode,
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_INFO.address.latitude,
        "longitude": BUSINESS_INFO.address.longitude
      },
      "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
        "@type": "City",
        "name": area
      }))
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "priceRange": "££"
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateReviewSchema(rating: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating.toString(),
    "reviewCount": reviewCount.toString()
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": (index + 1).toString(),
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}
