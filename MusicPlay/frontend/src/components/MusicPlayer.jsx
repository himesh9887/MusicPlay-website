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
  ListMusic,
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

  if (!currentTrack) return null;

  const progressPercent = currentTrack.duration
    ? (currentTime / currentTrack.duration) * 100
    : 0;

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleProgressClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    seekTo(percent * currentTrack.duration);
  };

  return (
    <>
      <motion.div
        initial={{ y: 110 }}
        animate={{ y: 0 }}
        className="fixed left-3 right-3 z-[55] rounded-[1.4rem] border border-white/10 bg-black/90 p-3 text-white shadow-[0_28px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden"
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 5.8rem)' }}
      >
        <div className="mb-3 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-spotify-green"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="h-12 w-12 rounded-xl object-cover shadow-lg"
          />

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-semibold text-white">
              {currentTrack.title}
            </h4>
            <p className="truncate text-xs text-white/60">
              {currentTrack.artist}
            </p>
          </div>

          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-spotify-green text-black shadow-lg"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-current" />
            ) : (
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-white/12"
          >
            <SkipForward className="h-5 w-5 fill-current" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] text-white/45">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(currentTrack.duration)}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-gray-200 bg-white px-3 py-2 shadow-2xl dark:border-spotify-light dark:bg-spotify-dark lg:left-64 lg:block lg:px-4 lg:py-3"
      >
        <div className="max-w-screen-2xl items-center justify-between gap-4 md:flex">
          <div className="flex w-1/3 min-w-0 items-center gap-4">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="h-14 w-14 rounded-md object-cover shadow-md"
            />
            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                {currentTrack.title}
              </h4>
              <p className="truncate text-xs text-gray-500 dark:text-spotify-gray sm:text-sm">
                {currentTrack.artist}
              </p>
            </div>
            <button
              onClick={() => setIsLiked((prev) => !prev)}
              className={`ml-2 transition-colors ${isLiked ? 'text-spotify-green' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="flex w-1/3 flex-col items-center">
            <div className="mb-2 flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsShuffle((prev) => !prev)}
                className={`transition-colors ${isShuffle ? 'text-spotify-green' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                <Shuffle className="h-4 w-4" />
              </button>

              <button
                onClick={handlePrevious}
                className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <SkipBack className="h-5 w-5 fill-current" />
              </button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-spotify-green text-black shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-current" />
                ) : (
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                )}
              </motion.button>

              <button
                onClick={handleNext}
                className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <SkipForward className="h-5 w-5 fill-current" />
              </button>

              <button
                onClick={() => setIsRepeat((prev) => !prev)}
                className={`transition-colors ${isRepeat ? 'text-spotify-green' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                <Repeat className="h-4 w-4" />
              </button>
            </div>

            <div className="flex w-full items-center gap-2 text-xs text-gray-400">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <div
                className="group relative h-1 flex-1 cursor-pointer rounded-full bg-gray-300 dark:bg-spotify-lighter"
                onClick={handleProgressClick}
              >
                <div
                  className="relative h-full rounded-full bg-spotify-green"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <span className="w-10">{formatTime(currentTrack.duration)}</span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-end gap-2">
            <ListMusic className="hidden h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white lg:block" />

            <button
              onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
              className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              {volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : volume < 0.5 ? (
                <Volume1 className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>

            <div className="hidden w-24 group sm:block">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 accent-spotify-green dark:bg-spotify-lighter"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
