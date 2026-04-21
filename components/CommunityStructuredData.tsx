import React from 'react';
import StructuredData from './StructuredData';
import { canonicalPath } from '@/lib/site-contact';

const CommunityStructuredData: React.FC = () => {
  const communityData = {
    name: "Sun City Summerlin",
    description: "Premier 55+ active adult community in Las Vegas developed by Del Webb from 1989 to 1999. Features 7,779 homes, three golf courses, and four clubhouses.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2045,
      longitude: -115.2954
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US"
    },
    containsPlace: [
      {
        "@type": "Place",
        name: "Mountain Shadows Clubhouse",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Indoor Spa",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Exercise Room",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Tennis Courts",
            value: 6
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Shuffleboard Courts",
            value: 4
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Racquetball Court",
            value: 1
          }
        ]
      },
      {
        "@type": "Place",
        name: "Palm Valley Golf Course",
        description: "Par-72, 6,580-yard golf course designed by Billy Casper and Greg Nash."
      },
      {
        "@type": "Place",
        name: "Highland Falls Golf Course",
        description: "Par-72, 6,512-yard golf course with Las Vegas Strip views."
      },
      {
        "@type": "Place",
        name: "Eagle Crest Golf Course",
        description: "Executive par-60 course, perfect for shorter playing time."
      }
    ],
    photo: canonicalPath('/golf-course.jpg'),
    publicAccess: false,
    tourBookingPage: canonicalPath('/contact'),
    isAccessibleForFree: false,
    maximumAttendeeCapacity: 15000,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Golf Courses",
        value: 3
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Community Centers",
        value: 4
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pools",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Tennis Courts",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fitness Centers",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurants",
        value: 3
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Walking Trails",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Age-Restricted",
        value: "55+"
      }
    ]
  };

  return <StructuredData type="Place" data={communityData} />;
};

export default CommunityStructuredData;
