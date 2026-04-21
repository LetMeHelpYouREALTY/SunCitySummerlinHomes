
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/PropertyGallery.module.css';

interface PropertyGalleryProps {
  images: string[];
  features?: string[];
  alt?: string;
}

const PropertyGallery = ({ images, features = [], alt = "Property image" }: PropertyGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setIsVisible(true);
    });

    // Auto-rotate property images
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`${styles.gallery} ${isVisible ? styles.fadeIn : ''}`}>
      <div className={styles.mainImage}>
        <div className={styles.imageOverlay}>
          <span className={styles.imageCount}>{activeImage + 1}/{images.length}</span>
          {features && features.length > 0 && (
            <div className={styles.features}>
              {features.map((feature, index) => (
                <span key={index} className={styles.featureBadge}>{feature}</span>
              ))}
            </div>
          )}
        </div>
        <Image 
          src={images[activeImage]} 
          alt={`${alt} ${activeImage + 1}`}
          width={800}
          height={600}
          priority={activeImage === 0}
          className={styles.featuredImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          quality={85}
        />
        <div className={styles.imageNavigation}>
          <button 
            onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
            className={styles.navArrow}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button 
            onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
            className={styles.navArrow}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
            onClick={() => setActiveImage(index)}
          >
            <Image 
              src={image} 
              alt={`${alt} thumbnail ${index + 1}`} 
              width={120} 
              height={80}
              sizes="120px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
