import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <span className="text--primary">梦之插件</span> 都有什么?
          </Heading>
          <h2 className={styles.sectionSubtitle}>
            梦之工具
          </h2>
          <p className={styles.sectionDescription}>
            一款轻量化便携的Bukkit基础插件
          </p>
          <img 
              src="img/mhdf-tools-banner.png"
              alt="梦之工具" 
              className={styles.bannerImage}
              loading="lazy"
            />
        </div>
      </div>
    </section>
  );
}