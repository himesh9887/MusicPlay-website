import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Library, label: 'Library', path: '/library' },
];

const playlistItems = [
  { icon: PlusSquare, label: 'Create Playlist', path: '#' },
  { icon: Heart, label: 'Liked Songs', path: '#' },
];

const Sidebar = () => {
  return (
    <>
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="hidden lg:flex flex-col w-64 h-[calc(100vh-64px)] bg-black text-white fixed left-0 top-16"
      >
        <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto scrollbar-hide">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-spotify-light text-white'
                      : 'text-spotify-gray hover:text-white'
                  }`
                }
              >
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-spotify-light pt-6">
            <h3 className="px-4 text-xs font-bold text-spotify-gray uppercase tracking-wider mb-4">
              Playlists
            </h3>
            <nav className="space-y-2">
              {playlistItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="flex items-center space-x-4 px-4 py-3 rounded-lg text-spotify-gray hover:text-white transition-colors group"
                >
                  <div className={`p-1 rounded ${item.label === 'Liked Songs' ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-spotify-gray'}`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-1">
            {['Chill Vibes', 'Workout Mix', 'Focus Flow', 'Party Hits', 'Road Trip'].map((playlist) => (
              <button
                key={playlist}
                className="w-full text-left px-4 py-2 text-sm text-spotify-gray hover:text-white transition-colors truncate"
              >
                {playlist}
              </button>
            ))}
          </div>
        </div>
      </motion.aside>

      <nav
        className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.5rem)' }}
      >
        <div className="grid grid-cols-3 gap-1 px-2 pt-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center rounded-2xl px-2 py-2.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-spotify-light text-white'
                    : 'text-spotify-gray hover:text-white'
                }`
              }
            >
              <item.icon className="mb-1 h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
