import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Agriculture into Next level',
    imageUrl: 'img/agri.jpg',
    description: (
      <>
        The art and science of cultivating the soil, 
        growing crops and raising livestock. It includes the preparation
         of plant and animal products for people to use and their distribution
          to markets. Agriculture is the backbone of country.
      </>
    ),
  },
  {
    title: 'Supply chain analysis',
    imageUrl: 'img/supply-chain.png',
    description: (
      <>
        Data driven suply chain analysis can make a significant impact to bring 
        more open, sustainable and fair market for all the stakeholders. We are working
        on this approach.
      </>
    ),
  },
  {
    title: 'Powered by Copper-plus',
    imageUrl: 'img/logo.svg',
    description: (
      <>
        Copper-plus project come up with the vision of Open, Connected and decentralized 
        social network based commodity market for Sri Lanka. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              Read More..
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
