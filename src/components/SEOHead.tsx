import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schemaData?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = 'https://www.abegailsayson.tech/logo-horizontal-white.png',
  schemaData,
}) => {
  const baseUrl = 'https://www.abegailsayson.tech';
  const canonicalUrl = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="?([^"\]]+)"?\]/)?.[1];
          if (name) element.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="?([^"\]]+)"?\]/)?.[1];
          if (prop) element.setAttribute('property', prop);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // Standard Meta
    setMetaTag('meta[name="description"]', 'content', description);

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:site_name"]', 'content', 'Abegail Sayson Tech');
    setMetaTag('meta[property="og:image"]', 'content', ogImage);

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Inject / Update Structured Data (JSON-LD)
    const scriptId = 'seo-structured-data';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    // Default schemas: Person, Organization, and WebSite
    const defaultSchemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Abegail Sayson',
        alternateName: 'Abegail Sayson Tech',
        jobTitle: 'AI Automation Specialist',
        description: 'AI Automation Specialist and photographer helping photography studios and small businesses automate lead management, CRM workflows, and booking funnels.',
        url: baseUrl,
        image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6',
        sameAs: [
          'https://www.linkedin.com/in/abegail-s-797302202/',
          'https://www.instagram.com/abegailsaysontechva/'
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PH'
        },
        knowsAbout: [
          'Photography Business Automation',
          'AI Workflows & Agents',
          'Lead Management & Qualification',
          'CRM Automation (Notion, GoHighLevel, HubSpot)',
          'Booking Funnels & Calendar Synchronization',
          'Workflow Integration (n8n, Make, Zapier, Google Workspace)'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Abegail Sayson Tech',
        url: baseUrl,
        logo: `${baseUrl}/logo-horizontal-white.png`,
        founder: {
          '@type': 'Person',
          name: 'Abegail Sayson'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'abegailsaysontechva@gmail.com',
          url: `${baseUrl}/#contact`
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Abegail Sayson Tech',
        url: baseUrl,
        description: 'AI Automation Specialist for Photographers & Small Businesses: Lead Management, CRM Automation, and Booking Systems.'
      }
    ];

    const finalSchemas = schemaData 
      ? Array.isArray(schemaData) 
        ? [...defaultSchemas, ...schemaData]
        : [...defaultSchemas, schemaData]
      : defaultSchemas;

    scriptElement.textContent = JSON.stringify(finalSchemas);

  }, [title, description, canonicalUrl, ogType, ogImage, schemaData]);

  return null;
};

export default SEOHead;
