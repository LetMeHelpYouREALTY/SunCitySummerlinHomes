'use client';

import Link from 'next/link';
import AmenityMap from '@/components/amenities/AmenityMap';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';
import styles from '@/styles/AmenityMap.module.css';

type NearbyAmenitiesSectionProps = {
  /** Compact map on interior pages; full on dedicated amenities page */
  variant?: 'full' | 'compact';
  showStaticList?: boolean;
};

export default function NearbyAmenitiesSection({
  variant = 'compact',
  showStaticList = false,
}: NearbyAmenitiesSectionProps) {
  return (
    <>
      <AmenityMap
        variant={variant}
        showStaticList={showStaticList}
        heading={`Life Near ${SUN_CITY_SUMMERLIN.name}`}
        lead={`Explore healthcare, golf, grocery, and recreation around ${SUN_CITY_SUMMERLIN.name} in ${SUN_CITY_SUMMERLIN.city}. Switch categories on the map, then view the full guide for FAQs and drive-time notes.`}
      />
      <div className={styles.moreLinkWrap}>
        <Link href="/amenities" className={styles.moreLink}>
          View nearby amenities guide
        </Link>
      </div>
    </>
  );
}
