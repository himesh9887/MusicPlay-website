import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Heart,
  Home,
  Library,
  Music2,
  Plus,
  Search,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const menuItems = [
  { icon: Home, label: 'Home', hint: 'Fresh from your loop', path: '/' },
  { icon: Search, label: 'Search', hint: 'Find artists and stations', path: '/search' },
  { icon: Library, label: 'Library', hint: 'Pinned, downloads, playlists', path: '/library' },
];

const mobileMenuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Library, label: 'Your Library', path: '/library' },
  { icon: Sparkles, label: 'Premium', path: '/premium' },
  { icon: Plus, label: 'Create', path: '/create' },
];

const libraryActions = [
  { icon: Plus, label: 'Create Playlist', path: '/create', tone: 'bg-white/14' },
  { icon: Heart, label: 'Liked Songs', path: '/library', tone: 'bg-gradient-to-br from-indigo-500 to-fuchsia-500' },
];

const shelves = [
  { name: 'Chill Vibes', meta: '18 tracks' },
  { name: 'Workout Mix', meta: '32 tracks' },
  { name: 'Focus Flow', meta: '24 tracks' },
  { name: 'Party Hits', meta: '41 tracks' },
  { name: 'Road Trip', meta: '29 tracks' },
];

const Sidebar = () => {
  const { user } = useAuth();
  const displayName = user?.fullName || user?.username || 'Music Lover';
  const initial = displayName.slice(0, 1).toUpperCase();

  return (
    <>
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/6 bg-[linear-gradient(180deg,#050505_0%,#0a0a0a_55%,#111111_100%)] text-white lg:flex"
      >
        <div className="flex-1 overflow-y-auto px-4 py-5 scrollbar-hide">
          <Link
            to="/"
            className="mb-4 flex items-center gap-3 rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-4 py-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-spotify-green shadow-[0_12px_30px_rgba(29,227,91,0.24)]">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold tracking-[-0.04em] text-white">Spotify</p>
              <p className="text-xs uppercase tracking-[0.22em] text-white/38">Desktop shell</p>
            </div>
          </Link>

          <section className="rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,_rgba(29,185,84,0.18),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.24)]">
            <div className="mb-3 flex items-center gap-3 rounded-[1.2rem] bg-black/18 px-3 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff612d] text-lg font-black text-black">
                {initial}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  Good Evening
                </p>
                <p className="truncate text-base font-semibold tracking-[-0.03em] text-white">
                  {displayName}
                </p>
              </div>
            </div>

            <nav className="space-y-1.5">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-[1.2rem] px-3 py-3 transition-all ${
                      isActive
                        ? 'bg-[#242424] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]'
                        : 'text-white/62 hover:bg-white/[0.05] hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                          isActive ? 'bg-white/8 text-white' : 'bg-black/18 text-white/72'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold tracking-[-0.02em]">{item.label}</p>
                        <p className="truncate text-xs text-white/42">{item.hint}</p>
                      </div>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </section>

          <section className="mt-4 rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                  Library
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                  Your zone
                </h2>
              </div>
              <Music2 className="h-5 w-5 text-white/36" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-black/18 px-3 py-2.5">
                <p className="text-lg font-semibold text-white">24</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">Playlists</p>
              </div>
              <div className="rounded-2xl bg-black/18 px-3 py-2.5">
                <p className="text-lg font-semibold text-white">247</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">Liked</p>
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
            <nav className="space-y-1.5">
              {libraryActions.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="flex items-center gap-3 rounded-[1.1rem] bg-black/18 px-3 py-3 text-white/86 transition-colors hover:bg-white/[0.05]"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.tone}`}>
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </section>

          <section className="mt-4 rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                  Shelves
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                  Your mixes
                </h2>
              </div>
              <button type="button" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/36">
                Sort
              </button>
            </div>

            <div className="space-y-1.5">
              {shelves.map((playlist) => (
                <button
                  key={playlist.name}
                  type="button"
                  className="flex w-full items-center justify-between rounded-[1rem] px-3 py-2.5 text-left transition-colors hover:bg-white/[0.05]"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-white/82">{playlist.name}</p>
                    <p className="text-xs text-white/36">{playlist.meta}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/24" />
                </button>
              ))}
            </div>
          </section>

          <section className="mt-4 rounded-[1.6rem] border border-emerald-500/18 bg-[linear-gradient(135deg,rgba(29,185,84,0.18),rgba(255,255,255,0.03))] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
              Mood Boost
            </p>
            <h2 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em] text-white">
              Clean up this evening queue in one tap.
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/62">
              Romantic, soft, and rain-heavy tracks are trending in your listening.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#19e35b] px-4 py-2.5 text-sm font-semibold text-black"
            >
              Open Mix
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </section>
        </div>
      </motion.aside>

      <nav
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-3 md:hidden"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.45rem)' }}
      >
        <div className="pointer-events-auto grid w-full max-w-[26.25rem] grid-cols-5 bg-black/86 px-2 pb-2 pt-3 backdrop-blur-2xl">
          {mobileMenuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-white/45'
                }`
              }
            >
              <item.icon className="h-6 w-6" />
              <span className="leading-none">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
