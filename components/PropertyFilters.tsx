
import { useState } from 'react';
import styles from '../styles/PropertyFilters.module.css';

interface PropertyFiltersProps {
  currentFilters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    features: string[];
  };
  onApplyFilters: (filters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    features: string[];
  }) => void;
}

const PropertyFilters = ({ currentFilters, onApplyFilters }: PropertyFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(currentFilters);
  const [formError, setFormError] = useState('');
  
  const featureOptions = [
    'Golf Course View',
    'Mountain View',
    'Single Story',
    'Pool',
    'Updated Kitchen',
    'Renovated',
    'Premium Lot',
    'Large Lot'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'minPrice' || name === 'maxPrice' || name === 'bedrooms' || name === 'bathrooms' 
        ? parseInt(value) 
        : value
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFilters(prev => {
      if (prev.features.includes(feature)) {
        return {
          ...prev,
          features: prev.features.filter(f => f !== feature)
        };
      } else {
        return {
          ...prev,
          features: [...prev.features, feature]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filters.maxPrice > 0 && filters.minPrice > filters.maxPrice) {
      setFormError('Minimum price must be lower than maximum price.');
      return;
    }
    setFormError('');
    onApplyFilters(filters);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const resetFilters = () => {
    const resetFilters = {
      minPrice: 0,
      maxPrice: 1000000,
      bedrooms: 0,
      bathrooms: 0,
      features: []
    };
    setFilters(resetFilters);
    setFormError('');
    onApplyFilters(resetFilters);
  };

  return (
    <div className={styles.filtersWrapper}>
      <button 
        type="button"
        className={styles.mobileFilterToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="property-filter-form"
      >
        {isOpen ? 'Hide Filters' : 'Show Filters'} 
        <span className={styles.filterIcon}>🔍</span>
      </button>
      
      <div className={`${styles.filtersContainer} ${isOpen ? styles.filtersOpen : ''}`}>
        <h2 className={styles.filtersTitle}>Find Your Perfect Home</h2>
        
        <form id="property-filter-form" onSubmit={handleSubmit} aria-describedby="property-filter-error">
          <p id="property-filter-error" aria-live="polite">
            {formError}
          </p>
          <div className={styles.filterSection}>
            <h3>Price Range</h3>
            <div className={styles.priceInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="minPrice">Min Price</label>
                <div className={styles.inputWithPrefix}>
                  <span className={styles.currencyPrefix}>$</span>
                  <input
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    min="0"
                    step="10000"
                    value={filters.minPrice}
                    onChange={handleInputChange}
                    aria-invalid={formError ? 'true' : 'false'}
                    aria-describedby="property-filter-error"
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="maxPrice">Max Price</label>
                <div className={styles.inputWithPrefix}>
                  <span className={styles.currencyPrefix}>$</span>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    min="0"
                    step="10000"
                    value={filters.maxPrice}
                    onChange={handleInputChange}
                    aria-invalid={formError ? 'true' : 'false'}
                    aria-describedby="property-filter-error"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.filterSection}>
            <h3>Bedrooms & Bathrooms</h3>
            <div className={styles.roomFilters}>
              <div className={styles.inputGroup}>
                <label htmlFor="bedrooms">Bedrooms</label>
                <select 
                  id="bedrooms" 
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleInputChange}
                >
                  <option value="0">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="bathrooms">Bathrooms</label>
                <select 
                  id="bathrooms" 
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleInputChange}
                >
                  <option value="0">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className={styles.filterSection}>
            <h3>Features</h3>
            <div className={styles.featuresGrid}>
              {featureOptions.map(feature => (
                <div key={feature} className={styles.featureCheckbox}>
                  <input
                    type="checkbox"
                    id={`feature-${feature}`}
                    checked={filters.features.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                  />
                  <label htmlFor={`feature-${feature}`}>{feature}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.filterActions}>
            <button type="submit" className={styles.applyButton}>
              Apply Filters
            </button>
            <button 
              type="button" 
              className={styles.resetButton}
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyFilters;
