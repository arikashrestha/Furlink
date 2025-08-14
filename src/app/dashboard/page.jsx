'use client';
import React, { useState, useEffect } from 'react';
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
        <img
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
          Log Out
        </Link>
      </div>
    </nav>
  );
}

// Mock user data
const mockUser = {
  name: 'Shireen Shrestha',
  role: 'Pet Owner', // 'Pet Owner', 'Adopter', 'Admin'
  email: 'shireen@example.com',
  phone: '+977-9801234567',
};

// Mock pets owned by user
const mockPets = [
  {
    id: 'P001',
    name: 'Charlie',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    photo:
      'data:image/jpeg;base64,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',
  },
  {
    id: 'P002',
    name: 'Mittens',
    type: 'Cat',
    breed: 'Siamese',
    age: '2 years',
    photo:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80',
  },
   {
    id: 'P001',
    name: 'Charlie',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    photo:
      'data:image/jpeg;base64,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',
  },
  {
    id: 'P002',
    name: 'Mittens',
    type: 'Cat',
    breed: 'Siamese',
    age: '2 years',
    photo:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80',
  },
];

// Mock upcoming notifications/events
const mockNotifications = [
  {
    id: 'N001',
    message: 'Vaccination appointment for Charlie on 2025-07-10',
    date: '2025-07-05',
  },
  {
    id: 'N002',
    message: 'Booking request for Mittens pending approval',
    date: '2025-06-30',
  },
];

// Mock Bookings - extended with actions
const mockBookings = [
  {
    id: 'B001',
    petName: 'Charlie',
    status: 'Confirmed',
    startDate: '2025-07-05',
    endDate: '2025-07-10',
    hostName: 'Gaurav Bhattarai',
  },
  {
    id: 'B002',
    petName: 'Mittens',
    status: 'Pending',
    startDate: '2025-07-15',
    endDate: '2025-07-20',
    hostName: 'Arika Shrestha',
  },
  {
    id: 'B002',
    petName: 'Lilly',
    status: 'Pending',
    startDate: '2025-07-15',
    endDate: '2025-07-20',
    hostName: 'Sandhya Mainali',
  },
  {
    id: 'B002',
    petName: 'Coco',
    status: 'Pending',
    startDate: '2025-07-15',
    endDate: '2025-07-20',
    hostName: 'Radha Thapa',
  },
];

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Simulate fetching data on component mount
  useEffect(() => {
    setUser(mockUser);
    setPets(mockPets);
    setNotifications(mockNotifications);
    setBookings(mockBookings);
  }, []);

  if (!user) {
    return (
      <main
        style={{
          maxWidth: '1100px',
          margin: '50px auto',
          padding: '0 20px',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        <p>Loading your dashboard...</p>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: '1100px',
          margin: '40px auto',
          padding: '0 20px',
          fontFamily: 'Arial, sans-serif',
          minHeight: '80vh',
        }}
        aria-label="User Dashboard"
      >
        <h1
          style={{
            color: '#cc4400',
            fontSize: '2.5rem',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          Welcome back, {user.name}!
        </h1>

        {/* Profile summary and contact */}
        <section
          aria-label="User profile summary"
          style={{
            backgroundColor: '#fff3e0',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ color: '#b75c00', marginBottom: '12px' }}>Profile Summary</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <Link
            href="/profile/edit"
            style={editProfileButtonStyle}
            aria-label="Edit your profile"
          >
            Edit Profile
          </Link>
        </section>

        {/* Quick overview about user role */}
        <section
          aria-label="User role overview"
          style={{
            backgroundColor: '#fff8f0',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '40px',
            boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
          }}
        >
          <h2 style={{ color: '#b75c00', marginBottom: '12px' }}>Role Overview</h2>
          <p style={{ fontSize: '1.1rem', color: '#5a391f' }}>
            {user.role === 'Pet Owner'
              ? 'Manage your pets, view bookings, connect with hosts, and ensure your pets get the best care.'
              : user.role === 'Adopter'
              ? 'Explore and manage foster opportunities, update your profile, and communicate with pet owners.'
              : 'Manage users, bookings, and platform activities with admin controls and analytics.'}
          </p>
        </section>

        {/* Pets summary section */}
        <section aria-label="Pets owned by user" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#cc4400', marginBottom: '20px', textAlign: 'center' }}>
            Your Pets
          </h2>
          {pets.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              You have no pets registered.{' '}
              <Link href="/pets/add" style={{ color: '#cc4400' }}>
                Add a pet
              </Link>
              .
            </p>
          ) : (
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {pets.map(({ id, name, type, breed, age, photo }) => (
                <div
                  key={id}
                  style={{
                    width: '250px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for pet ${name}`}
                  onClick={() => window.alert(`Navigate to pet details page for ${name} (not implemented)`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.alert(`Navigate to pet details page for ${name} (not implemented)`);
                    }
                  }}
                >
                  <img
                    src={photo}
                    alt={`${name} the ${type}`}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                  <div style={{ padding: '12px' }}>
                    <h3 style={{ color: '#cc4400', margin: '8px 0' }}>{name}</h3>
                    <p style={{ margin: '4px 0' }}>
                      <strong>Type:</strong> {type}
                    </p>
                    <p style={{ margin: '4px 0' }}>
                      <strong>Breed:</strong> {breed}
                    </p>
                    <p style={{ margin: '4px 0' }}>
                      <strong>Age:</strong> {age}
                    </p>
                    <Link
                      href={`/pets/${id}/edit`}
                      style={{
                        display: 'inline-block',
                        marginTop: '8px',
                        padding: '6px 12px',
                        backgroundColor: '#cc4400',
                        color: '#fff',
                        borderRadius: '8px',
                        textDecoration: 'none',
                      }}
                      aria-label={`Edit pet ${name}`}
                    >
                      Edit Pet
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Notifications / Upcoming Events */}
        {notifications.length > 0 && (
          <section
            aria-label="Upcoming notifications and events"
            style={{
              marginBottom: '40px',
              backgroundColor: '#fff9e6',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.07)',
            }}
          >
            <h2 style={{ color: '#b77700', marginBottom: '20px', textAlign: 'center' }}>
              Upcoming Notifications
            </h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '1rem', color: '#5a4a0c' }}>
              {notifications.map(({ id, message, date }) => (
                <li
                  key={id}
                  style={{
                    marginBottom: '12px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #e0dcbc',
                  }}
                  tabIndex={0}
                >
                  <strong>{date}:</strong> {message}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Quick Actions - role-based */}
        <section aria-label="Quick actions" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#cc4400', marginBottom: '20px', textAlign: 'center' }}>
            Quick Actions
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '18px',
            }}
          >
            {user.role === 'Pet Owner' && (
              <>
                <Link href="/pets" style={actionCardStyle}>
                  Manage Your Pets
                </Link>
                <Link href="/bookings" style={actionCardStyle}>
                  Booking Calendar
                </Link>
                <Link href="/messages" style={actionCardStyle}>
                  Messages
                </Link>
              </>
            )}
            {user.role === 'Adopter' && (
              <>
                <Link href="/fostering" style={actionCardStyle}>
                  Find Pets to Foster
                </Link>
                <Link href="/profile/edit" style={actionCardStyle}>
                  Edit Your Profile
                </Link>
                <Link href="/messages" style={actionCardStyle}>
                  Messages
                </Link>
              </>
            )}
            {user.role === 'Admin' && (
              <>
                <Link href="/admin/users" style={actionCardStyle}>
                  User Approvals
                </Link>
                <Link href="/admin/bookings" style={actionCardStyle}>
                  Manage Bookings
                </Link>
                <Link href="/admin/reports" style={actionCardStyle}>
                  Reports & Analytics
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Recent Bookings table with action buttons */}
        <section aria-label="Recent Bookings">
          <h2 style={{ color: '#cc4400', marginBottom: '20px', textAlign: 'center' }}>
            Recent Bookings
          </h2>
          {bookings.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              You have no recent bookings.
            </p>
          ) : (
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                boxShadow: '0 0 10px rgba(0,0,0,0.05)',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#fff4e6', textAlign: 'left' }}>
                  <th style={tableHeaderStyle}>Booking ID</th>
                  <th style={tableHeaderStyle}>Pet Name</th>
                  <th style={tableHeaderStyle}>Host</th>
                  <th style={tableHeaderStyle}>Start Date</th>
                  <th style={tableHeaderStyle}>End Date</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={{ ...tableHeaderStyle, minWidth: '120px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(({ id, petName, hostName, startDate, endDate, status }) => (
                  <tr key={id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={tableCellStyle}>{id}</td>
                    <td style={tableCellStyle}>{petName}</td>
                    <td style={tableCellStyle}>{hostName}</td>
                    <td style={tableCellStyle}>{startDate}</td>
                    <td style={tableCellStyle}>{endDate}</td>
                    <td
                      style={{
                        ...tableCellStyle,
                        color:
                          status === 'Confirmed'
                            ? 'green'
                            : status === 'Pending'
                            ? 'orange'
                            : 'red',
                        fontWeight: '600',
                      }}
                    >
                      {status}
                    </td>
                    <td style={tableCellStyle}>
                      {/* Example action buttons */}
                      <button
                        onClick={() => alert(`Viewing details for booking ${id}`)}
                        style={actionButtonStyle}
                        aria-label={`View details for booking ${id}`}
                      >
                        View
                      </button>
                      {status === 'Pending' && (
                        <button
                          onClick={() => alert(`Canceling booking ${id}`)}
                          style={{ ...actionButtonStyle, backgroundColor: '#cc4400' }}
                          aria-label={`Cancel booking ${id}`}
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        {/* Tips & Resources box */}
        <br />
        <section
          aria-label="Tips and resources"
          style={{
            backgroundColor: '#fff3e0',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h2 style={{ color: '#b75c00', marginBottom: '12px', textAlign: 'center' }}>
            Tips & Resources
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#5a391f', fontSize: '1rem' }}>
            <li>Always update your pet profiles with health and behavior details.</li>
            <li>Keep your calendar availability current to avoid booking conflicts.</li>
            <li>Communicate early and clearly with adopters or hosts through messages.</li>
            <li>Regularly check vaccination and medical schedules to keep pets healthy.</li>
            <li>Refer to our <Link href="/resources" style={{ color: '#cc4400' }}>Resource Center</Link> for more advice.</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: '#f0f0f0',
          padding: '30px 20px',
          marginTop: '50px',
          textAlign: 'center',
          color: '#666',
          fontFamily: 'Arial, sans-serif',
        }}
        aria-label="Site Footer"
      >
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Stay Connected</p>
          <div style={{ marginBottom: '10px' }}>
            <a href="#" aria-label="Facebook" style={{ marginRight: '10px' }}>
              Facebook
            </a>
            <a href="#" aria-label="Instagram" style={{ marginRight: '10px' }}>
              Instagram
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
          <p style={{ marginTop: '20px' }}>© 2025 Furlink. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

// Styles
const actionCardStyle = {
  backgroundColor: '#cc4400',
  color: '#fff',
  padding: '16px 24px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontWeight: 'bold',
  minWidth: '160px',
  textAlign: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  transition: 'background-color 0.3s ease',
  userSelect: 'none',
  cursor: 'pointer',
};

const tableHeaderStyle = {
  padding: '12px 10px',
  borderBottom: '2px solid #cc4400',
  fontWeight: '700',
};

const tableCellStyle = {
  padding: '10px',
  verticalAlign: 'middle',
};

const actionButtonStyle = {
  backgroundColor: '#0066cc',
  border: 'none',
  color: 'white',
  padding: '6px 12px',
  marginRight: '8px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  userSelect: 'none',
};

const editProfileButtonStyle = {
  marginTop: '12px',
  display: 'inline-block',
  backgroundColor: '#cc4400',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default DashboardPage;