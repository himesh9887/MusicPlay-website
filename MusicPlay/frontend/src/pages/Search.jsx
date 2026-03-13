import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Disc, Mic2, Music } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import MusicCard from '../components/MusicCard';

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

  return (
    <div className="min-h-screen bg-spotify-dark pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-5 text-2xl font-bold text-white sm:mb-6 sm:text-3xl">Search</h1>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {query ? (
          <>
            <div className="mb-8 flex gap-3 overflow-x-auto border-b border-spotify-light pb-4 scrollbar-hide">
              {['all', 'songs', 'artists', 'albums'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize whitespace-nowrap font-medium transition-colors ${
                    activeTab === tab
                      ? 'border-b-2 border-spotify-green pb-4 -mb-4 text-spotify-green'
                      : 'text-spotify-gray hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {(activeTab === 'all' || activeTab === 'songs') && (
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">Top Results</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                  {mockTracks.slice(0, 5).map((track, index) => (
                    <MusicCard key={track.id} track={track} index={index} />
                  ))}
                </div>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'artists') && (
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">Artists</h2>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-6">
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
                          className="aspect-square w-full rounded-full object-cover shadow-lg transition-shadow group-hover:shadow-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <Mic2 className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <h3 className="mb-1 truncate text-sm font-bold text-white sm:text-base">{artist.name}</h3>
                      <p className="text-xs text-spotify-gray sm:text-sm">{artist.genre}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'albums') && (
              <section className="mb-10 md:mb-12">
                <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">Albums</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                  {mockAlbums.map((album, index) => (
                    <motion.div
                      key={album.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={album.cover}
                          alt={album.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <Disc className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                        </div>
                      </div>
                      <h3 className="mb-1 truncate font-bold text-white">{album.title}</h3>
                      <p className="text-xs text-spotify-gray sm:text-sm">{album.artist} • {album.year}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <div>
            <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">Browse all</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative h-32 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br p-4 sm:h-40 ${genre.color}`}
                >
                  <h3 className="text-lg font-bold text-white sm:text-xl">{genre.name}</h3>
                  <Music className="absolute -bottom-2 -right-2 h-20 w-20 rotate-12 text-white/20 sm:h-24 sm:w-24" />
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
