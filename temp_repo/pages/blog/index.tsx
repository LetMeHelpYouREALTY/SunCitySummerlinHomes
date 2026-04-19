
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import blogStyles from "../../styles/Blog.module.css";
import { useState, useEffect } from "react";

const Blog: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "2023 Sun City Summerlin Real Estate Market Trends",
      excerpt: "The latest market analysis shows continued demand for Sun City Summerlin properties, with prices increasing by 8.5% year-over-year despite broader market fluctuations.",
      date: "October 15, 2023",
      author: "Dr. Jan Duffy",
      image: "/property1.jpg",
      category: "Market Trends",
      slug: "2023-market-trends"
    },
    {
      id: 2,
      title: "Top 5 Renovations That Increase Home Value in Sun City Summerlin",
      excerpt: "Looking to sell your Sun City Summerlin home for top dollar? These five strategic renovations have consistently shown the highest ROI in our 55+ community.",
      date: "September 28, 2023",
      author: "Dr. Jan Duffy",
      image: "/property2.jpg",
      category: "Home Improvement",
      slug: "top-renovations-home-value"
    },
    {
      id: 3,
      title: "Understanding HOA Rules: A Guide for New Sun City Summerlin Residents",
      excerpt: "Moving to Sun City Summerlin? Here's everything you need to know about the community's HOA regulations, fees, and governance structure.",
      date: "September 12, 2023",
      author: "Dr. Jan Duffy",
      image: "/property3.jpg",
      category: "Community Living",
      slug: "hoa-rules-guide"
    },
    {
      id: 4,
      title: "Golf Course Living: Pros and Cons in Sun City Summerlin",
      excerpt: "While golf course properties offer stunning views and convenient access to recreation, there are important considerations before purchasing one in our community.",
      date: "August 25, 2023",
      author: "Dr. Jan Duffy",
      image: "/golf-course.jpg",
      category: "Lifestyle",
      slug: "golf-course-living"
    },
    {
      id: 5,
      title: "Moving from California to Sun City Summerlin: Tax Benefits and Lifestyle Changes",
      excerpt: "Many of my clients relocate from California to enjoy Nevada's tax advantages and Sun City's amenities. Here's what you should know about the transition.",
      date: "August 10, 2023",
      author: "Dr. Jan Duffy",
      image: "/community-center.jpg",
      category: "Relocation",
      slug: "california-nevada-relocation"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Real Estate Blog | Las Vegas 55+ Community Expert</title>
        <meta name="description" content="Stay informed about Sun City Summerlin real estate trends, lifestyle tips, and community updates with Dr. Jan Duffy's expert blog for active 55+ adults in Las Vegas." />
        <meta name="keywords" content="Sun City Summerlin blog, Las Vegas real estate tips, 55+ community living, Del Webb community updates, Las Vegas retirement homes" />
        <link rel="canonical" href="https://suncitysummerlin.com/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main className={`${styles.main} ${isVisible ? styles.fadeIn : ''}`}>
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
            <img src="/property1.jpg" alt="Featured blog post on Sun City Summerlin market trends" />
          </div>
          <div className={blogStyles.featuredContent}>
            <span className={blogStyles.featuredLabel}>Featured Article</span>
            <h2>2023 Sun City Summerlin Real Estate Market Trends</h2>
            <p className={blogStyles.postMeta}>
              <span className={blogStyles.postDate}>October 15, 2023</span>
              <span className={blogStyles.postAuthor}>By Dr. Jan Duffy</span>
              <span className={blogStyles.postCategory}>Market Trends</span>
            </p>
            <p className={blogStyles.postExcerpt}>
              The latest market analysis shows continued demand for Sun City Summerlin properties, with prices increasing by 8.5% year-over-year despite broader market fluctuations. Low inventory continues to favor sellers, while buyers benefit from stable interest rates and exceptional community amenities.
            </p>
            <Link href="/blog/2023-market-trends" className={blogStyles.readMoreBtn}>
              Read Full Article
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
          <p>Subscribe to receive monthly market updates, community news, and exclusive property listings</p>
          <form className={blogStyles.subscribeForm}>
            <div className={blogStyles.formInput}>
              <input type="email" placeholder="Your Email Address" required />
            </div>
            <button type="submit" className={blogStyles.subscribeBtn}>
              Subscribe
            </button>
          </form>
          <p className={blogStyles.privacyNote}>We respect your privacy. Unsubscribe anytime.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LLC</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
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
};

export default Blog;
