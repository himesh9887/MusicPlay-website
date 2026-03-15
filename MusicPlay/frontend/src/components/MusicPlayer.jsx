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
  Plus,
  Music2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayer } from '../hooks/usePlayer';
import CoverArt from './CoverArt';

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

  const progressPercent = currentTrack.duration ? (currentTime / currentTrack.duration) * 100 : 0;

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
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed inset-x-0 z-[68] flex justify-center px-3 md:hidden"
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 4.85rem)' }}
      >
        <div className="flex w-full max-w-[26.25rem] items-center gap-3 rounded-[1.15rem] bg-[#7b1035] px-3 py-2.5 text-white shadow-[0_22px_50px_rgba(0,0,0,0.38)]">
          <CoverArt art={currentTrack.art} title={currentTrack.title} className="h-12 w-12 shrink-0 rounded-[0.9rem]" />

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-[1.05rem] font-semibold leading-tight tracking-[-0.03em]">
              {currentTrack.title}
            </h4>
            <p className="truncate text-sm text-white/80">{currentTrack.artist}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsLiked((prev) => !prev)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isLiked ? 'bg-white/20 text-white' : 'text-white/90'
            }`}
            aria-label="Open device options"
          >
            <Music2 className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/90"
            aria-label="Add to queue"
          >
            <Plus className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7b1035]"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-white/8 bg-black/88 px-3 py-2 shadow-2xl backdrop-blur-xl md:block lg:left-72 lg:px-4 lg:py-3"
      >
        <div className="max-w-screen-2xl items-center justify-between gap-4 md:flex">
          <div className="flex w-1/3 min-w-0 items-center gap-4">
            <CoverArt art={currentTrack.art} title={currentTrack.title} className="h-14 w-14 rounded-[0.9rem]" />
            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-white sm:text-base">
                {currentTrack.title}
              </h4>
              <p className="truncate text-xs text-white/55 sm:text-sm">
                {currentTrack.artist}
              </p>
            </div>
            <button
              onClick={() => setIsLiked((prev) => !prev)}
              className={`ml-2 transition-colors ${
                isLiked ? 'text-spotify-green' : 'text-white/45 hover:text-white'
              }`}
            >
              <Music2 className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="flex w-1/3 flex-col items-center">
            <div className="mb-2 flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsShuffle((prev) => !prev)}
                className={`transition-colors ${isShuffle ? 'text-spotify-green' : 'text-white/45 hover:text-white'}`}
              >
                <Shuffle className="h-4 w-4" />
              </button>

              <button onClick={handlePrevious} className="text-white/45 transition-colors hover:text-white">
                <SkipBack className="h-5 w-5 fill-current" />
              </button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-spotify-green text-black shadow-lg"
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
              </motion.button>

              <button onClick={handleNext} className="text-white/45 transition-colors hover:text-white">
                <SkipForward className="h-5 w-5 fill-current" />
              </button>

              <button
                onClick={() => setIsRepeat((prev) => !prev)}
                className={`transition-colors ${isRepeat ? 'text-spotify-green' : 'text-white/45 hover:text-white'}`}
              >
                <Repeat className="h-4 w-4" />
              </button>
            </div>

            <div className="flex w-full items-center gap-2 text-xs text-white/45">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <div
                className="group relative h-1 flex-1 cursor-pointer rounded-full bg-white/15"
                onClick={handleProgressClick}
              >
                <div className="relative h-full rounded-full bg-spotify-green" style={{ width: `${progressPercent}%` }}>
                  <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <span className="w-10">{formatTime(currentTrack.duration)}</span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-end gap-2">
            <button
              onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
              className="text-white/45 transition-colors hover:text-white"
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
                className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-spotify-green"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
