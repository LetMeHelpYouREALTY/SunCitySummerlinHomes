import React from 'react';
import StructuredData from './StructuredData';
import { SITE_ORIGIN } from '@/lib/site-contact';

const PropertyListingSchema: React.FC = () => {
  const propertyListings = {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "RealEstateListing",
          "name": "Single-Story Villa in Sun City Summerlin",
          "description": "Beautiful 2-bedroom, 2-bath single-story villa with accessibility features in Highland Falls neighborhood of Sun City Summerlin. Zero-step entry, wide doorways, and updated kitchen.",
          "url": "https://suncitysummerlinhomesforsale.com/properties/123456",
          "image": "/property1.jpg",
          "numberOfRooms": 2,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 1600,
            "unitCode": "SqFt"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2508 Faiss Drive",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89134",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.2095,
            "longitude": -115.2968
          },
          "offers": {
            "@type": "Offer",
            "price": 350000,
            "priceCurrency": "USD"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Single Story",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Zero Step Entry",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Wide Doorways",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Golf Course Access",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Community Pool",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Age-Restricted Community",
              "value": true
            }
          ]
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "RealEstateListing",
          "name": "Luxury Golf Course Home in Eagle Crest",
          "description": "Premium 3-bedroom, 2.5-bath single-level home with direct golf course views in Eagle Crest. Features gourmet kitchen, covered patio, and primary suite with walk-in shower.",
          "url": "https://suncitysummerlinhomesforsale.com/properties/123457",
          "image": "/property2.jpg",
          "numberOfRooms": 3,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 2200,
            "unitCode": "SqFt"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9876 Eagle Crest Way",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89134",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.2083,
            "longitude": -115.2901
          },
          "offers": {
            "@type": "Offer",
            "price": 525000,
            "priceCurrency": "USD"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Golf Course View",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Walk-in Shower",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Covered Patio",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Gourmet Kitchen",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Community Clubhouse",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Age-Restricted Community",
              "value": true
            }
          ]
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "RealEstateListing",
          "name": "Desert Contemporary Home in Sun City",
          "description": "Modern 2-bedroom, 2-bath home with stunning mountain views in Palm Valley. Features open floor plan, energy-efficient windows, and low-maintenance desert landscaping.",
          "url": "https://suncitysummerlinhomesforsale.com/properties/123458",
          "image": "/property3.jpg",
          "numberOfRooms": 2,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 1850,
            "unitCode": "SqFt"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1234 Desert Vista Dr",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89134",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.2110,
            "longitude": -115.2965
          },
          "offers": {
            "@type": "Offer",
            "price": 410000,
            "priceCurrency": "USD"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Mountain View",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Open Floor Plan",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Desert Landscaping",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Community Fitness Center",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Age-Restricted Community",
              "value": true
            }
          ]
        }
      }
    ]
  };

  return <StructuredData type="ItemList" data={propertyListings} />;
};

export default PropertyListingSchema;
