'use client';
import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#fff4e6',
        borderBottom: '1px solid #ddd',
      }}
      aria-label="Primary Navigation"
    >
      <div>
        {/* Use Next.js Image for the logo banner */}
        <img
          src="/img/banner-dogcat.png"
          alt="Furlink logo, dog and cat"
          width={50}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Nav links updated to reflect Furlink pages */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div>
        {/* Button with Link inside can cause accessibility issues.
            Better to wrap button styles on the Link directly */}
        <Link 
          href="/login" 
          style={{
            backgroundColor: '#cc4400',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}

// Feature card component remains mostly unchanged,
// only updating alt for icons and slightly enhancing markup for accessibility
function FeatureCard({ icon, title, desc }) {
  return (
    <div className={styles.card} role="article" aria-label={title}>
      <img className={styles.icon} src={icon} alt={`${title} icon`} width={60} height={60} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section className={styles.banner} aria-labelledby="about-banner-heading">
        <img
          src="https://brunswick.ces.ncsu.edu/wp-content/uploads/2022/05/pets-g6fa575878_1920.jpg"
          alt="Happy pets playing and bonding"
          width={1200}
          height={400}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
        <h1 id="about-banner-heading">About Furlink</h1>
        <p>
          Furlink is a community-driven platform dedicated to connecting pet owners with verified caregivers who provide
          short-term hosting and fostering. Our mission is to promote ethical, affordable, and flexible pet care by building a trusted digital network.
        </p>
      </section>

      {/* Mission */}
      <section className={styles.section} aria-labelledby="mission-heading">
        <h2 id="mission-heading">Our Mission</h2>
        <p>
          We aim to transform urban pet care by facilitating compassionate temporary homes that support pet welfare,
          ease owner anxiety during travel or emergencies, and reduce shelter overcrowding through fostering.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChoose} aria-labelledby="why-choose-heading">
        <h2 id="why-choose-heading">Why Choose Furlink?</h2>
        <div className={styles.featureGrid}>
          <FeatureCard
            icon="/img/trust-icon.jpg"
            title="Verified Caregivers"
            desc="All hosts go through thorough screening for your peace of mind."
          />
          <FeatureCard
            icon="/img/community-icon.png"
            title="Community Focus"
            desc="Building a network that values transparency, respect, and shared responsibility."
          />
          <FeatureCard
            icon="/img/flexible-icon.png"
            title="Flexible Arrangements"
            desc="Short-term hosting and fostering tailored to your pet's unique needs."
          />
          <FeatureCard
            icon="/img/support-icon.png"
            title="24/7 Support"
            desc="Responsive assistance and emergency alerts whenever you need them."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} aria-label="Site Footer">
        <p>Stay connected with us</p>
        <div style={{ marginBottom: '10px' }}>
          {/* Replace # with actual links if available */}
          <a href="#" aria-label="Facebook">Facebook</a> |{' '}
          <a href="#" aria-label="Instagram">Instagram</a> |{' '}
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}
          style={{ marginTop: '10px' }}
          aria-label="Subscribe to newsletter"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            required
            style={{ padding: '8px', marginRight: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>
            Subscribe
          </button>
        </form>
        <p style={{ marginTop: '20px' }}>© 2025 Furlink. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;