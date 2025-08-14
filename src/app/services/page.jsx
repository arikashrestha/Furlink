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

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      style={{
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        padding: '20px',
      }}
      role="region"
      aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}
    >
      <Image src={icon} alt={`${title} icon`} width={60} height={60} />
      <h3 id={`${title.replace(/\s+/g, '-').toLowerCase()}-title`} style={{ marginTop: '15px', fontSize: '1.3rem', color: '#222' }}>
        {title}
      </h3>
      <p style={{ fontSize: '1rem', color: '#666', marginTop: '10px' }}>{desc}</p>
    </div>
  );
}

function TestimonialCard({ image, name, feedback }) {
  return (
    <div
      style={{
        width: '300px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
      role="region"
      aria-label={`Testimonial from ${name}`}
    >
      <Image
        src={image}
        alt={`Photo of ${name}`}
        width={80}
        height={80}
        style={{ borderRadius: '50%' }}
      />
      <h4 style={{ marginTop: '15px', fontSize: '1.2rem' }}>{name}</h4>
      <p style={{ fontSize: '1rem', marginTop: '10px', color: '#555' }}>{feedback}</p>
    </div>
  );
}

function ServicePage() {
  // Benefits array
  const benefits = [
    { icon: '/img/professional.jpg', text: 'Certified professionals with years of experience' },
    { icon: '/img/pricing.jpg', text: 'Affordable and transparent pricing' },
    { icon: '/img/hygiene.jpg', text: 'Hygienic and well-equipped facility' },
    { icon: '/img/peace.jpg', text: 'Stress-free environment for pets' },
    { icon: '/img/booking.png', text: 'Easy online booking' },
  ];

  // Testimonials array
  const testimonials = [
    {
      name: 'Sarah & Milo',
      feedback:
        'Furlink’s temporary hosting service helped me while I was away. Milo was well cared for and happy!',
      image: '/img/testimonial1.jpg',
    },
    {
      name: 'Ravi & Bella',
      feedback:
        'The caregivers at Furlink feel like family. Bella loves her foster home — so grateful for this community!',
      image: '/img/testimonial2.jpg',
    },
    {
      name: 'Anita & Max',
      feedback:
        'The fostering program made a huge difference for Max during recovery. Excellent support and care.',
      image: '/img/testimonial3.jpg',
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{ backgroundColor: '#fff7ec', padding: '60px 20px', textAlign: 'center' }}
        aria-labelledby="hero-section-title"
      >
        <h1 id="hero-section-title" style={{ fontSize: '2.5rem' }}>
          Our Pet Care Services
        </h1>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem' }}>
          Furlink connects pet owners to trusted caregivers for short-term hosting, fostering, training,
          grooming, and veterinary consultations — all tailored for your pet’s wellbeing.
        </p>
        <Image
          src="/img/service-hero.jpg"
          alt="Pets receiving care and attention"
          width={2000}
          height={400}
          style={{ marginTop: '30px', borderRadius: '10px' }}
          priority
        />
      </section>

      {/* Services List */}
      <section
        style={{ padding: '60px 20px', backgroundColor: '#fffdf8' }}
        aria-labelledby="services-list-title"
      >
        <h2 id="services-list-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
          What We Offer
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          <ServiceCard
            icon="/img/grooming.jpg"
            title="Pet Grooming"
            desc="Professional grooming services to keep your pet looking and feeling great."
          />
          <ServiceCard
            icon="/img/consultation.jpg"
            title="Vet Consultation"
            desc="Connect with licensed vets for expert health advice and checkups."
          />
          <ServiceCard
            icon="/img/training.jpg"
            title="Pet Training"
            desc="Customized training programs to improve behavior and skills."
          />
          <ServiceCard
            icon="/img/daycare.jpg"
            title="Pet Daycare & Hosting"
            desc="Safe, loving temporary homes while you’re away or in need."
          />
          <ServiceCard
            icon="/img/food.jpg"
            title="Custom Nutrition"
            desc="Tailored food plans based on your pet’s unique needs."
          />
        </div>
      </section>

      {/* Benefits */}
      <section
        style={{ padding: '60px 20px', backgroundColor: '#fff7ef' }}
        aria-labelledby="benefits-title"
      >
        <h2 id="benefits-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px' }}>
          Why Pet Owners Love Us
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: 'auto',
          }}
        >
          {benefits.map(({ icon, text }, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Image src={icon} alt={`Benefit: ${text}`} width={35} height={35} />
              <p style={{ fontSize: '1.1rem', margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{ backgroundColor: '#fef9f5', padding: '60px 20px' }}
        aria-labelledby="testimonials-title"
      >
        <h2 id="testimonials-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
          What Our Clients Say
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          {testimonials.map(({ name, feedback, image }, idx) => (
            <TestimonialCard key={idx} name={name} feedback={feedback} image={image} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section
        style={{
          backgroundColor: '#cc4400',
          color: 'white',
          textAlign: 'center',
          padding: '60px 20px',
        }}
        aria-labelledby="cta-title"
      >
        <h2 id="cta-title" style={{ fontSize: '2rem' }}>
          Ready to provide loving temporary care?
        </h2>
        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
          Join Furlink or book a service today and make a difference in a pet's life.
        </p>
       <Link
  href="/contact"
  style={{
    backgroundColor: '#fff',
    color: '#cc4400',
    padding: '10px 20px',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  }}
>
  Get in Touch
</Link>
       
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: '#f0f0f0', padding: '30px 20px', marginTop: '50px' }}
        aria-label="Site Footer"
      >
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold' }}>Stay Connected</p>
          <div style={{ marginBottom: '10px' }}>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>{' '}
            |{' '}
            <a href="#" aria-label="Instagram">
              Instagram
            </a>{' '}
            |{' '}
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
            }}
            aria-label="Subscribe to newsletter"
            style={{ marginTop: '10px' }}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required
              style={{ padding: '8px', borderRadius: '5px' }}
            />
            <button
              type="submit"
              style={{
                marginLeft: '10px',
                padding: '8px 16px',
                borderRadius: '5px',
                backgroundColor: '#cc4400',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
          <p style={{ marginTop: '20px' }}>© 2025 Furlink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicePage;