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
    <div className="min-h-screen bg-gradient-to-b from-spotify-light/30 to-spotify-dark pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg sm:h-20 sm:w-20">
              <Heart className="h-8 w-8 fill-current text-white sm:h-10 sm:w-10" />
            </div>
            <div>
              <h1 className="mb-1 text-3xl font-bold text-white sm:text-4xl">Your Library</h1>
              <p className="text-sm text-spotify-gray sm:text-base">3,247 liked songs • 24 playlists</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-spotify-green px-6 py-3 font-bold text-white transition-all hover:brightness-110 sm:w-auto"
          >
            <Plus className="h-5 w-5" />
            Create Playlist
          </motion.button>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
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
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-5 sm:p-8"
          >
            <div className="relative z-10 max-w-xl">
              <div className="mb-4 flex items-end gap-3">
                <Heart className="h-7 w-7 fill-current text-white sm:h-8 sm:w-8" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/80 sm:text-sm">
                  Playlist
                </span>
              </div>
              <h2 className="mb-2 text-3xl font-bold text-white sm:text-5xl">Liked Songs</h2>
              <p className="mb-6 text-sm text-white/80 sm:text-base">3,247 songs</p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green shadow-lg transition-all hover:brightness-110 sm:h-14 sm:w-14"
              >
                <Play className="ml-0.5 h-5 w-5 fill-current text-black sm:ml-1 sm:h-6 sm:w-6" />
              </motion.button>
            </div>
            <div className="absolute bottom-0 right-0 hidden translate-x-1/4 translate-y-1/4 opacity-20 sm:block">
              <Heart className="h-64 w-64 fill-current text-white" />
            </div>
          </motion.div>
        </div>

        <section className="mb-10 md:mb-12">
          <h3 className="mb-4 text-xl font-bold text-white">Your Playlists</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {savedPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-10 md:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-white">Created by You</h3>
            <button className="hidden text-sm font-bold uppercase tracking-wider text-spotify-gray hover:text-white sm:block">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {myPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-bold text-white">Recently Played</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
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
