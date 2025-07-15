import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadline}>轻量，简单，快捷</div>
          <Heading as="h1" className={styles.heroTitle}>
            <span>梦之插件</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            一款轻量化便携的Bukkit基础插件
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', styles.primaryButton)}
              href="https://github.com/ChengZhiMeow/MHDF-Tools">
              GitHub
            </Link>
            <Link
              className={clsx('button', styles.primaryButton)}
              to="/docs/intro">
              文档
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <img 
              src="img/mhdf-plugin-logo.png"
              alt="梦之插件" 
              className={styles.heroImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeFooterCTA() {
  return (
    <section className={styles.footerCta}>
      <div className="container">
        <Heading as="h2" className={styles.footerCtaTitle}>
          准备好开始使用 <span className={styles.textHighlight}>梦之插件</span> 作为你的下一个基础插件了吗？
        </Heading>
        <p className={styles.footerCtaSubtitle}>
          ✨你的下一个基础插件，为何不能是梦之插件✨
        </p>
        <div>
          <Link
            className={clsx('button button--primary button--lg')}
            href="https://github.com/ChengZhiMeow/MHDF-Tools/releases">
            立即下载
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName="homepage">
      <HomepageHeader />
      <main className={styles.homeMain}>
        <HomepageFeatures />
        <HomeFooterCTA />
      </main>
    </Layout>
  );
}