import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ShelfCard from '../components/ShelfCard';
import { browseTiles, playerTracks, radioShelf, searchTags } from '../data/musicData';
import { usePlayer } from '../hooks/usePlayer';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();
  const { playTrack } = usePlayer();

  const searchPool = [...playerTracks, ...radioShelf];
  const filteredResults = query
    ? searchPool.filter((item) =>
        `${item.title} ${item.artist || ''} ${item.subtitle || ''}`.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="min-h-screen px-4 pb-44 pt-6 md:px-6 md:pb-32 lg:px-8">
      <div className="w-full">
      <div className="md:flex md:items-end md:justify-between md:gap-6">
        <div>
          <h1 className="text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.6rem]">Search</h1>
          <p className="mt-1 max-w-xl text-sm text-white/54 md:text-base">
            Find tracks, radio mixes, and nostalgic pockets fast.
          </p>
        </div>

        <div className="hidden md:block md:w-full md:max-w-xl">
          <SearchBar />
        </div>
      </div>

      <div className="mt-5 md:hidden">
        <SearchBar />
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {searchTags.map((tag) => (
          <span
            key={tag}
            className="shrink-0 rounded-full border border-white/10 bg-[#1f1f1f] px-4 py-2 text-sm text-white/78"
          >
            {tag}
          </span>
        ))}
      </div>

      {query ? (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.05em] text-white">
              Results for "{searchParams.get('q')}"
            </h2>
            <span className="text-sm text-white/42">{filteredResults.length} found</span>
          </div>

          {filteredResults.length ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filteredResults.map((item, index) => (
                <ShelfCard
                  key={`${item.id}-${index}`}
                  item={{
                    ...item,
                    caption: item.caption || 'Result',
                    subtitle: item.artist || item.subtitle,
                  }}
                  index={index}
                  className="min-w-0"
                  onSelect={item.duration ? playTrack : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-white/8 bg-[#1a1a1a] p-5">
              <p className="text-base font-medium text-white">No exact match yet.</p>
              <p className="mt-2 text-sm leading-6 text-white/58">
                Try simpler words like `90s`, `Kumar Sanu`, or `rain`.
              </p>
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="mt-8">
            <h2 className="mb-4 text-[1.5rem] font-semibold tracking-[-0.05em] text-white">Browse all</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {browseTiles.map((item, index) => (
                <ShelfCard
                  key={item.id}
                  item={{ ...item, caption: 'Browse' }}
                  index={index}
                  className="min-w-0"
                />
              ))}
            </div>
          </section>

          <section className="mt-9">
            <h2 className="mb-4 text-[1.5rem] font-semibold tracking-[-0.05em] text-white">Quick picks</h2>
            <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide xl:grid xl:grid-cols-5 xl:overflow-visible">
              {playerTracks.map((item, index) => (
                <ShelfCard
                  key={item.id}
                  item={{ ...item, caption: 'Track', subtitle: item.artist }}
                  index={index}
                  className="min-w-[10.7rem]"
                  onSelect={playTrack}
                />
              ))}
            </div>
          </section>
        </>
      )}
      </div>
    </div>
  );
};

export default Search;
