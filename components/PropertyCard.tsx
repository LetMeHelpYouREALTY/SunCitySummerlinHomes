
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PropertyCard.module.css';

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  features?: string[];
  isNew?: boolean;
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  address, 
  bedrooms, 
  bathrooms, 
  sqft, 
  image, 
  features = [],
  isNew = false 
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/properties/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        {isNew && <span className={styles.newBadge}>Featured sample</span>}
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title} 
            width={400} 
            height={300}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
          />
          <button 
            className={styles.favoriteButton} 
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <span className={`${styles.heartIcon} ${isFavorite ? styles.favorite : ''}`}>
              ♥
            </span>
          </button>
          {features.length > 0 && (
            <div className={styles.featureBadges}>
              {features.map((feature, index) => (
                <span key={index} className={styles.featureBadge}>{feature}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.price}>${price.toLocaleString()}</h3>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.address}>{address}</p>
          
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>🛏️</span>
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>🚿</span>
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>📏</span>
              <span>{sqft.toLocaleString()} Sq Ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
