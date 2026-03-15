import React from 'react';
import CoverArt from '../components/CoverArt';
import ShelfCard from '../components/ShelfCard';
import { libraryPins, libraryPlaylists, recentListening } from '../data/musicData';
import { usePlayer } from '../hooks/usePlayer';

const Library = () => {
  const { playTrack } = usePlayer();

  return (
    <div className="min-h-screen px-4 pb-44 pt-6 md:px-6 md:pb-32 lg:px-8">
      <div className="w-full">
      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <h1 className="text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.8rem]">Your Library</h1>
          <p className="mt-1 max-w-2xl text-sm text-white/54 md:text-base">
            Pinned playlists, offline shelves, and your repeat zones.
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <button
            type="button"
            className="rounded-full border border-white/12 bg-[#1f1f1f] px-5 py-2.5 text-sm font-medium text-white"
          >
            Edit Library
          </button>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Pinned</h2>
        <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
          {libraryPins.map((item, index) => (
            <ShelfCard key={item.id} item={item} index={index} className="min-w-[10.7rem]" />
          ))}
        </div>
      </section>

      <section className="mt-9">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Playlists</h2>
          <span className="text-sm text-white/42">{libraryPlaylists.length} saved</span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {libraryPlaylists.map((item, index) => (
            <ShelfCard key={item.id} item={item} index={index} className="min-w-0" />
          ))}
        </div>
      </section>

      <section className="mt-9">
        <h2 className="mb-4 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">On repeat</h2>
        <div className="grid gap-3 xl:grid-cols-2">
          {recentListening.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => playTrack(item)}
              className="flex w-full items-center gap-3 rounded-[1.35rem] border border-white/8 bg-[#1a1a1a] p-3 text-left"
            >
              <CoverArt art={item.art} title={item.title} className="h-16 w-16 shrink-0 rounded-[1rem]" />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[1rem] font-semibold text-white">{item.title}</p>
                <p className="truncate text-sm text-white/58">{item.artist}</p>
              </div>

              <span className="text-sm text-white/42">
                {Math.floor(item.duration / 60)}:{String(item.duration % 60).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Library;
