import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Volume1,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
  ListMusic
} from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayer } from '../hooks/usePlayer';

const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    volume,
    togglePlay,
    handleNext,
    handlePrevious,
    seekTo,
    setVolume,
    formatTime,
  } = usePlayer();

  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const progressPercent = (currentTime / currentTrack.duration) * 100;

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seekTo(percent * currentTrack.duration);
  };

  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-spotify-dark border-t border-gray-200 dark:border-spotify-light px-4 py-3 z-50 lg:left-64"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3 min-w-0">
          <motion.img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-14 h-14 rounded-md object-cover shadow-md hidden sm:block"
            animate={{ rotate: isPlaying ? 0 : 0 }}
            whileHover={{ scale: 1.05 }}
          />
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base">
              {currentTrack.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-spotify-gray truncate">
              {currentTrack.artist}
            </p>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`ml-2 transition-colors ${isLiked ? 'text-spotify-green' : 'text-gray-400 hover:text-white'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4 sm:gap-6 mb-2">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`hidden sm:block transition-colors ${isShuffle ? 'text-spotify-green' : 'text-gray-400 hover:text-white'}`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            
            <button
              onClick={handlePrevious}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-black fill-current" />
              ) : (
                <Play className="w-5 h-5 text-black fill-current ml-0.5" />
              )}
            </motion.button>

            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`hidden sm:block transition-colors ${isRepeat ? 'text-spotify-green' : 'text-gray-400 hover:text-white'}`}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center gap-2 text-xs text-gray-400">
            <span className="hidden sm:inline w-10 text-right">{formatTime(currentTime)}</span>
            <div
              className="flex-1 h-1 bg-gray-300 dark:bg-spotify-lighter rounded-full cursor-pointer group relative"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-spotify-green rounded-full relative"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md" />
              </motion.div>
            </div>
            <span className="hidden sm:inline w-10">{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center justify-end gap-2 w-1/3">
          <ListMusic className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer hidden sm:block" />
          
          <button
            onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : volume < 0.5 ? (
              <Volume1 className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          
          <div className="w-20 sm:w-24 hidden sm:block group">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-gray-300 dark:bg-spotify-lighter rounded-lg appearance-none cursor-pointer accent-spotify-green"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;