import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MusicCard } from '../components/MusicCard';
import { usePlayer } from '../hooks/usePlayer';

// Mock data for different sections
const trendingAlbums = [
  {
    id: '1',
    title: 'Midnights',
    artist: 'Taylor Swift',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop',
    duration: 240,
  },
  {
    id: '2',
    title: 'Renaissance',
    artist: 'Beyoncé',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 210,
  },
  {
    id: '3',
    title: 'Harry\'s House',
    artist: 'Harry Styles',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 180,
  },
  {
    id: '4',
    title: 'Special',
    artist: 'Lizzo',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    duration: 195,
  },
  {
    id: '5',
    title: 'Un Verano Sin Ti',
    artist: 'Bad Bunny',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    duration: 225,
  },
];

const recommendedMusic = [
  {
    id: '6',
    title: 'As It Was',
    artist: 'Harry Styles',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    duration: 167,
  },
  {
    id: '7',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    duration: 238,
  },
  {
    id: '8',
    title: 'Stay',
    artist: 'Kid LAROI & Bieber',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    duration: 141,
  },
  {
    id: '9',
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    duration: 200,
  },
  {
    id: '10',
    title: 'About Damn Time',
    artist: 'Lizzo',
    cover: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop',
    duration: 192,
  },
];

const recentlyPlayed = [
  {
    id: '11',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    duration: 200,
  },
  {
    id: '12',
    title: 'Levitating',
    artist: 'Dua Lipa',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 203,
  },
  {
    id: '13',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 178,
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Music', 'Podcasts'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-light/50 to-spotify-dark pb-32">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-b from-spotify-green/30 to-spotify-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-white/80 mb-2 block">
              Featured Playlist
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Discover Weekly
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-xl">
              Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-spotify text-lg px-8 py-3"
            >
              Play Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-spotify-green text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Trending Albums */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Trending Albums</h2>
            <button className="text-spotify-gray hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {trendingAlbums.map((album, index) => (
              <MusicCard key={album.id} track={album} index={index} />
            ))}
          </div>
        </section>

        {/* Recommended Music */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recommended for You</h2>
            <button className="text-spotify-gray hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recommendedMusic.map((track, index) => (
              <MusicCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recently Played</h2>
            <button className="text-spotify-gray hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recentlyPlayed.map((track, index) => (
              <MusicCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;