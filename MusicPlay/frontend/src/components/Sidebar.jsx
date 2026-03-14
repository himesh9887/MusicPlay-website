import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Library, label: 'Library', path: '/library' },
];

const mobileMenuItems = [
  ...menuItems,
  { icon: User, label: 'Profile', path: '/profile' },
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
        className="fixed left-0 top-16 hidden h-[calc(100vh-64px)] w-64 flex-col bg-black text-white lg:flex"
      >
        <div className="flex-1 space-y-8 overflow-y-auto px-4 py-6 scrollbar-hide">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-4 rounded-lg px-4 py-3 transition-all duration-200 group ${
                    isActive
                      ? 'bg-spotify-light text-white'
                      : 'text-spotify-gray hover:text-white'
                  }`
                }
              >
                <item.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span className="font-semibold">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-spotify-light pt-6">
            <h3 className="mb-4 px-4 text-xs font-bold uppercase tracking-wider text-spotify-gray">
              Playlists
            </h3>
            <nav className="space-y-2">
              {playlistItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="flex items-center space-x-4 rounded-lg px-4 py-3 text-spotify-gray transition-colors group hover:text-white"
                >
                  <div className={`rounded p-1 ${item.label === 'Liked Songs' ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-spotify-gray'}`}>
                    <item.icon className="h-5 w-5 text-white" />
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
                className="w-full truncate px-4 py-2 text-left text-sm text-spotify-gray transition-colors hover:text-white"
              >
                {playlist}
              </button>
            ))}
          </div>
        </div>
      </motion.aside>

      <nav
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-3 lg:hidden"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.9rem)' }}
      >
        <div className="pointer-events-auto grid w-full max-w-md grid-cols-4 gap-1.5 rounded-[30px] border border-white/10 bg-black/88 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {mobileMenuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex min-h-[64px] flex-col items-center justify-center rounded-2xl px-2 py-2.5 text-[11px] font-medium transition-colors ${
                  isActive
                    ? 'bg-spotify-green text-white shadow-lg shadow-spotify-green/20'
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
