import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MusicCard from '../components/MusicCard';

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
    artist: 'Beyonce',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 210,
  },
  {
    id: '3',
    title: "Harry's House",
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
    <div className="min-h-screen bg-gradient-to-b from-spotify-light/50 to-spotify-dark pb-44 lg:pb-32">
      <div className="relative max-h-[520px] min-h-[320px] overflow-hidden bg-gradient-to-b from-spotify-green/30 to-spotify-dark h-[54vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-white/80 sm:text-sm">
              Featured Playlist
            </span>
            <h1 className="mb-3 text-4xl font-bold text-white sm:text-5xl md:mb-4 md:text-7xl">
              Discover Weekly
            </h1>
            <p className="mb-5 max-w-xl text-sm text-white/80 sm:text-base md:mb-6 md:text-lg">
              Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-spotify w-full text-base sm:w-auto sm:text-lg"
            >
              Play Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-8 flex gap-2 overflow-x-auto scrollbar-hide sm:gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all sm:px-6 ${
                activeFilter === filter
                  ? 'bg-spotify-green text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <section className="mb-10 md:mb-12">
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Trending Albums</h2>
            <button className="hidden text-sm font-bold uppercase tracking-wider text-spotify-gray transition-colors hover:text-white sm:block">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {trendingAlbums.map((album, index) => (
              <MusicCard key={album.id} track={album} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-10 md:mb-12">
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Recommended for You</h2>
            <button className="hidden text-sm font-bold uppercase tracking-wider text-spotify-gray transition-colors hover:text-white sm:block">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {recommendedMusic.map((track, index) => (
              <MusicCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Recently Played</h2>
            <button className="hidden text-sm font-bold uppercase tracking-wider text-spotify-gray transition-colors hover:text-white sm:block">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
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
