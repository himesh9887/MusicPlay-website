import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchBar } from '../components/SearchBar';
import { MusicCard } from '../components/MusicCard';
import { Disc, Mic2, Music } from 'lucide-react';

// Mock search data
const mockArtists = [
  { id: '1', name: 'The Weeknd', image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=200&h=200&fit=crop', genre: 'R&B' },
  { id: '2', name: 'Taylor Swift', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop', genre: 'Pop' },
  { id: '3', name: 'Drake', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop', genre: 'Hip Hop' },
  { id: '4', name: 'Billie Eilish', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop', genre: 'Alternative' },
];

const mockAlbums = [
  { id: '1', title: 'After Hours', artist: 'The Weeknd', cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop', year: '2020' },
  { id: '2', title: 'Midnights', artist: 'Taylor Swift', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', year: '2022' },
  { id: '3', title: 'Certified Lover Boy', artist: 'Drake', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop', year: '2021' },
  { id: '4', title: 'Happier Than Ever', artist: 'Billie Eilish', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop', year: '2021' },
];

const mockTracks = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop', duration: 200 },
  { id: '2', title: 'Anti-Hero', artist: 'Taylor Swift', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', duration: 200 },
  { id: '3', title: 'Way 2 Sexy', artist: 'Drake', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop', duration: 240 },
  { id: '5', title: 'Therefore I Am', artist: 'Billie Eilish', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop', duration: 174 },
  { id: '6', title: 'Save Your Tears', artist: 'The Weeknd', cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop', duration: 215 },
];

const genres = [
  { name: 'Pop', color: 'from-pink-500 to-rose-500' },
  { name: 'Hip Hop', color: 'from-orange-500 to-red-500' },
  { name: 'Rock', color: 'from-red-600 to-red-800' },
  { name: 'Electronic', color: 'from-cyan-500 to-blue-500' },
  { name: 'R&B', color: 'from-purple-500 to-indigo-500' },
  { name: 'Jazz', color: 'from-yellow-500 to-orange-500' },
  { name: 'Classical', color: 'from-emerald-500 to-teal-500' },
  { name: 'Country', color: 'from-amber-500 to-yellow-600' },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState('all');

  const hasResults = query && (mockTracks.length > 0 || mockArtists.length > 0 || mockAlbums.length > 0);

  return (
    <div className="min-h-screen bg-spotify-dark pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Search</h1>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {query ? (
          <>
            {/* Search Results Tabs */}
            <div className="flex gap-4 mb-8 border-b border-spotify-light pb-4">
              {['all', 'songs', 'artists', 'albums'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-spotify-green border-b-2 border-spotify-green pb-4 -mb-4.5'
                      : 'text-spotify-gray hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Results */}
            {(activeTab === 'all' || activeTab === 'songs') && (
              <section className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4">Top Results</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {mockTracks.slice(0, 5).map((track, index) => (
                    <MusicCard key={track.id} track={track} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* Artists */}
            {(activeTab === 'all' || activeTab === 'artists') && (
              <section className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4">Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {mockArtists.map((artist, index) => (
                    <motion.div
                      key={artist.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="relative mb-3">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full aspect-square object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Mic2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-1">{artist.name}</h3>
                      <p className="text-sm text-spotify-gray">{artist.genre}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Albums */}
            {(activeTab === 'all' || activeTab === 'albums') && (
              <section className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4">Albums</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {mockAlbums.map((album, index) => (
                    <motion.div
                      key={album.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-square mb-3 overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={album.cover}
                          alt={album.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Disc className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-white truncate mb-1">{album.title}</h3>
                      <p className="text-sm text-spotify-gray">{album.artist} • {album.year}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          /* Browse All Categories */
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative h-40 rounded-lg overflow-hidden cursor-pointer bg-gradient-to-br ${genre.color} p-4`}
                >
                  <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                  <Music className="absolute -bottom-2 -right-2 w-24 h-24 text-white/20 rotate-12" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;