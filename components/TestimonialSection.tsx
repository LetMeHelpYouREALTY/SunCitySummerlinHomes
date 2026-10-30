
import React from 'react';
import styles from '../styles/TestimonialSection.module.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Dr. Jan made our transition to Sun City Summerlin seamless. Her knowledge of the community amenities and lifestyle helped us find the perfect home near the golf course.",
      author: "Robert & Susan Wilson",
      location: "Highland Falls residents",
      image: "/testimonial1.jpg"
    },
    {
      quote: "After looking at dozens of properties, Dr. Jan understood exactly what we wanted. She found us a beautiful single-story with mountain views that exceeded our expectations.",
      author: "James & Margaret Thompson",
      location: "Relocated from California",
      image: "/testimonial2.jpg"
    },
    {
      quote: "Dr. Jan's expertise in Sun City Summerlin's real estate market got us the best price for our home. Her marketing strategy and negotiation skills are exceptional.",
      author: "David & Carol Martinez",
      location: "Palm Valley residents",
      image: "/testimonial3.jpg"
    }
  ];
  
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from homeowners who found their perfect Sun City Summerlin property
          </p>
        </div>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <p className={styles.authorName}>{testimonial.author}</p>
                  <p className={styles.authorLocation}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.aboutCard}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3 className={styles.aboutTitle}>Meet Dr. Jan Duffy</h3>
              <p className={styles.aboutDescription}>
                Licensed since 2008 · 35 years in Las Vegas and specializing in Sun City Summerlin, Dr. Jan Duffy provides unparalleled expertise in helping buyers and sellers navigate this premier 55+ community in Las Vegas.
              </p>
              <p className={styles.aboutDescription}>
                As both a veteran-owned and women-owned business, Dr. Duffy's practice is dedicated to accessible, inclusive service for all clients.
              </p>
              <button className={styles.consultButton}>
                Schedule a Consultation
              </button>
            </div>
            <div className={styles.aboutImageContainer}>
              <div className={styles.aboutImageOverlay}></div>
              <div className={styles.aboutImageContent}>
                <div className={styles.profileImageContainer}>
                  {/* This will be replaced with your actual image when available */}
                  <img 
                    src="/drjan-logo.png" 
                    alt="Dr. Jan Duffy" 
                    className={styles.profileImage}
                  />
                </div>
                <p className={styles.profileName}>Dr. Jan Duffy, REALTOR®</p>
                <p className={styles.profileTitle}>Sun City Summerlin Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
