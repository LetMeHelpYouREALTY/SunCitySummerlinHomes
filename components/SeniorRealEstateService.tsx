import React from 'react';
import StructuredData from './StructuredData';
import { SITE_ORIGIN } from '@/lib/site-contact';

const SeniorRealEstateService: React.FC = () => {
  const seniorServiceData = {
    name: "Senior-Focused Real Estate Services in Sun City Summerlin",
    serviceType: "Senior Housing Specialist",
    provider: {
      "@type": "RealEstateAgent",
      name: "Dr. Jan Duffy, REALTOR",
      url: SITE_ORIGIN,
      telephone: "+17027180043"
    },
    description: "Specialized real estate services tailored to the needs of active adults 55+ in Sun City Summerlin, featuring accessibility-focused property searches and senior-friendly home evaluations.",
    areaServed: {
      "@type": "Place",
      name: "Sun City Summerlin, Las Vegas, NV",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89134",
        addressCountry: "US"
      }
    },
    audience: {
      "@type": "Audience",
      audienceType: "Active Adults 55+",
      geographicArea: {
        "@type": "AdministrativeArea",
        name: "Las Vegas"
      }
    },
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accessible Home Search",
          description: "Specialized property search focusing on single-story homes, zero-step entries, wide doorways, and other senior-friendly features."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Home Evaluation",
          description: "Professional assessment of properties for senior-friendly features and potential modifications."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Golf Course Property Specialist",
          description: "Expert guidance on golf course properties in Sun City Summerlin with knowledge of course views and accessibility."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Low-Maintenance Property Search",
          description: "Helping seniors find homes with low-maintenance yards and property features designed for easy upkeep."
        }
      }
    ],
    knowsAbout: [
      "Accessible Home Features",
      "Single-Story Properties",
      "Zero-Step Entries",
      "Wide Doorways for Mobility",
      "Walk-in Showers",
      "Low-Maintenance Yards",
      "Senior Housing Communities",
      "Sun City Summerlin Floor Plans",
      "Golf Course Properties"
    ]
  };

  return <StructuredData type="Service" data={seniorServiceData} />;
};

export default SeniorRealEstateService;
