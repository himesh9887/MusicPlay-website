import React, { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const activeQuery = searchParams.get('q') || '';

  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery(activeQuery);
      return;
    }

    setQuery('');
  }, [activeQuery, location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const clearSearch = () => {
    setQuery('');
    if (location.pathname === '/search') {
      navigate('/search');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <motion.div
        animate={{
          scale: isFocused ? 1.01 : 1,
          boxShadow: isFocused ? '0 16px 36px rgba(0,0,0,0.18)' : 'none',
        }}
        className="relative overflow-hidden rounded-full border border-white/8 bg-[#242424]"
      >
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="What do you want to listen to?"
          className="w-full bg-transparent py-3 pl-12 pr-10 text-[0.96rem] text-white placeholder:text-white/42 focus:outline-none"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-white/8"
            >
              <X className="h-4 w-4 text-white/55" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </form>
  );
};

export default SearchBar;
