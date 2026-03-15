import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, Disc3, Headphones, Play, Radio, Sparkles } from 'lucide-react';
import CoverArt from '../components/CoverArt';
import ShelfCard from '../components/ShelfCard';
import {
  homeAlbums,
  homeFilters,
  mobileQuickTiles,
  playerTracks,
  popularStations,
  radioShelf,
  recentListening,
  recommendedStations,
} from '../data/musicData';
import { useAuth } from '../hooks/useAuth';
import { usePlayer } from '../hooks/usePlayer';

const statusItems = ['Vo NR', '480 KB/s', '5G+', '52%'];
const desktopHeroChips = ['All', 'Music', 'Radio', 'Bollywood 90s'];

const formatDuration = (duration) =>
  `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, '0')}`;

const desktopQuickTiles = [
  {
    id: 'desk-main-ishq',
    title: 'Main Ishq Uska Radio',
    subtitle: 'Alka Yagnik, Javed Ali',
    art: playerTracks[1].art,
    track: playerTracks[1],
  },
  {
    id: 'desk-liked',
    title: 'Liked Songs',
    subtitle: '247 saved tracks',
    art: {
      ...radioShelf[1].art,
      displayTitle: 'LIKED\nSONGS',
      footer: '247 TRACKS',
    },
  },
  {
    id: 'desk-koyla',
    title: homeAlbums[1].title,
    subtitle: homeAlbums[1].subtitle,
    art: homeAlbums[1].art,
  },
  {
    id: 'desk-all-out',
    title: playerTracks[3].title,
    subtitle: playerTracks[3].artist,
    art: playerTracks[3].art,
    track: playerTracks[3],
  },
  {
    id: 'desk-two-good',
    title: radioShelf[1].title,
    subtitle: radioShelf[1].subtitle,
    art: radioShelf[1].art,
  },
  {
    id: 'desk-tip-tip',
    title: playerTracks[4].title,
    subtitle: playerTracks[4].artist,
    art: playerTracks[4].art,
    track: playerTracks[4],
  },
];

const desktopForYou = [
  {
    id: 'for-you-rain',
    title: 'Rain Window',
    subtitle: 'Soft duets, wet streets, and slow hooks.',
    art: playerTracks[4].art,
    track: playerTracks[4],
    badge: 'Made for you',
  },
  {
    id: 'for-you-soft',
    title: 'Soft Kumar Sanu',
    subtitle: 'Warm vocals and no-skips nostalgia.',
    art: homeAlbums[2].art,
    badge: 'Picked tonight',
  },
];

const desktopPopular = [...recommendedStations, ...popularStations];

const MobileQuickTile = ({ item, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect?.(item.track || item)}
    className={`flex w-full items-center gap-3 rounded-[1.1rem] bg-[#2a2a2a] p-2 text-left ${
      item.id === 'quick-udit' ? 'col-span-1' : ''
    }`}
  >
    <CoverArt art={item.art} title={item.title} className="h-[4.3rem] w-[4.3rem] shrink-0 rounded-[0.9rem]" />
    <div className="min-w-0">
      <p className="line-clamp-2 text-[0.95rem] font-semibold leading-tight tracking-[-0.03em] text-white">
        {item.title}
      </p>
    </div>
  </button>
);

const DesktopQuickTile = ({ item, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect?.(item.track || item)}
    className="group flex items-center gap-3 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-3 py-3 text-left transition-all hover:border-white/14 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
  >
    <CoverArt art={item.art} title={item.title} className="h-[4.8rem] w-[4.8rem] shrink-0 rounded-[1rem]" />
    <div className="min-w-0">
      <p className="line-clamp-2 text-[1rem] font-semibold leading-tight tracking-[-0.03em] text-white">
        {item.title}
      </p>
      <p className="mt-1 line-clamp-2 text-sm text-white/54">{item.subtitle}</p>
    </div>
    <div className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/18 text-white/44 transition-colors group-hover:bg-spotify-green group-hover:text-black xl:flex">
      <Play className="h-4 w-4 fill-current" />
    </div>
  </button>
);

const DesktopFeatureCard = ({ item, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect?.(item.track || item)}
    className="group rounded-[1.65rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-white/14 hover:shadow-[0_22px_45px_rgba(0,0,0,0.24)]"
  >
    <div className="mb-4 overflow-hidden rounded-[1.2rem]">
      <CoverArt art={item.art} title={item.title} className="aspect-[1.2/1] w-full rounded-[1.2rem]" />
    </div>
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spotify-green">{item.badge}</p>
    <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
    <p className="mt-2 text-sm leading-6 text-white/58">{item.subtitle}</p>
    <div className="mt-4 flex items-center justify-between rounded-[1rem] bg-black/18 px-3 py-2.5 text-sm text-white/56 transition-colors group-hover:bg-black/24">
      <span>Open this mix</span>
      <ArrowRight className="h-4 w-4 text-white/38" />
    </div>
  </button>
);

const DesktopSectionHeading = ({ eyebrow, title, description, action }) => (
  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spotify-green">{eyebrow}</p>
      <h2 className="mt-1 text-[1.7rem] font-semibold tracking-[-0.045em] text-white">{title}</h2>
      {description ? <p className="mt-2 text-sm leading-6 text-white/56">{description}</p> : null}
    </div>
    {action ? (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/46">
        {action}
      </span>
    ) : null}
  </div>
);

const DesktopHeroMetric = ({ icon: Icon, value, label, note }) => (
  <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6">
      <Icon className="h-4.5 w-4.5 text-spotify-green" />
    </div>
    <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-white">{value}</p>
    <p className="mt-1 text-sm font-medium text-white/78">{label}</p>
    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/34">{note}</p>
  </div>
);

const DesktopSpotlightCard = ({ item, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect?.(item)}
    className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(145deg,rgba(11,20,16,0.96),rgba(22,37,28,0.9)_58%,rgba(10,10,10,0.94)_100%)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-white/14 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
  >
    <div className="absolute -right-8 top-6 h-32 w-32 rounded-full bg-spotify-green/15 blur-3xl" />
    <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-amber-400/10 blur-3xl" />

    <div className="relative z-10">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
          Resume from queue
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-white/34">{formatDuration(item.duration)}</span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <CoverArt art={item.art} title={item.title} className="h-24 w-24 shrink-0 rounded-[1.2rem]" />
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spotify-green">{item.album}</p>
          <h3 className="mt-2 text-[1.55rem] font-semibold leading-tight tracking-[-0.05em] text-white">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-white/58">{item.artist}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {['Soft romance', 'Hindi 90s', 'No skips'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/18 px-3 py-1 text-[11px] font-medium text-white/64"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-[1.1rem] bg-black/18 px-4 py-3">
        <p className="max-w-[14rem] text-sm leading-6 text-white/56">
          Picks up exactly where your evening slowed down.
        </p>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-spotify-green text-black">
          <Play className="h-5 w-5 fill-current" />
        </div>
      </div>
    </div>
  </button>
);

const DesktopQueueRow = ({ item, index, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect?.(item)}
    className="flex w-full items-center gap-3 rounded-[1.15rem] border border-transparent bg-black/18 px-3 py-3 text-left transition-all hover:border-white/8 hover:bg-white/[0.04]"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/6 text-sm font-semibold text-white/46">
      {String(index + 1).padStart(2, '0')}
    </div>
    <CoverArt art={item.art} title={item.title} className="h-12 w-12 shrink-0 rounded-[0.95rem]" />
    <div className="min-w-0 flex-1">
      <p className="truncate font-medium text-white">{item.title}</p>
      <p className="truncate text-sm text-white/46">{item.artist}</p>
    </div>
    <span className="text-xs font-medium text-white/34">{formatDuration(item.duration)}</span>
  </button>
);

const Home = () => {
  const { playTrack } = usePlayer();
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('All');

  const mobileStations = activeFilter === 'Podcasts' ? popularStations : recommendedStations;
  const desktopName = user?.fullName || user?.username || 'Music Lover';
  const desktopTasteTags = [
    user?.favoriteGenre || 'Hindi 90s',
    user?.favoriteArtist || 'Kumar Sanu',
    'Soft romance',
    'Radio first',
  ];
  const desktopHeroStats = [
    { icon: Disc3, value: '247', label: 'liked tracks', note: 'always ready' },
    { icon: Radio, value: String(desktopPopular.length).padStart(2, '0'), label: 'radio stations', note: 'picked tonight' },
    { icon: Clock3, value: String(recentListening.length).padStart(2, '0'), label: 'recent loops', note: 'jump back fast' },
  ];

  return (
    <>
      <div className="min-h-screen px-4 pb-44 pt-5 md:hidden">
        <div className="mb-5 flex items-center justify-between text-sm font-semibold text-white">
          <span className="text-[1.82rem] tracking-[-0.05em]">8:44</span>
          <div className="flex items-center gap-2 text-[0.72rem] text-white/78">
            {statusItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <Link
            to="/profile"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ff612d] text-[1.9rem] font-black text-black"
          >
            H
          </Link>

          {homeFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full px-7 py-3 text-[1.05rem] font-medium transition-colors ${
                activeFilter === filter ? 'bg-[#19e35b] text-black' : 'bg-[#2b2b2b] text-white/88'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <section>
          <div className="grid grid-cols-2 gap-3">
            {mobileQuickTiles.map((item) => (
              <MobileQuickTile key={item.id} item={item} onSelect={item.track ? playTrack : undefined} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h1 className="mb-5 text-[2rem] font-semibold tracking-[-0.06em] text-white">
            Recommended Stations
          </h1>

          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {mobileStations.map((item, index) => (
              <ShelfCard
                key={item.id}
                item={item}
                index={index}
                className="min-w-[18rem]"
                artworkClassName="aspect-square"
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-[2rem] font-semibold tracking-[-0.06em] text-white">
            Popular radio
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {popularStations.map((item, index) => (
              <ShelfCard
                key={item.id}
                item={item}
                index={index}
                className="min-w-[18rem]"
                artworkClassName="aspect-square"
              />
            ))}
          </div>
        </section>
      </div>

      <div className="hidden min-h-screen bg-[linear-gradient(180deg,rgba(29,185,84,0.18),rgba(18,18,18,0.08)_18%,transparent_42%),linear-gradient(180deg,#141414_0%,#0b0b0b_100%)] pb-40 md:block lg:pb-32">
        <div className="mx-auto w-full max-w-[94rem] px-5 py-6 md:px-6 xl:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-6">
              <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(145deg,rgba(17,33,24,0.96),rgba(20,24,22,0.92)_52%,rgba(9,9,9,0.96)_100%)] p-5 md:p-6 xl:p-7">
                <div className="absolute -left-12 top-8 h-44 w-44 rounded-full bg-spotify-green/10 blur-3xl" />
                <div className="absolute right-4 top-6 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    {desktopHeroChips.map((chip, index) => (
                      <span
                        key={chip}
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          index === 0 ? 'bg-white text-black' : 'bg-white/8 text-white/76'
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] xl:items-start">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-spotify-green">
                        Good Evening
                      </p>
                      <h1 className="mt-2 max-w-3xl text-[2.5rem] font-semibold leading-[0.94] tracking-[-0.065em] text-white xl:text-[3.15rem]">
                        {desktopName}, this home finally feels polished.
                      </h1>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                        Cleaner hierarchy, tighter spacing, and a calmer large-screen layout built around what you actually replay.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => playTrack(playerTracks[0])}
                          className="inline-flex items-center gap-2 rounded-full bg-spotify-green px-5 py-3 text-sm font-semibold text-black"
                        >
                          <Play className="h-4 w-4 fill-current" />
                          Resume Listening
                        </button>
                        <Link
                          to="/search"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88"
                        >
                          <Sparkles className="h-4 w-4" />
                          Explore Fresh Picks
                        </Link>
                      </div>

                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {desktopHeroStats.map((item) => (
                          <DesktopHeroMetric
                            key={item.label}
                            icon={item.icon}
                            value={item.value}
                            label={item.label}
                            note={item.note}
                          />
                        ))}
                      </div>
                    </div>

                    <DesktopSpotlightCard item={playerTracks[1]} onSelect={playTrack} />
                  </div>

                  <div className="mt-6">
                    <DesktopSectionHeading
                      eyebrow="Quick Access"
                      title="Pinned right on top"
                      description="The rows you open most often, without the old stretched spacing."
                    />

                    <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
                      {desktopQuickTiles.map((item) => (
                        <DesktopQuickTile
                          key={item.id}
                          item={item}
                          onSelect={item.track ? playTrack : undefined}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
                <div className="rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 md:p-6">
                  <DesktopSectionHeading
                    eyebrow="Made For You"
                    title="Tonight's front row"
                    description="Two rich mixes for the mood you keep circling back to."
                    action="Fresh pair"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    {desktopForYou.map((item) => (
                      <DesktopFeatureCard
                        key={item.id}
                        item={item}
                        onSelect={item.track ? playTrack : undefined}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 md:p-6">
                  <DesktopSectionHeading
                    eyebrow="Queue Focus"
                    title="Based on your loop"
                    description="Fast jump-backs to the tracks still shaping your evening."
                    action="Recent"
                  />

                  <div className="space-y-3">
                    {recentListening.slice(0, 4).map((item, index) => (
                      <DesktopQueueRow key={item.id} item={item} index={index} onSelect={playTrack} />
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-2">
                <div className="rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 md:p-6">
                  <DesktopSectionHeading
                    eyebrow="Recommended"
                    title="Stations and radio"
                    description="A sharper browse row with enough density to feel native on laptop."
                    action="Radio"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    {desktopPopular.map((item, index) => (
                      <ShelfCard key={item.id} item={item} index={index} className="min-w-0" />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 md:p-6">
                  <DesktopSectionHeading
                    eyebrow="Jump Back In"
                    title="Albums and mixes"
                    description="Poster-style covers, tighter columns, and more natural spacing."
                    action="Replay"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    {[...homeAlbums, ...radioShelf].map((item, index) => (
                      <ShelfCard key={item.id} item={item} index={index} className="min-w-0" />
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-[1.85rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(29,185,84,0.2),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff612d] text-lg font-black text-black">
                    {(desktopName || 'M').slice(0, 1).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
                      Listening Profile
                    </p>
                    <h2 className="truncate text-[1.2rem] font-semibold tracking-[-0.04em] text-white">
                      Built around your taste
                    </h2>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[1.1rem] bg-black/18 px-3 py-3">
                    <p className="text-[1.45rem] font-semibold tracking-[-0.04em] text-white">24</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/36">playlists</p>
                  </div>
                  <div className="rounded-[1.1rem] bg-black/18 px-3 py-3">
                    <p className="text-[1.45rem] font-semibold tracking-[-0.04em] text-white">247</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/36">liked songs</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {desktopTasteTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-xs font-medium text-white/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  Romantic playback, Hindi 90s radio, and warm soundtrack picks are still dominating your top shelves.
                </p>
              </section>

              <section className="rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-spotify-green" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                    Recent momentum
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  {recentListening.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => playTrack(item)}
                      className="flex w-full items-center gap-3 rounded-[1.15rem] bg-black/18 px-3 py-3 text-left transition-colors hover:bg-white/[0.04]"
                    >
                      <CoverArt art={item.art} title={item.title} className="h-12 w-12 shrink-0 rounded-[0.95rem]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">{item.title}</p>
                        <p className="truncate text-sm text-white/46">{item.artist}</p>
                      </div>
                      <span className="text-xs text-white/34">{formatDuration(item.duration)}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.85rem] border border-emerald-500/18 bg-[linear-gradient(135deg,rgba(29,185,84,0.18),rgba(255,255,255,0.04))] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">Create Faster</p>
                <h2 className="mt-2 text-[1.45rem] font-semibold leading-tight tracking-[-0.045em] text-white">
                  Spin up a new playlist without leaving the flow.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  Start with a mood, blend your favorites, or design a bold poster cover in one place.
                </p>
                <Link
                  to="/create"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-black/75 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Open creator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
