import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to July 1st, 2025
    const launchDate = new Date('2025-07-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>YMP Products - Custom Air Fresheners</title>
        <meta name="description" content="YMP Products - Custom Air Freshener Designer - Launching Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/logo.jpeg" alt="YMP Products Logo" width={200} height={200} />
        </div>
        
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>YMP Products</span>
        </h1>

        <p className={styles.description}>
          Design Your Perfect Air Freshener Experience
        </p>

        <div className={styles.timer}>
          <div className={styles.timerItem}>
            <span className={styles.timerValue}>{timeLeft.days}</span>
            <span className={styles.timerLabel}>Days</span>
          </div>
          <div className={styles.timerItem}>
            <span className={styles.timerValue}>{timeLeft.hours}</span>
            <span className={styles.timerLabel}>Hours</span>
          </div>
          <div className={styles.timerItem}>
            <span className={styles.timerValue}>{timeLeft.minutes}</span>
            <span className={styles.timerLabel}>Minutes</span>
          </div>
          <div className={styles.timerItem}>
            <span className={styles.timerValue}>{timeLeft.seconds}</span>
            <span className={styles.timerLabel}>Seconds</span>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎨</span>
            <h3>Custom Designs</h3>
            <p>Create your unique air freshener design</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌸</span>
            <h3>Premium Scents</h3>
            <p>Choose from our wide range of fragrances</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✨</span>
            <h3>Quality Materials</h3>
            <p>Long-lasting and eco-friendly materials</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 YMP Products. All rights reserved.</p>
      </footer>
    </div>
  );
} 