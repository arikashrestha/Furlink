// app/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'PetRescueNepal',
        avatar: '/img/avatars/rescue.jpg',
        verified: true
      },
      image: '/img/pets/dog1.jpg',
      location: 'Kathmandu',
      description: 'Meet Max! 2-year-old Golden Retriever looking for a temporary home while owner is abroad. Great with kids! #Furlink #PetHosting',
      likes: 142,
      comments: 23,
      timestamp: '2 hours ago',
      isLiked: false,
      isSaved: false
    },
    {
      id: 2,
      user: {
        name: 'CatLover',
        avatar: '/img/avatars/catlover.jpg',
        verified: false
      },
      image: '/img/pets/cat1.jpg',
      location: 'Pokhara',
      description: 'Whiskers needs a foster home for 3 weeks. Very gentle and litter-trained. DM if interested! #FosterCare',
      likes: 89,
      comments: 12,
      timestamp: '5 hours ago',
      isLiked: true,
      isSaved: true
    },
    {
      id: 3,
      user: {
        name: 'HappyPaws',
        avatar: '/img/avatars/happypaws.jpg',
        verified: true
      },
      image: '/img/pets/puppy.jpg',
      location: 'Lalitpur',
      description: 'This little guy is up for adoption! 4 months old, vaccinated and ready for his forever home. Apply through Furlink! #AdoptDontShop',
      likes: 256,
      comments: 42,
      timestamp: '1 day ago',
      isLiked: false,
      isSaved: false
    }
  ]);

  const toggleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const toggleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isSaved: !post.isSaved
        };
      }
      return post;
    }));
  };

  return (
    <div className="max-w-lg mx-auto bg-[#fff4e6] min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#fff4e6] border-b border-[#ddd] px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/img/banner-dogcat.png"
            alt="Furlink logo"
            width={40}
            height={32}
            className="mr-2"
          />
          <h1 className="text-xl font-bold text-[#cc4400]">Furlink</h1>
        </div>
        <div className="flex space-x-4">
          <Link href="/notifications">
            <HeartIcon filled={false} />
          </Link>
          <Link href="/messages">
            <MessageIcon />
          </Link>
        </div>
      </header>

      {/* Stories */}
      <div className="bg-white px-4 py-3 border-b border-[#ddd] overflow-x-auto">
        <div className="flex space-x-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <div className="w-16 h-16 rounded-full border-2 border-[#cc4400] p-0.5">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src={`/img/avatars/user${i+1}.jpg`}
                    width={64}
                    height={64}
                    alt="User"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-xs">User{i+1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="pb-16">
        {posts.map(post => (
          <div key={post.id} className="bg-white border border-[#ddd] mb-6">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ddd]">
                  <Image
                    src={post.user.avatar}
                    width={32}
                    height={32}
                    alt={post.user.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold text-sm">{post.user.name}</span>
                    {post.user.verified && (
                      <svg className="w-3 h-3 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{post.location}</span>
                </div>
              </div>
              <button>
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>

            {/* Post Image */}
            <div className="relative w-full aspect-square bg-gray-100">
              <Image
                src={post.image}
                fill
                alt="Pet"
                className="object-cover"
                priority
              />
            </div>

            {/* Post Actions */}
            <div className="p-3">
              <div className="flex justify-between mb-2">
                <div className="flex space-x-4">
                  <button onClick={() => toggleLike(post.id)}>
                    {post.isLiked ? (
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    )}
                  </button>
                  <button>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </button>
                  <button>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                  </button>
                </div>
                <button onClick={() => toggleSave(post.id)}>
                  {post.isSaved ? (
                    <svg className="w-6 h-6 text-[#cc4400]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>
                  )}
                </button>
              </div>

              <p className="font-semibold text-sm">{post.likes} likes</p>
              <p className="text-sm mt-1">
                <span className="font-semibold">{post.user.name}</span> {post.description}
              </p>
              <button className="text-gray-500 text-xs mt-1">View all {post.comments} comments</button>
              <p className="text-gray-400 text-xs mt-1">{post.timestamp}</p>
            </div>

            {/* Add Comment */}
            <div className="border-t border-[#ddd] p-3 flex items-center">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 text-sm focus:outline-none"
              />
              <button className="text-[#cc4400] font-semibold text-sm ml-2">Post</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ddd] flex justify-around py-3 max-w-lg mx-auto">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`p-2 ${activeTab === 'home' ? 'text-[#cc4400]' : 'text-gray-500'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </button>
        <button 
          onClick={() => setActiveTab('search')} 
          className={`p-2 ${activeTab === 'search' ? 'text-[#cc4400]' : 'text-gray-500'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
        <button 
          onClick={() => setActiveTab('add')} 
          className={`p-2 ${activeTab === 'add' ? 'text-[#cc4400]' : 'text-gray-500'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
          </svg>
        </button>
        <button 
          onClick={() => setActiveTab('activity')} 
          className={`p-2 ${activeTab === 'activity' ? 'text-[#cc4400]' : 'text-gray-500'}`}
        >
          <HeartIcon filled={activeTab === 'activity'} />
        </button>
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`p-2 ${activeTab === 'profile' ? 'text-[#cc4400]' : 'text-gray-500'}`}
        >
          <div className="w-6 h-6 rounded-full overflow-hidden border border-[#ddd]">
            <Image
              src="/img/avatars/profile.jpg"
              width={24}
              height={24}
              alt="Profile"
              className="object-cover"
            />
          </div>
        </button>
      </nav>
    </div>
  );
};

// Icon Components
const HeartIcon = ({ filled }) => (
  <svg className="w-6 h-6" fill={filled ? '#cc4400' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

export default HomePage;