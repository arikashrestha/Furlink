// app/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

// Icon Components
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9 8s9 3.582 9 8z"/>
  </svg>
);

const AddIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
);

const ExploreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'PetRescueNepal',
        avatar: '🐕',
        verified: true
      },
      image: 'golden-retriever',
      location: 'Kathmandu',
      description: 'Meet Max! 2-year-old Golden Retriever looking for a temporary home while owner is abroad. Great with kids! 🐕 #Furlink #PetHosting',
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
        avatar: '🐱',
        verified: false
      },
      image: 'siamese-cat',
      location: 'Pokhara',
      description: 'Whiskers needs a foster home for 3 weeks. Very gentle and litter-trained. DM if interested! 😺 #FosterCare',
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
        avatar: '🐶',
        verified: true
      },
      image: 'puppy',
      location: 'Lalitpur',
      description: 'This little guy is up for adoption! 4 months old, vaccinated and ready for his forever home. Apply through Furlink! 🐶 #AdoptDontShop',
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

  const stories = [
    { id: 1, username: 'Your Story', avatar: '📱', isLive: false },
    { id: 2, username: 'PetRescue', avatar: '🐕', isLive: true },
    { id: 3, username: 'CatLover', avatar: '🐱', isLive: false },
    { id: 4, username: 'HappyPaws', avatar: '🐶', isLive: false },
    { id: 5, username: 'DogDad', avatar: '👨', isLive: true },
    { id: 6, username: 'KittyMom', avatar: '👩', isLive: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#cc4400] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-[#cc4400] hidden sm:block">Furlink</span>
            </Link>
          </div>

          <div className="flex-1 max-w-xs mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#cc4400]"
              />
              <svg className="w-4 h-4 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <Link href="/" className={`p-2 ${activeTab === 'home' ? 'text-[#cc4400]' : 'text-gray-600'}`}>
              <HomeIcon />
            </Link>
            <Link href="/messages" className="p-2 text-gray-600">
              <MessageIcon />
            </Link>
            <Link href="/add" className="p-2 text-gray-600">
              <AddIcon />
            </Link>
            <Link href="/explore" className="p-2 text-gray-600">
              <ExploreIcon />
            </Link>
            <Link href="/notifications" className="p-2 text-gray-600">
              <HeartIcon />
            </Link>
            <Link href="/profile" className="p-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed */}
          <div className="lg:col-span-2">
            {/* Stories */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {stories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center space-y-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-2 border-[#cc4400] p-0.5">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl">{story.avatar}</span>
                        </div>
                      </div>
                      {story.isLive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-1 rounded text-xs">
                          Live
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-600">{story.username}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            {posts.map(post => (
              <div key={post.id} className="bg-white border border-gray-300 rounded-lg mb-6">
                {/* Post Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm">{post.user.avatar}</span>
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
                  <button className="text-gray-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                </div>

                {/* Post Image */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl">
                    {post.image.includes('dog') ? '🐕' : post.image.includes('cat') ? '🐱' : '🐶'}
                  </span>
                </div>

                {/* Post Actions */}
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <div className="flex space-x-4">
                      <button onClick={() => toggleLike(post.id)} className="hover:opacity-70">
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
                      <button className="hover:opacity-70">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9 8s9 3.582 9 8z"/>
                        </svg>
                      </button>
                      <button className="hover:opacity-70">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                        </svg>
                      </button>
                    </div>
                    <button onClick={() => toggleSave(post.id)} className="hover:opacity-70">
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
                  <p className="text-sm mt-2">
                    <span className="font-semibold mr-2">{post.user.name}</span>
                    {post.description}
                  </p>
                 