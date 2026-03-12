import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Heart, Play } from 'lucide-react';
import PlaylistCard from '../components/PlaylistCard';

const savedPlaylists = [
  {
    id: '1',
    name: 'Liked Songs',
    description: '3,247 liked songs',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'On Repeat',
    description: 'Songs you love right now',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Release Radar',
    description: 'Catch up on the latest releases',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
  },
];

const myPlaylists = [
  {
    id: '4',
    name: 'Workout Mix 2024',
    description: 'By You • 45 songs',
    cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Late Night Drive',
    description: 'By You • 28 songs',
    cover: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Focus Flow',
    description: 'By You • 62 songs',
    cover: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&h=400&fit=crop',
  },
];

const recentlyPlayed = [
  { id: '7', name: 'Daily Mix 1', description: 'Made for you', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' },
  { id: '8', name: 'Discover Weekly', description: 'Made for you', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop' },
  { id: '9', name: 'Your Top Songs 2023', description: 'Made for you', cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop' },
];

const Library = () => {
  const [activeTab, setActiveTab] = useState('playlists');
  const tabs = ['Playlists', 'Podcasts', 'Artists', 'Albums'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-light/30 to-spotify-dark pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">Your Library</h1>
              <p className="text-spotify-gray">3,247 liked songs • 24 playlists</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-spotify-green text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Playlist
          </motion.button>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.toLowerCase()
                  ? 'bg-spotify-green text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 sm:p-8 cursor-pointer group"
          >
            <div className="relative z-10">
              <div className="flex items-end gap-4 mb-4">
                <Heart className="w-8 h-8 text-white fill-current" />
                <span className="text-white/80 text-sm font-medium">Playlist</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">Liked Songs</h2>
              <p className="text-white/80 mb-6">3,247 songs</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
              >
                <Play className="w-6 h-6 text-black fill-current ml-1" />
              </motion.button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
              <Heart className="w-64 h-64 text-white fill-current" />
            </div>
          </motion.div>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Your Playlists</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {savedPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Created by You</h3>
            <button className="text-spotify-gray hover:text-white text-sm font-bold uppercase tracking-wider">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {myPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-4">Recently Played</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recentlyPlayed.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Library;
