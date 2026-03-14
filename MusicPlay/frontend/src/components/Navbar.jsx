import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/search' },
  { label: 'Library', path: '/library' },
];

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);
  const showMobileSearch = isAuthenticated && location.pathname !== '/search';

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname, location.search]);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-[70] border-b border-gray-200 bg-white/95 backdrop-blur-xl dark:border-spotify-light dark:bg-spotify-dark/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-3 py-3 lg:h-16 lg:py-0">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-spotify-green shadow-lg shadow-spotify-green/20">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                Spotify
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-spotify-gray sm:hidden">
                Music all day
              </span>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 md:flex md:max-w-md lg:max-w-lg">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-spotify-light"
                >
                  <img
                    src={user?.avatar || 'https://via.placeholder.com/32'}
                    alt={user?.username}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white/60 dark:ring-white/10"
                  />
                  <div className="hidden min-w-0 text-left md:block">
                    <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-100">
                      {user?.fullName || user?.username}
                    </p>
                    <p className="truncate text-xs text-gray-500 dark:text-spotify-gray">
                      @{user?.username}
                    </p>
                  </div>
                  <ChevronDown className="hidden h-4 w-4 text-gray-500 md:block" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white py-1.5 shadow-2xl dark:border-spotify-lighter dark:bg-spotify-light"
                    >
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-spotify-lighter"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-spotify-lighter"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden items-center gap-4 sm:flex">
                <Link
                  to="/register"
                  className="font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="rounded-full bg-spotify-green px-5 py-2 font-bold text-white transition-transform hover:scale-105"
                >
                  Log in
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-2xl border border-gray-200/80 p-2 text-gray-700 transition-colors dark:border-white/10 dark:text-gray-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {showMobileSearch && (
          <div className="pb-3 md:hidden">
            <SearchBar />
          </div>
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 pb-4 pt-4 dark:border-spotify-light lg:hidden"
            >
              <div className="space-y-3">
                {isAuthenticated && (
                  <div className="rounded-3xl bg-gray-100/80 p-3.5 dark:bg-spotify-light/80">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src={user?.avatar || 'https://via.placeholder.com/40'}
                        alt={user?.username}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900 dark:text-white">
                          {user?.fullName || user?.username}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-spotify-gray">
                          @{user?.username}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/profile"
                        onClick={closeMobileMenu}
                        className="rounded-xl bg-white px-3 py-2 text-center text-sm font-medium text-gray-700 dark:bg-spotify-dark dark:text-white"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="rounded-xl bg-red-500/10 px-3 py-2 text-sm font-medium text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2.5 text-center text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-spotify-green text-white'
                            : 'bg-gray-100 text-gray-700 dark:bg-spotify-light dark:text-gray-200'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {!isAuthenticated && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="rounded-full bg-spotify-green py-2 text-center font-bold text-white"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/register"
                      onClick={closeMobileMenu}
                      className="rounded-full border border-gray-300 py-2 text-center font-bold text-gray-700 dark:border-gray-600 dark:text-gray-300"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
