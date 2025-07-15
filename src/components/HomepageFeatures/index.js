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
            为什么选择 <span className="text--primary">梦之插件</span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            梦之插件是一款轻量化便携的Bukkit基础插件，具有轻量、简单、快捷等特点
          </p>
          <img 
              src="img/mhdf-plugin-banner.png"
              alt="梦之插件" 
              className={styles.heroImage}
              loading="lazy"
            />
        </div>
      </div>
    </section>
  );
}