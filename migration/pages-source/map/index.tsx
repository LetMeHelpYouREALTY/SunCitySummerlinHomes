'use client';


import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import styles from '@/styles/Map.module.css';

export default function SunCityMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Initialize map when Google Maps script is loaded
  useEffect(() => {
    if (typeof window !== 'undefined' && mapLoaded && window.google) {
      // Call the initialization function
      window.initSunCitySummerlinMap?.();
    }
  }, [mapLoaded]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    // Apply filtering if map is loaded
    if (typeof window !== 'undefined' && window.google && window.filterMapMarkers) {
      window.filterMapMarkers(filter);
    }
  };

  return (
    <div className={styles.container}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=Function.prototype`}
          strategy="afterInteractive"
          onLoad={() => setMapLoaded(true)}
        />

        <Script id="google-maps-init" strategy="afterInteractive">
          {`
            // Define these functions globally so they can be called from React
            window.filterMapMarkers = function(filter) {
              // Will be implemented when the map loads
              console.log("Filtering map by:", filter);
            };

            // Google Maps API integration for Sun City Summerlin properties
            window.initSunCitySummerlinMap = function() {
              // Exact coordinates for Sun City Summerlin community center
              const sunCitySummerlinCenter = { lat: 36.2045, lng: -115.2954 };
              
              const map = new google.maps.Map(document.getElementById("sun-city-map"), {
                zoom: 14,
                center: sunCitySummerlinCenter,
                mapTypeControl: true,
                fullscreenControl: true,
                styles: [
                  // Custom map styling to highlight golf courses and community features
                  {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#b5d17b" }]
                  },
                  {
                    featureType: "poi.sports_complex",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#b5d17b" }]
                  }
                  // Additional styling for enhanced visibility of senior-relevant features
                ]
              });
              
              // Define Sun City Summerlin neighborhoods
              const neighborhoods = [
                {
                  name: "Eagle Crest",
                  position: { lat: 36.2118, lng: -115.2940 },
                  description: "Features the Eagle Crest Golf Course and extensive walking trails",
                  amenities: ["Golf Course", "Walking Trails", "Community Center"],
                  type: "neighborhood"
                },
                {
                  name: "Highland Falls",
                  position: { lat: 36.2095, lng: -115.2968 },
                  description: "Premium homes with golf course and mountain views",
                  amenities: ["Highland Falls Golf Course", "Clubhouse", "Restaurant"],
                  type: "neighborhood"
                },
                {
                  name: "Palm Valley",
                  position: { lat: 36.2087, lng: -115.2916 },
                  description: "Centrally located with access to multiple amenities",
                  amenities: ["Palm Valley Golf Course", "Tennis Courts", "Community Pool"],
                  type: "neighborhood"
                },
                {
                  name: "The Pinnacle",
                  position: { lat: 36.2132, lng: -115.2975 },
                  description: "Elevated location with spectacular views of Las Vegas Valley",
                  amenities: ["Pinnacle Community Center", "Fitness Center", "Social Clubs"],
                  type: "neighborhood"
                }
              ];
              
              // Create neighborhood markers
              const markers = [];
              
              neighborhoods.forEach(neighborhood => {
                const marker = new google.maps.Marker({
                  position: neighborhood.position,
                  map: map,
                  title: neighborhood.name,
                  icon: {
                    url: "/neighborhood-marker.png", // Use default marker until custom icons are created
                    scaledSize: new google.maps.Size(36, 36)
                  }
                });
                
                marker.category = "neighborhood";
                markers.push(marker);
                
                // Create info window with neighborhood details
                const infoContent = \`
                  <div class="neighborhood-info">
                    <h3>\${neighborhood.name}</h3>
                    <p>\${neighborhood.description}</p>
                    <div class="amenities">
                      <strong>Key Amenities:</strong>
                      <ul>
                        \${neighborhood.amenities.map(amenity => \`<li>\${amenity}</li>\`).join('')}
                      </ul>
                    </div>
                    <div class="neighborhood-actions">
                      <a href="/neighborhoods/\${neighborhood.name.toLowerCase().replace(/\\s+/g, '-')}" class="learn-more">
                        Learn More
                      </a>
                      <a href="/properties" class="view-homes">
                        View Homes
                      </a>
                    </div>
                  </div>
                \`;
                
                const infoWindow = new google.maps.InfoWindow({
                  content: infoContent,
                  maxWidth: 300
                });
                
                marker.addListener("click", () => {
                  infoWindow.open(map, marker);
                });
              });
              
              // Add community amenity markers
              const communityAmenities = [
                {
                  name: "Mountain Shadows Clubhouse",
                  position: { lat: 36.2090, lng: -115.2950 },
                  type: "community-center",
                  description: "Features indoor spa, exercise room, tennis courts, and more"
                },
                {
                  name: "Desert Vista Community Center",
                  position: { lat: 36.2120, lng: -115.2930 },
                  type: "community-center",
                  description: "44,000 sq ft facility with ballroom, fitness center, and pool"
                },
                {
                  name: "Sun Shadows Clubhouse",
                  position: { lat: 36.2070, lng: -115.2920 },
                  type: "community-center",
                  description: "Olympic-size indoor pool, spa, aerobics studio"
                },
                {
                  name: "Pinnacle Clubhouse",
                  position: { lat: 36.2110, lng: -115.2975 },
                  type: "community-center",
                  description: "Cultural center with 312-seat Starbright Theatre"
                },
                {
                  name: "Palm Valley Golf Course",
                  position: { lat: 36.2087, lng: -115.2945 },
                  type: "golf",
                  description: "Par-72, 6,580-yard course designed by Billy Casper & Greg Nash"
                },
                {
                  name: "Highland Falls Golf Course",
                  position: { lat: 36.2095, lng: -115.2970 },
                  type: "golf",
                  description: "Par-72, 6,512-yard course with Las Vegas Strip views"
                },
                {
                  name: "Eagle Crest Golf Course",
                  position: { lat: 36.2118, lng: -115.2938 },
                  type: "golf",
                  description: "Executive par-60 course, perfect for shorter playing time"
                }
              ];
              
              // Create amenity markers with custom icons
              communityAmenities.forEach(amenity => {
                const marker = new google.maps.Marker({
                  position: amenity.position,
                  map: map,
                  title: amenity.name,
                  icon: {
                    url: amenity.type === "golf" ? "/golf-marker.png" : "/community-marker.png", // Default icons until custom ones are created
                    scaledSize: new google.maps.Size(32, 32)
                  }
                });
                
                marker.category = amenity.type;
                markers.push(marker);
                
                const infoContent = \`
                  <div class="amenity-info">
                    <h3>\${amenity.name}</h3>
                    <p>\${amenity.description}</p>
                    <a href="/amenities" class="learn-more">
                      Learn More
                    </a>
                  </div>
                \`;
                
                const infoWindow = new google.maps.InfoWindow({
                  content: infoContent,
                  maxWidth: 250
                });
                
                marker.addListener("click", () => {
                  infoWindow.open(map, marker);
                });
              });
              
              // Add Dr. Jan Duffy's office location
              const officeMarker = new google.maps.Marker({
                position: { lat: 36.2060, lng: -115.2960 },
                map: map,
                title: "Dr. Jan Duffy, REALTOR - Sun City Summerlin Office",
                icon: {
                  url: "/office-marker.png", // Default icon until custom one is created
                  scaledSize: new google.maps.Size(40, 40)
                }
              });
              
              officeMarker.category = "office";
              markers.push(officeMarker);
              
              // Add info window for office
              const officeInfo = new google.maps.InfoWindow({
                content: \`
                  <div class="office-info">
                    <h3>Dr. Jan Duffy, REALTOR®</h3>
                    <p>Sun City Summerlin 55+ Community Specialist</p>
                    <p>9406 Del Webb Boulevard<br>Las Vegas, NV 89134</p>
                    <p>Phone: <a href="tel:+17027180043">(702) 718-0043</a></p>
                    <div class="office-hours">
                      <strong>Office Hours:</strong>
                      <p>Monday-Friday: 9am-5pm<br>
                      Saturday: 10am-3pm<br>
                      Sunday: By appointment</p>
                    </div>
                    <a href="https://g.page/suncitysummerlinhomes" class="directions-button">Get Directions</a>
                  </div>
                \`,
                maxWidth: 250
              });
              
              officeMarker.addListener("click", () => {
                officeInfo.open(map, officeMarker);
              });
              
              // Implement the filter function
              window.filterMapMarkers = function(category) {
                markers.forEach(marker => {
                  if (category === 'all' || marker.category === category) {
                    marker.setVisible(true);
                  } else {
                    marker.setVisible(false);
                  }
                });
              };
            }
          `}
        </Script>

        <div className={styles.main}>
          <h1 className={styles.title}>Sun City Summerlin Interactive Map</h1>
          <p className={styles.subtitle}>Explore neighborhoods, amenities, and properties in Las Vegas' premier 55+ community</p>

          <div className={styles.mapControls}>
            <div className={styles.filterButtons}>
              <button 
                className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                All
              </button>
              <button 
                className={`${styles.filterButton} ${activeFilter === 'neighborhood' ? styles.active : ''}`}
                onClick={() => handleFilterClick('neighborhood')}
              >
                Neighborhoods
              </button>
              <button 
                className={`${styles.filterButton} ${activeFilter === 'golf' ? styles.active : ''}`}
                onClick={() => handleFilterClick('golf')}
              >
                Golf Courses
              </button>
              <button 
                className={`${styles.filterButton} ${activeFilter === 'community-center' ? styles.active : ''}`}
                onClick={() => handleFilterClick('community-center')}
              >
                Community Centers
              </button>
              <button 
                className={`${styles.filterButton} ${activeFilter === 'office' ? styles.active : ''}`}
                onClick={() => handleFilterClick('office')}
              >
                Dr. Jan's Office
              </button>
            </div>
          </div>

          <div id="sun-city-map" className={styles.mapContainer}></div>

          <div className={styles.mapLegend}>
            <h3>Map Legend</h3>
            <div className={styles.legendItems}>
              <div className={styles.legendItem}>
                <div className={styles.legendIcon} data-icon="neighborhood"></div>
                <span>Neighborhoods</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendIcon} data-icon="golf"></div>
                <span>Golf Courses</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendIcon} data-icon="community-center"></div>
                <span>Community Centers</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendIcon} data-icon="office"></div>
                <span>Dr. Jan's Office</span>
              </div>
            </div>
          </div>

          <div className={styles.mapInfo}>
            <h2>About Sun City Summerlin</h2>
            <p>
              Sun City Summerlin is Las Vegas' premier 55+ active adult community, located in the 
              northwest area of Las Vegas. It features three championship golf courses, four 
              community centers with recreation facilities, and over 7,800 homes in various 
              neighborhoods, each with unique characteristics and amenities.
            </p>
            <div className={styles.mapActions}>
              <Link href="/properties" className={styles.actionButton}>
                View Available Properties
              </Link>
              <Link href="/contact" className={styles.actionButton}>
                Schedule a Community Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
