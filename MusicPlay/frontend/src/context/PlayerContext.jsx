import React, { createContext, useEffect, useRef, useState } from 'react';
import { playerTracks } from '../data/musicData';

export const PlayerContext = createContext(undefined);

export const PlayerProvider = ({ children }) => {
  const [playlist] = useState(playerTracks);
  const [currentTrack, setCurrentTrack] = useState(playerTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressInterval = useRef(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setCurrentTrack(playlist[nextIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setCurrentTrack(playlist[prevIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(progressInterval.current);
      return undefined;
    }

    progressInterval.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= currentTrack.duration) {
          const nextIndex = (currentIndex + 1) % playlist.length;
          setCurrentIndex(nextIndex);
          setCurrentTrack(playlist[nextIndex]);
          return 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(progressInterval.current);
  }, [currentIndex, currentTrack, isPlaying, playlist]);

  const playTrack = (track) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
      return;
    }

    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);

    const index = playlist.findIndex((item) => item.id === track.id);
    setCurrentIndex(index >= 0 ? index : 0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const seekTo = (time) => {
    setCurrentTime(Math.max(0, Math.min(time, currentTrack.duration)));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        volume,
        playlist,
        playTrack,
        togglePlay,
        handleNext,
        handlePrevious,
        seekTo,
        setVolume,
        formatTime,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
