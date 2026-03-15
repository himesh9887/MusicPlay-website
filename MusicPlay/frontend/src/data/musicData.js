export const posterArt = ({
  background,
  overlay = 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.22) 100%)',
  glowA = 'rgba(255,255,255,0.3)',
  glowB = 'rgba(0,0,0,0.22)',
  sticker = '',
  kicker = '',
  displayTitle = '',
  footer = '',
  textColor = '#fff8ef',
  align = 'bottom',
  note = '',
}) => ({
  background,
  overlay,
  glowA,
  glowB,
  sticker,
  kicker,
  displayTitle,
  footer,
  textColor,
  align,
  note,
});

export const demoUser = {
  id: 'demo-user',
  email: 'harsh@musicplay.app',
  username: 'harsh',
  fullName: 'Harsh',
  avatar: '',
  bio: 'Bollywood 90s, soft romantic tracks, and road-trip radio on loop.',
  location: 'Jaipur',
  favoriteGenre: 'Hindi 90s',
  favoriteArtist: 'Kumar Sanu',
  socialLinks: {
    twitter: '',
    instagram: '',
  },
};

export const homeFilters = ['All', 'Music', 'Podcasts'];

export const playerTracks = [
  {
    id: 'track-us-ladki',
    title: 'Us Ladki Pe Dil Aaya',
    artist: 'Anuradha Paudwal',
    album: 'Naam Gum Jaayega',
    duration: 234,
    art: posterArt({
      background: 'linear-gradient(145deg, #24101c 0%, #73304f 48%, #d06a46 100%)',
      overlay: 'radial-gradient(circle at 22% 18%, rgba(255,214,164,0.42), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.28))',
      glowA: 'rgba(255, 203, 137, 0.38)',
      glowB: 'rgba(127, 34, 74, 0.45)',
      sticker: 'Now',
      kicker: 'Romantic Pick',
      displayTitle: 'US LADKI\nPE DIL AAYA',
      footer: 'ANURADHA PAUDWAL',
      note: '90s Hindi',
    }),
  },
  {
    id: 'track-main-ishq',
    title: 'Main Ishq Uska',
    artist: 'Alka Yagnik, Javed Ali',
    album: 'Vaada',
    duration: 248,
    art: posterArt({
      background: 'linear-gradient(140deg, #f1d088 0%, #b35b2d 44%, #401f1a 100%)',
      overlay: 'radial-gradient(circle at 74% 28%, rgba(255,255,255,0.28), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.1), rgba(0,0,0,0.26))',
      glowA: 'rgba(255, 214, 102, 0.42)',
      glowB: 'rgba(58, 30, 22, 0.5)',
      sticker: 'Radio',
      kicker: 'Alka Yagnik',
      displayTitle: 'MAIN ISHQ\nUSKA',
      footer: 'SOFT LOVE LOOP',
      textColor: '#2a130c',
      note: 'Radio',
    }),
  },
  {
    id: 'track-two-good',
    title: 'Two Good',
    artist: 'Alka Yagnik & Kumar Sanu',
    album: 'Editorial Radio',
    duration: 219,
    art: posterArt({
      background: 'linear-gradient(145deg, #f7f0e8 0%, #f2ede6 48%, #f4ddd9 100%)',
      overlay: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04))',
      glowA: 'rgba(255, 80, 80, 0.22)',
      glowB: 'rgba(220, 38, 38, 0.22)',
      sticker: 'Edit',
      kicker: 'Two legends in one playlist',
      displayTitle: 'TWO\nGOOD',
      footer: 'ALKA + KUMAR',
      textColor: '#171717',
      note: 'Curated',
    }),
  },
  {
    id: 'track-all-out',
    title: 'All Out Hindi 90s',
    artist: 'Alka Yagnik, Udit Narayan, S. P. Balasubrahmanyam',
    album: 'Spotify Mix',
    duration: 262,
    art: posterArt({
      background: 'linear-gradient(140deg, #ffcf2f 0%, #f59e0b 52%, #8d4d1e 100%)',
      overlay: 'radial-gradient(circle at 20% 18%, rgba(255,255,255,0.26), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18))',
      glowA: 'rgba(255, 234, 167, 0.38)',
      glowB: 'rgba(120, 53, 15, 0.36)',
      sticker: 'Mix',
      kicker: 'Hindi 90s',
      displayTitle: 'ALL OUT',
      footer: 'DANCE + DRAMA',
      textColor: '#fff7d4',
      note: 'Spotify',
    }),
  },
  {
    id: 'track-tip-tip',
    title: 'Tip Tip Barsa',
    artist: 'Alka Yagnik, Udit Narayan',
    album: 'Monsoon Replay',
    duration: 212,
    art: posterArt({
      background: 'linear-gradient(145deg, #0f766e 0%, #0f9f93 48%, #f97316 100%)',
      overlay: 'radial-gradient(circle at 78% 18%, rgba(255,255,255,0.28), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.22))',
      glowA: 'rgba(110, 231, 183, 0.28)',
      glowB: 'rgba(251, 146, 60, 0.3)',
      sticker: 'Rain',
      kicker: 'Monsoon Replay',
      displayTitle: 'TIP TIP\nBARSA',
      footer: 'ICONIC DUET',
      note: 'Loop',
    }),
  },
];

export const homeAlbums = [
  {
    id: 'album-hum-hain',
    title: 'Hum Hain Rahi Pyar Ke',
    subtitle: 'Nadeem Shravan',
    caption: 'Album',
    art: posterArt({
      background: 'linear-gradient(140deg, #fff3e3 0%, #ffd398 42%, #fd8e53 100%)',
      overlay: 'radial-gradient(circle at 26% 20%, rgba(255,255,255,0.48), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.18))',
      glowA: 'rgba(255, 248, 220, 0.4)',
      glowB: 'rgba(251, 146, 60, 0.34)',
      sticker: '90s',
      kicker: 'Original Motion Picture',
      displayTitle: 'HUM HAIN\nRAHI PYAR KE',
      footer: 'NADEEM SHRAVAN',
      textColor: '#23150d',
    }),
  },
  {
    id: 'album-koyla',
    title: 'Koyla (Original Motion Picture Soundtrack)',
    subtitle: 'Rajesh Roshan',
    caption: 'Album',
    art: posterArt({
      background: 'linear-gradient(145deg, #07203b 0%, #1d4d7e 42%, #f59e0b 100%)',
      overlay: 'radial-gradient(circle at 74% 22%, rgba(255,239,199,0.4), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.28))',
      glowA: 'rgba(191, 219, 254, 0.32)',
      glowB: 'rgba(245, 158, 11, 0.34)',
      sticker: 'Film',
      kicker: 'Soundtrack',
      displayTitle: 'KOYLA',
      footer: 'RAJESH ROSHAN',
    }),
  },
  {
    id: 'album-bollywood-gold',
    title: 'Bollywood Kumar Sanu Special',
    subtitle: 'Kumar Sanu',
    caption: 'Album',
    art: posterArt({
      background: 'linear-gradient(140deg, #f4b56b 0%, #d97706 56%, #7c2d12 100%)',
      overlay: 'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.26), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.22))',
      glowA: 'rgba(255, 237, 213, 0.25)',
      glowB: 'rgba(120, 53, 15, 0.3)',
      sticker: 'Gold',
      kicker: 'Collector Cut',
      displayTitle: 'BOLLYWOOD\nGOLD',
      footer: 'KUMAR SANU',
      textColor: '#fff6dd',
    }),
  },
];

export const radioShelf = [
  {
    id: 'radio-all-out',
    title: 'All Out Hindi 90s',
    subtitle: 'Alka Yagnik, Udit Narayan, S. P. Balasubrahmanyam, and more',
    caption: 'Radio',
    art: playerTracks[3].art,
  },
  {
    id: 'radio-two-good',
    title: 'Two Good',
    subtitle: 'Two legends in one playlist.',
    caption: 'Radio',
    art: playerTracks[2].art,
  },
  {
    id: 'radio-tip-tip',
    title: 'Tip Tip Barsa',
    subtitle: 'Alka Yagnik and rain-soaked classics.',
    caption: 'Radio',
    art: playerTracks[4].art,
  },
];

export const recentListening = playerTracks;

export const mobileQuickTiles = [
  {
    id: 'quick-main-ishq',
    title: 'Main Ishq Uska Radio',
    art: playerTracks[1].art,
    track: playerTracks[1],
  },
  {
    id: 'quick-liked',
    title: 'Liked Songs',
    art: posterArt({
      background: 'linear-gradient(145deg, #6d28d9 0%, #818cf8 52%, #99f6e4 100%)',
      sticker: '',
      displayTitle: 'LOVE',
      footer: '',
    }),
  },
  {
    id: 'quick-sad-90s',
    title: '90s Sad Bollywood',
    art: posterArt({
      background: 'linear-gradient(145deg, #4c0519 0%, #9f1239 44%, #fb7185 100%)',
      sticker: 'Mood',
      displayTitle: '90s SAD',
      footer: 'BOLLYWOOD',
    }),
  },
  {
    id: 'quick-hum-yaar',
    title: 'Hum Yaar Hai Tumhare Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #3730a3 0%, #818cf8 48%, #c4b5fd 100%)',
      sticker: 'Radio',
      displayTitle: 'HUM YAAR',
      footer: 'TUMHARE',
    }),
  },
  {
    id: 'quick-udit',
    title: 'Udit Narayan Hits',
    art: posterArt({
      background: 'linear-gradient(145deg, #7f1d1d 0%, #b91c1c 50%, #fb923c 100%)',
      sticker: 'Hits',
      displayTitle: 'UDIT',
      footer: 'NARAYAN',
    }),
  },
];

export const recommendedStations = [
  {
    id: 'station-rafi',
    title: 'Mohammed Rafi',
    subtitle: 'Asha Bhosle, Mohammed Rafi, Mukesh, Hemant Kumar',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #6ee7b7 0%, #5eead4 60%, #99f6e4 100%)',
      sticker: 'Radio',
      displayTitle: 'MOHAMMED\nRAFI',
      footer: 'EVERGREEN',
      textColor: '#061a15',
    }),
  },
  {
    id: 'station-amar',
    title: 'Amar Karnawal',
    subtitle: 'Masoom Sharma, Dhanda Nyoliwala, Vikram Sarkar',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #67e8f9 0%, #5eead4 60%, #a7f3d0 100%)',
      sticker: 'Radio',
      displayTitle: 'AMAR\nKARNAWAL',
      footer: 'HARYANVI MIX',
      textColor: '#0b1a17',
    }),
  },
  {
    id: 'station-harvi',
    title: 'Harvi',
    subtitle: 'Masoom Sharma, Gill Saab, rustic radio cuts',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #d9f99d 0%, #bef264 56%, #84cc16 100%)',
      sticker: 'Radio',
      displayTitle: 'HARVI',
      footer: 'FRESH LOOP',
      textColor: '#1a2208',
    }),
  },
];

export const popularStations = [
  {
    id: 'pop-arijit',
    title: 'Arijit Singh',
    subtitle: 'Arijit essentials and emotional playback staples.',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #fcd34d 0%, #fde68a 56%, #fdba74 100%)',
      sticker: 'Radio',
      displayTitle: 'ARIJIT\nSINGH',
      footer: 'POPULAR',
      textColor: '#23160a',
    }),
  },
  {
    id: 'pop-kk',
    title: 'KK',
    subtitle: 'Soft rock, film anthems, and endless nostalgia.',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #5eead4 0%, #7dd3fc 56%, #99f6e4 100%)',
      sticker: 'Radio',
      displayTitle: 'KK',
      footer: 'CLASSICS',
      textColor: '#0c1815',
    }),
  },
  {
    id: 'pop-ar-rahman',
    title: 'A. R. Rahman',
    subtitle: 'Massive soundtracks with deep melodic runs.',
    caption: 'Radio',
    art: posterArt({
      background: 'linear-gradient(145deg, #fde047 0%, #facc15 48%, #f59e0b 100%)',
      sticker: 'Radio',
      displayTitle: 'A. R.\nRAHMAN',
      footer: 'SOUNDTRACK',
      textColor: '#2a1907',
    }),
  },
];

export const searchTags = ['90s Love', 'Sad Songs', 'Kumar Sanu', 'Road Trip', 'Rain Songs'];

export const browseTiles = [
  {
    id: 'browse-romance',
    title: 'Romance',
    subtitle: 'Soft duets and evergreen hooks',
    art: posterArt({
      background: 'linear-gradient(145deg, #a11d44 0%, #d9465f 48%, #fda4af 100%)',
      sticker: 'Mood',
      displayTitle: 'ROMANCE',
      footer: 'SOFT LOVE',
    }),
  },
  {
    id: 'browse-retro',
    title: 'Retro Gold',
    subtitle: 'Classic melodies you know by heart',
    art: posterArt({
      background: 'linear-gradient(145deg, #7c3a0a 0%, #d97706 52%, #fde68a 100%)',
      sticker: 'Era',
      displayTitle: 'RETRO',
      footer: 'GOLD',
      textColor: '#251204',
    }),
  },
  {
    id: 'browse-sad',
    title: 'Heartbreak',
    subtitle: 'Slow, heavy, and late-night ready',
    art: posterArt({
      background: 'linear-gradient(145deg, #111827 0%, #1d4ed8 50%, #60a5fa 100%)',
      sticker: 'Feels',
      displayTitle: 'HEART\nBREAK',
      footer: 'AFTER 11 PM',
    }),
  },
  {
    id: 'browse-dance',
    title: 'Dancefloor',
    subtitle: 'High-energy filmi bangers',
    art: posterArt({
      background: 'linear-gradient(145deg, #14532d 0%, #16a34a 50%, #facc15 100%)',
      sticker: 'Move',
      displayTitle: 'DANCE',
      footer: 'UPBEAT CUTS',
    }),
  },
];

export const libraryPins = [
  {
    id: 'pin-liked',
    title: 'Liked Songs',
    subtitle: '247 tracks saved',
    caption: 'Pinned',
    art: posterArt({
      background: 'linear-gradient(145deg, #4338ca 0%, #6d28d9 52%, #ec4899 100%)',
      sticker: 'Pinned',
      kicker: 'Your top shelf',
      displayTitle: 'LIKED\nSONGS',
      footer: '247 TRACKS',
    }),
  },
  {
    id: 'pin-downloads',
    title: 'Downloaded',
    subtitle: 'Offline for train rides',
    caption: 'Pinned',
    art: posterArt({
      background: 'linear-gradient(145deg, #0f172a 0%, #334155 48%, #38bdf8 100%)',
      sticker: 'Offline',
      displayTitle: 'DOWN\nLOADED',
      footer: 'READY TO GO',
    }),
  },
];

export const libraryPlaylists = [
  {
    id: 'playlist-shaadi',
    title: 'Shaadi Bus Queue',
    subtitle: 'Made by Harsh',
    caption: 'Playlist',
    art: posterArt({
      background: 'linear-gradient(145deg, #854d0e 0%, #d97706 48%, #fcd34d 100%)',
      sticker: 'Party',
      displayTitle: 'SHAADI\nBUS',
      footer: 'QUEUE',
      textColor: '#2b1605',
    }),
  },
  {
    id: 'playlist-drive',
    title: 'Night Highway',
    subtitle: '28 songs',
    caption: 'Playlist',
    art: posterArt({
      background: 'linear-gradient(145deg, #111827 0%, #1e3a8a 48%, #38bdf8 100%)',
      sticker: 'Drive',
      displayTitle: 'NIGHT\nHIGHWAY',
      footer: '28 SONGS',
    }),
  },
  {
    id: 'playlist-soft',
    title: 'Soft Kumar Sanu',
    subtitle: '41 songs',
    caption: 'Playlist',
    art: posterArt({
      background: 'linear-gradient(145deg, #3f3f46 0%, #71717a 48%, #f59e0b 100%)',
      sticker: 'Vocal',
      displayTitle: 'SOFT\nKUMAR',
      footer: '41 SONGS',
    }),
  },
  {
    id: 'playlist-rain',
    title: 'Monsoon Window',
    subtitle: '16 songs',
    caption: 'Playlist',
    art: posterArt({
      background: 'linear-gradient(145deg, #0f766e 0%, #14b8a6 48%, #c084fc 100%)',
      sticker: 'Rain',
      displayTitle: 'MONSOON\nWINDOW',
      footer: '16 SONGS',
    }),
  },
];

export const premiumPlans = [
  {
    id: 'plan-mini',
    name: 'Mini',
    price: 'Rs59',
    detail: 'One week, mobile only, ad-free queue picks.',
  },
  {
    id: 'plan-individual',
    name: 'Individual',
    price: 'Rs119',
    detail: 'Offline download, smarter shuffle, full skips.',
  },
  {
    id: 'plan-duo',
    name: 'Duo',
    price: 'Rs149',
    detail: 'Two accounts with separate taste profiles.',
  },
];

export const premiumPerks = [
  'No ad breaks during long radio sessions',
  'Download your Hindi 90s mixes offline',
  'Queue tracks in the exact order you want',
  'Jump between devices without losing context',
];

export const creationTools = [
  {
    id: 'tool-playlist',
    title: 'Playlist from mood',
    subtitle: 'Type a vibe and get a ready-made starter list.',
    art: posterArt({
      background: 'linear-gradient(145deg, #064e3b 0%, #059669 48%, #6ee7b7 100%)',
      sticker: 'Create',
      displayTitle: 'PLAYLIST\nMOOD',
      footer: 'START FAST',
      textColor: '#062b22',
    }),
  },
  {
    id: 'tool-collab',
    title: 'Blend with a friend',
    subtitle: 'Merge two people into one shared retro mix.',
    art: posterArt({
      background: 'linear-gradient(145deg, #4c1d95 0%, #7c3aed 48%, #c084fc 100%)',
      sticker: 'Collab',
      displayTitle: 'BLEND',
      footer: 'TWO TASTES',
    }),
  },
  {
    id: 'tool-cover',
    title: 'Design a cover',
    subtitle: 'Pick warm poster colors and bold type for your playlist art.',
    art: posterArt({
      background: 'linear-gradient(145deg, #7c2d12 0%, #ea580c 50%, #fed7aa 100%)',
      sticker: 'Art',
      displayTitle: 'COVER',
      footer: 'BOLD TYPE',
      textColor: '#2c1406',
    }),
  },
];

export const profileStats = [
  { label: 'Followers', value: '1.2K' },
  { label: 'Playlists', value: '24' },
  { label: 'Minutes', value: '9.8K' },
];

export const profileMoments = [
  'Usually starts with Kumar Sanu before 9 AM',
  'Late-night queue leans romantic and rain-heavy',
  'Most replayed shelf this month: Main Ishq Uska Radio',
];
