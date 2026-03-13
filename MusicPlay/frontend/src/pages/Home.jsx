import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Flame, Headphones, Play, Radio, Sparkles } from 'lucide-react';
import MusicCard from '../components/MusicCard';

const quickLinks = [
  {
    title: 'Morning Reset',
    subtitle: 'Soft pop and clean vocals',
    icon: Sparkles,
    accent: 'from-emerald-400/30 to-cyan-400/10',
  },
  {
    title: 'Power Hour',
    subtitle: 'High-energy tracks for movement',
    icon: Flame,
    accent: 'from-orange-400/30 to-rose-500/10',
  },
  {
    title: 'Focus Grid',
    subtitle: 'Instrumentals for deep work',
    icon: Headphones,
    accent: 'from-sky-400/30 to-indigo-500/10',
  },
  {
    title: 'Radio Drift',
    subtitle: 'Fresh discoveries and hidden gems',
    icon: Radio,
    accent: 'from-fuchsia-400/30 to-violet-500/10',
  },
];

const spotlightCards = [
  {
    id: 's1',
    title: 'Night Drive Archive',
    subtitle: 'Neon pop, velvet synths, zero skips.',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
    tone: 'from-slate-900 via-slate-800 to-emerald-900',
  },
  {
    id: 's2',
    title: 'Fresh Finds',
    subtitle: 'New drops picked around your loop.',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop',
    tone: 'from-zinc-900 via-zinc-800 to-orange-900',
  },
];

const trendingAlbums = [
  {
    id: '1',
    title: 'Midnights',
    artist: 'Taylor Swift',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop',
    duration: 240,
  },
  {
    id: '2',
    title: 'Renaissance',
    artist: 'Beyonce',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 210,
  },
  {
    id: '3',
    title: "Harry's House",
    artist: 'Harry Styles',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 180,
  },
  {
    id: '4',
    title: 'Special',
    artist: 'Lizzo',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    duration: 195,
  },
  {
    id: '5',
    title: 'Un Verano Sin Ti',
    artist: 'Bad Bunny',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    duration: 225,
  },
];

const moodMixes = [
  {
    id: '6',
    title: 'Afterglow Mix',
    artist: 'Dream pop, indie, alt-r&b',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    duration: 167,
  },
  {
    id: '7',
    title: 'Silver Traffic',
    artist: 'Late-night city pulse',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    duration: 141,
  },
  {
    id: '8',
    title: 'Velvet Bounce',
    artist: 'Warm bass and smooth hooks',
    cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    duration: 200,
  },
  {
    id: '9',
    title: 'Cloud Atlas',
    artist: 'Airy layers for long sessions',
    cover: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop',
    duration: 192,
  },
];

const recentlyPlayed = [
  {
    id: '10',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    duration: 200,
  },
  {
    id: '11',
    title: 'Levitating',
    artist: 'Dua Lipa',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 203,
  },
  {
    id: '12',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 178,
  },
  {
    id: '13',
    title: 'Montero',
    artist: 'Lil Nas X',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    duration: 137,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(29,185,84,0.16),_transparent_34%),linear-gradient(180deg,_#151515_0%,_#0b0b0b_100%)] pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(29,185,84,0.24),rgba(16,16,16,0.94)_48%,rgba(7,7,7,1))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:p-7 lg:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-spotify-green" />
                Built For Your Loop
              </div>

              <h1 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-5xl">
                Home that actually feels good on phone.
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/72 sm:text-base">
                Tight layout, faster scanning, stronger cards, and one clear floating dock at the bottom. No extra mobile chrome.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-spotify-green px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                  Play Your Mix
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88">
                  Explore Fresh Picks
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2 sm:max-w-md sm:gap-3">
                {[
                  { label: 'Saved', value: '184' },
                  { label: 'New Today', value: '12' },
                  { label: 'Minutes', value: '86' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/8 bg-black/20 px-3 py-3"
                  >
                    <div className="text-xl font-semibold text-white sm:text-2xl">{item.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {spotlightCards.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  className={`relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-br ${item.tone} p-4`}
                >
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-30"
                  />
                  <div className="relative z-10 max-w-[60%]">
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      <Clock3 className="h-3 w-3" />
                      Curated
                    </div>
                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">{item.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <motion.button
              key={item.title}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-[1.5rem] border border-white/7 bg-gradient-to-br ${item.accent} from-0% to-100% p-[1px] text-left`}
            >
              <div className="h-full rounded-[calc(1.5rem-1px)] bg-black/70 px-4 py-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-5 text-white/62">{item.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </section>

        <section className="mt-9">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spotify-green">Trending</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">Albums moving right now</h2>
            </div>
            <button className="hidden text-sm font-semibold text-white/58 lg:block">Show all</button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible">
            {trendingAlbums.map((album, index) => (
              <div key={album.id} className="min-w-[160px] snap-start sm:min-w-[190px] lg:min-w-0">
                <MusicCard track={album} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,185,84,0.22),transparent_35%)]" />
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Mood Capsule</p>
              <h2 className="mt-2 max-w-sm text-2xl font-semibold tracking-[-0.03em] text-white">
                A cleaner mobile home means faster choices and less hunting.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/66">
                Featured rows now scroll naturally on phone, cards breathe better, and the hero gives you immediate entry points.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Deep focus', 'Clean vocals', 'Low-key pop', 'Smooth night'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/78"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {moodMixes.map((track, index) => (
              <MusicCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spotify-green">Recents</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">Back in your rotation</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {recentlyPlayed.map((track, index) => (
              <MusicCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
