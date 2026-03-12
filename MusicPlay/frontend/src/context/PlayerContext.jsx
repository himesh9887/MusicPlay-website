import React, { createContext, useEffect, useRef, useState } from 'react';

const mockTracks = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    duration: 200,
    url: '#',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 203,
    url: '#',
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    duration: 141,
    url: '#',
  },
  {
    id: '4',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 178,
    url: '#',
  },
  {
    id: '5',
    title: 'Montero',
    artist: 'Lil Nas X',
    album: 'Montero',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    duration: 137,
    url: '#',
  },
];

export const PlayerContext = createContext(undefined);

export const PlayerProvider = ({ children }) => {
  const [playlist] = useState(mockTracks);
  const [currentTrack, setCurrentTrack] = useState(mockTracks[0]);
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
