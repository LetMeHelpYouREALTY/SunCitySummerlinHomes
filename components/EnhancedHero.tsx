
import React, { useState, useEffect } from 'react';
import styles from '../styles/EnhancedHero.module.css';

const EnhancedHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const heroProperties = [
    {
      image: "/property1.jpg",
      title: "Luxury Single-Story Villa",
      price: "$548,175",
      features: "3 bed • 2 bath • Golf Course Views"
    },
    {
      image: "/property2.jpg",
      title: "Modern Desert Retreat",
      price: "$615,000",
      features: "2 bed • 2.5 bath • Pool & Spa"
    },
    {
      image: "/property3.jpg",
      title: "Spacious Golf Course Home",
      price: "$729,000",
      features: "4 bed • 3 bath • Premium Views"
    }
  ];
  
  useEffect(() => {
    queueMicrotask(() => {
      setIsLoaded(true);
    });
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroProperties.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroProperties.length]);
  
  return (
    <div className={styles.heroContainer}>
      {/* Property Slideshow */}
      <div className={styles.slideContainer}>
        {heroProperties.map((property, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${
              activeSlide === index ? styles.activeSlide : styles.inactiveSlide
            }`}
          >
            <div className={styles.overlay}></div>
            <img 
              src={property.image} 
              alt={property.title}
              className={styles.slideImage}
            />
          </div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={`${styles.contentContainer} ${isLoaded ? styles.contentLoaded : styles.contentLoading}`}>
          <h1 className={styles.heroTitle}>
            Luxury Living in Sun City Summerlin
          </h1>
          <p className={styles.heroSubtitle}>
            Experience resort-style living in Las Vegas' premier 55+ active adult community with Dr. Jan Duffy, your REALTOR® specialist with 25+ years of experience
          </p>
          
          {/* Property Info Card */}
          <div className={styles.propertyCard}>
            <h3 className={styles.propertyTitle}>{heroProperties[activeSlide].title}</h3>
            <p className={styles.propertyPrice}>{heroProperties[activeSlide].price}</p>
            <p className={styles.propertyFeatures}>{heroProperties[activeSlide].features}</p>
            <div className={styles.slideIndicators}>
              {heroProperties.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`${styles.indicator} ${activeSlide === index ? styles.activeIndicator : ''}`}
                  aria-label={`View property ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              View Properties
            </button>
            <button className={styles.secondaryButton}>
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
