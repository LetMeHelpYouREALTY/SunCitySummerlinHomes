'use client';


import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import blogStyles from '@/styles/Blog.module.css';
import { useState, useEffect } from "react";
import ScheduleButton from '@/components/ScheduleButton';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';
import { BLOG_POSTS } from '@/lib/blog-posts';

const blogPosts = BLOG_POSTS;

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <div className={styles.logoText}>
            <p className={styles.logo}>Sun City Summerlin Homes</p>
            <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Community Specialist</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className={`${styles.main} ${isVisible ? styles.fadeIn : ''}`}>
        <section className={blogStyles.blogHero}>
          <div className={blogStyles.blogHeroContent}>
            <h1>Sun City Summerlin Real Estate Insights</h1>
            <p>Expert advice, market trends, and community updates from Dr. Jan Duffy</p>
          </div>
        </section>

        <section className={blogStyles.blogCategories}>
          <div className={blogStyles.categoryTabs}>
            <button className={`${blogStyles.categoryTab} ${blogStyles.active}`}>All Posts</button>
            <button className={blogStyles.categoryTab}>Market Trends</button>
            <button className={blogStyles.categoryTab}>Lifestyle</button>
            <button className={blogStyles.categoryTab}>Community Living</button>
            <button className={blogStyles.categoryTab}>Home Improvement</button>
            <button className={blogStyles.categoryTab}>Relocation</button>
          </div>
        </section>

        <section className={blogStyles.featuredPost}>
          <div className={blogStyles.featuredImage}>
            <img
              src={blogPosts[0]?.image ?? '/property1.jpg'}
              alt={blogPosts[0]?.title ?? 'Featured Sun City Summerlin article'}
            />
          </div>
          <div className={blogStyles.featuredContent}>
            <span className={blogStyles.featuredLabel}>Featured article</span>
            <h2>{blogPosts[0]?.title}</h2>
            <p className={blogStyles.postMeta}>
              <span className={blogStyles.postDate}>{blogPosts[0]?.date}</span>
              <span className={blogStyles.postAuthor}>By {blogPosts[0]?.author}</span>
              <span className={blogStyles.postCategory}>{blogPosts[0]?.category}</span>
            </p>
            <p className={blogStyles.postExcerpt}>{blogPosts[0]?.excerpt}</p>
            <Link href={`/blog/${blogPosts[0]?.slug ?? '2023-market-trends'}`} className={blogStyles.readMoreBtn}>
              Read full article
            </Link>
          </div>
        </section>

        <section className={blogStyles.recentPosts}>
          <h2 className={blogStyles.sectionTitle}>Recent Articles</h2>
          
          <div className={blogStyles.postsGrid}>
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className={blogStyles.postCard}>
                <div className={blogStyles.postImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={blogStyles.postCategory}>{post.category}</span>
                </div>
                <div className={blogStyles.postContent}>
                  <h3 className={blogStyles.postTitle}>{post.title}</h3>
                  <p className={blogStyles.postMeta}>
                    <span className={blogStyles.postDate}>{post.date}</span>
                    <span className={blogStyles.postAuthor}>By {post.author}</span>
                  </p>
                  <p className={blogStyles.postExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={blogStyles.readMoreLink}>
                    Continue Reading →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={blogStyles.subscribeSection}>
          <h2>Stay Updated on Sun City Summerlin</h2>
          <p>
            Book a short call with Dr. Jan for market updates and listing ideas—no email form required.
          </p>
          <div className={blogStyles.subscribeCtaRow}>
            <ScheduleButton type="button" className={blogStyles.subscribeBtn}>
              Schedule a call
            </ScheduleButton>
            <Link href="/contact" className={blogStyles.subscribeLink}>
              Open full scheduling page
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LL</p>
          <p>
            Real Estate Las Vegas, NV{' '}
            <RealScoutHomeSearchLink>Live MLS search (RealScout)</RealScoutHomeSearchLink>
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Connect With Dr. Jan</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/DrJanDuffyRealtorCentennialHills/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">👍</a>
            <a href="https://www.pinterest.com/bhhsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">🎬</a>
            <a href="https://x.com/drjanduffy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://www.linkedin.com/company/lvrmembers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://www.tiktok.com/@dr.janduffy" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

