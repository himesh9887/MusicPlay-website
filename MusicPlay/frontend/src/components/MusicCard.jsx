import React from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayer } from '../hooks/usePlayer';

const MusicCard = ({ track, index = 0 }) => {
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  const isCurrentTrack = currentTrack?.id === track.id;
  const isPlayingThis = isCurrentTrack && isPlaying;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gray-100 dark:bg-spotify-light rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-spotify-lighter transition-all duration-300 cursor-pointer"
      onClick={() => playTrack(track)}
    >
      {/* Album Cover */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-md shadow-lg">
        <img
          src={track.cover}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Play Button Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlayingThis ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-xl hover:brightness-110 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              playTrack(track);
            }}
          >
            {isPlayingThis ? (
              <Pause className="w-6 h-6 text-black fill-current" />
            ) : (
              <Play className="w-6 h-6 text-black fill-current ml-1" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Track Info */}
      <h3 className="font-bold text-gray-900 dark:text-white truncate mb-1 group-hover:text-spotify-green transition-colors">
        {track.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-spotify-gray truncate">
        {track.artist}
      </p>
    </motion.div>
  );
};

export default MusicCard;