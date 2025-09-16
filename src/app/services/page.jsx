// app/page.js
'use client';
import React from 'react';
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
        <Image
          src="/img/banner-dogcat.png"
          alt="Furlink logo"
          width={50}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div>
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

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        width: '280px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        padding: '25px',
        margin: '15px',
      }}
      role="region"
      aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}
    >
      <Image src={icon} alt={`${title} icon`} width={70} height={70} />
      <h3 id={`${title.replace(/\s+/g, '-').toLowerCase()}-title`} style={{ marginTop: '20px', fontSize: '1.4rem', color: '#222' }}>
        {title}
      </h3>
      <p style={{ fontSize: '1rem', color: '#666', marginTop: '15px', lineHeight: '1.6' }}>{desc}</p>
    </div>
  );
}

function TestimonialCard({ image, name, feedback }) {
  return (
    <div
      style={{
        width: '320px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin: '15px',
      }}
      role="region"
      aria-label={`Testimonial from ${name}`}
    >
      <Image
        src={image}
        alt={`Photo of ${name}`}
        width={90}
        height={90}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <h4 style={{ marginTop: '20px', fontSize: '1.3rem', color: '#333' }}>{name}</h4>
      <p style={{ fontSize: '1rem', marginTop: '15px', color: '#555', lineHeight: '1.6' }}>"{feedback}"</p>
    </div>
  );
}

function HomePage() {
  // Features array
  const features = [
    {
      icon: '/img/hosting.jpg',
      title: 'Pet Hosting',
      desc: 'Find trusted caregivers for short-term stays while you travel or handle emergencies.'
    },
    {
      icon: '/img/fostering.jpg',
      title: 'Temporary Adoption',
      desc: 'Provide loving temporary homes for pets in transition or awaiting permanent adoption.'
    },
    {
      icon: '/img/community.jpg',
      title: 'Pet Community',
      desc: 'Connect with fellow pet lovers and build a supportive network in your area.'
    }
  ];

  // Testimonials array
  const testimonials = [
    {
      name: 'Sarah & Milo',
      feedback: 'Furlink made my business trip stress-free. Milo was happy and well-cared for!',
      image: '/img/testimonial1.jpg',
    },
    {
      name: 'Raj & Bella',
      feedback: 'The perfect solution for temporary pet care. Professional and loving caregivers!',
      image: '/img/testimonial2.jpg',
    },
    {
      name: 'Lisa & Max',
      feedback: 'Max found his temporary home through Furlink. Amazing experience from start to finish!',
      image: '/img/testimonial3.jpg',
    }
  ];

  // Stats array
  const stats = [
    { number: '500+', label: 'Happy Pets' },
    { number: '200+', label: 'Trusted Caregivers' },
    { number: '50+', label: 'Cities Served' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{ 
          backgroundColor: '#fff7ec', 
          padding: '80px 20px', 
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #fff7ec 0%, #ffe6cc 100%)'
        }}
        aria-labelledby="hero-section-title"
      >
        <h1 id="hero-section-title" style={{ fontSize: '3rem', color: '#cc4400', marginBottom: '20px' }}>
          Welcome to Furlink
        </h1>
        <p style={{ 
          maxWidth: '800px', 
          margin: '20px auto', 
          fontSize: '1.3rem', 
          color: '#666',
          lineHeight: '1.6'
        }}>
          Connecting pet owners with loving temporary caregivers. Your pet's home away from home.
        </p>
        <div style={{ marginTop: '30px' }}>
          <Link
            href="/services"
            style={{
              backgroundColor: '#cc4400',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              display: 'inline-block',
              margin: '0 10px'
            }}
          >
            Explore Services
          </Link>
          <Link
            href="/signup"
            style={{
              backgroundColor: 'transparent',
              color: '#cc4400',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid #cc4400',
              display: 'inline-block',
              margin: '0 10px'
            }}
          >
            Join Now
          </Link>
        </div>
        <Image
          src="/img/home-hero.jpg"
          alt="Happy pets and owners together"
          width={1000}
          height={500}
          style={{ 
            marginTop: '50px', 
            borderRadius: '15px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
          }}
          priority
        />
      </section>

      {/* Stats Section */}
      <section
        style={{ 
          backgroundColor: '#fff', 
          padding: '60px 20px',
          textAlign: 'center'
        }}
        aria-labelledby="stats-title"
      >
        <h2 id="stats-title" style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', color: '#333' }}>
          Our Impact in Numbers
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '50px', 
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#cc4400' }}>{stat.number}</div>
              <div style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{ 
          padding: '80px 20px', 
          backgroundColor: '#fef9f5',
          backgroundImage: 'linear-gradient(135deg, #fef9f5 0%, #fff4e6 100%)'
        }}
        aria-labelledby="features-title"
      >
        <h2 id="features-title" style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', color: '#333' }}>
          How Furlink Works
        </h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{ 
          backgroundColor: '#fff', 
          padding: '80px 20px'
        }}
        aria-labelledby="testimonials-title"
      >
        <h2 id="testimonials-title" style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', color: '#333' }}>
          What Pet Owners Say
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard 
              key={idx} 
              name={testimonial.name} 
              feedback={testimonial.feedback} 
              image={testimonial.image} 
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: '#cc4400',
          color: 'white',
          textAlign: 'center',
          padding: '80px 20px',
          backgroundImage: 'linear-gradient(135deg, #cc4400 0%, #e65c00 100%)'
        }}
        aria-labelledby="cta-title"
      >
        <h2 id="cta-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Ready to Find Your Pet's Temporary Home?
        </h2>
        <p style={{ fontSize: '1.3rem', margin: '20px 0 40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join thousands of pet owners who trust Furlink for reliable, loving pet care.
        </p>
        <Link
          href="/signup"
          style={{
            backgroundColor: '#fff',
            color: '#cc4400',
            padding: '15px 40px',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            display: 'inline-block',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Get Started Today
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '50px 20px 30px',
          borderTop: '1px solid #ddd'
        }}
        aria-label="Site Footer"
      >
        <div style={{ 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <Image
              src="/img/banner-dogcat.png"
              alt="Furlink logo"
              width={60}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{ color: '#666', textDecoration: 'none' }}>About Us</Link>
            <Link href="/services" style={{ color: '#666', textDecoration: 'none' }}>Services</Link>
            <Link href="/contact" style={{ color: '#666', textDecoration: 'none' }}>Contact</Link>
            <Link href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</Link>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <span style={{ margin: '0 15px' }}>
              <a href="#" aria-label="Facebook" style={{ color: '#666', textDecoration: 'none' }}>Facebook</a>
            </span>
            <span style={{ margin: '0 15px' }}>
              <a href="#" aria-label="Instagram" style={{ color: '#666', textDecoration: 'none' }}>Instagram</a>
            </span>
            <span style={{ margin: '0 15px' }}>
              <a href="#" aria-label="Twitter" style={{ color: '#666', textDecoration: 'none' }}>Twitter</a>
            </span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to our newsletter!');
            }}
            aria-label="Subscribe to newsletter"
            style={{ margin: '20px 0' }}
          >
            <label htmlFor="newsletter-email" style={{ display: 'block', marginBottom: '10px', color: '#666' }}>
              Stay updated with Furlink news
            </label>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                style={{ 
                  padding: '12px', 
                  borderRadius: '6px', 
                  border: '1px solid #ddd',
                  minWidth: '250px'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  backgroundColor: '#cc4400',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Subscribe
              </button>
            </div>
          </form>

          <p style={{ 
            marginTop: '30px', 
            color: '#999', 
            borderTop: '1px solid #ddd', 
            paddingTop: '20px'
          }}>
            © 2025 Furlink. All rights reserved. Connecting pets with loving temporary homes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;