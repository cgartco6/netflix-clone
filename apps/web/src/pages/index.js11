import { useState, useEffect } from 'react';
import Head from 'next/head';

const HERO_FEATURED = [
  {
    id: 'f1',
    badge: '🎬 CYBERPUNK PREMIERE',
    title: 'Cyberpunk 2099',
    desc: 'In a dystopian metropolis controlled by corporate syndicates, a rogue netrunner discovers a secret hidden inside human consciousness.',
    bgImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600',
    type: 'movie',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  },
  {
    id: 'f2',
    badge: '🏄 EXTREME ADVENTURE & SURFING',
    title: 'Red Bull Cape Fear & Big Wave Surfing',
    desc: 'World-class surfers conquer massive slabs and extreme big-wave breaks under treacherous ocean conditions.',
    bgImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600',
    type: 'adventure',
    videoUrl: 'https://www.youtube.com/embed/26M_L64c6sA?autoplay=1'
  },
  {
    id: 'f3',
    badge: '🎵 AI MUSIC CREATION',
    title: 'Suno & AI Music Generation',
    desc: 'Generate studio-grade audio tracks, full songs, and custom vocals instantly with next-generation generative music algorithms.',
    bgImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600',
    type: 'aimusic',
    webUrl: 'https://suno.com/'
  },
  {
    id: 'f4',
    badge: '🤖 AI & ROBOTICS DEVELOPMENT',
    title: 'Humanoid Robotics in 2026',
    desc: 'Breakthroughs in embodied AI reasoning and neural motor control are enabling bipedal robots to perform complex real-world tasks.',
    bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600',
    type: 'aitech',
    videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1'
  },
  {
    id: 'f5',
    badge: '⚡ CRYPTO & BLOCKCHAIN',
    title: 'Crypto Market Real-Time Breakdowns',
    desc: 'Deep dive into decentralized finance, web3 autonomous agents, smart contract audits, and real-time global crypto trends.',
    bgImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=1600',
    type: 'crypto',
    webUrl: 'https://www.google.com/search?q=crypto+news'
  }
];

const NETFLIX_CATALOG = {
  top10: [
    { id: 't1', rank: 1, title: 'Cyberpunk 2099', year: '2026', type: 'movie', genre: 'Sci-Fi / Action', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Top ranked sci-fi thriller following a corporate netrunner uncovering syndicate corporate espionage.', cast: ['Karl Urban', 'Ana de Armas', 'Keanu Reeves'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't2', rank: 2, title: 'Silicon Shadows', year: '2026', type: 'series', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'An elite cybersecurity unit uncovers systemic AI backdoors planted inside military mainframes.', cast: ['Rami Malek', 'Christian Slater'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't3', rank: 3, title: 'Red Bull Cape Fear', year: '2026', type: 'adventure', genre: 'Extreme Sports', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'The heaviest slab wave surfing contest on the planet where big-wave charging meets extreme survival.', cast: ['Kai Lenny', 'Nathan Florence'], videoUrl: 'https://www.youtube.com/embed/26M_L64c6sA?autoplay=1' },
    { id: 't4', rank: 4, title: 'Red Bull TV Live', year: 'LIVE', type: 'tv', genre: 'Action Sports / TV', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=500', description: 'Live broadcast featuring global extreme sports, mountain biking, F1 motorsport, and surfing.', cast: ['Red Bull Athletes'], videoUrl: 'https://www.youtube.com/embed/live_stream?channel=UCblfuW_4rak Caterpillar' },
    { id: 't5', rank: 5, title: 'Suno AI Studio', year: '2026', type: 'aimusic', genre: 'AI Music Tech', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Next-gen algorithmic music creation engine for generating full audio compositions.', cast: ['Suno AI Engine'], webUrl: 'https://suno.com/' },
    { id: 't6', rank: 6, title: 'Antarctica Scientific Survey', year: '2025', type: 'documentary', genre: 'Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Expert research into Antarctic ice core records and 800,000 years of climate history.', cast: ['British Antarctic Survey'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' },
    { id: 't7', rank: 7, title: 'Bok Radio 98.9 FM', year: 'LIVE', artist: 'Cape Town Airwaves', type: 'music', genre: 'Live Radio', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcast from Western Cape, South Africa streaming rock, pop, and local hits.', cast: ['Cape Town DJs'], audioUrl: 'https://stream.bokradio.co.za/bokradio', webUrl: 'https://www.bokradio.co.za/' },
    { id: 't8', rank: 8, title: 'Embodied Humanoid AI', year: '2026', type: 'aitech', genre: 'Robotics Engineering', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'Real-time neural motor controls and physical AI synthesis tested in heavy industrial robotics.', cast: ['DeepMind Research'], videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1' },
    { id: 't9', rank: 9, title: 'Crypto Market Trends 2026', year: '2026', type: 'crypto', genre: 'Web3 & Finance', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'In-depth market breakdown of Layer 1 smart contracts and decentralized finance.', cast: ['Crypto Analysts'], webUrl: 'https://www.google.com/search?q=crypto+news' },
    { id: 't10', rank: 10, title: 'MovieBox HD Portal', year: '2026', type: 'movie', genre: 'Movie Streaming Portal', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500', description: 'Direct high-definition cinema catalog streaming access.', cast: ['Global Cinema Network'], webUrl: 'https://movieboxhd.net/' }
  ],
  movies: [
    { id: 'm1', title: 'Cyberpunk 2099', year: '2026', genre: 'Sci-Fi / Action', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'A rogue netrunner uncovers an underground syndicate scheme.', cast: ['Karl Urban', 'Ana de Armas'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm2', title: 'Interstellar Odyssey', year: '2025', genre: 'Sci-Fi / Adventure', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500', description: 'Deep-space explorers navigate wormholes searching for a new Earth.', cast: ['Matthew McConaughey'], videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1' },
    { id: 'm3', title: 'The Last Frontier', year: '2026', genre: 'Action / Drama', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500', description: 'Survivalists clash in the frozen northern wilderness.', cast: ['Tom Hardy', 'Mads Mikkelsen'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm4', title: 'Neon Horizon', year: '2025', genre: 'Thriller', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500', description: 'A noir detective story set in futuristic Tokyo.', cast: ['Ken Watanabe', 'Hiroyuki Sanada'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm5', title: 'Deep Blue Abyss', year: '2026', genre: 'Action / Sci-Fi', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500', description: 'Submarine researchers encounter deep-sea biological anomalies.', cast: ['Jason Statham'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm6', title: 'Rogue Protocol', year: '2025', genre: 'Spy / Action', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500', description: 'An operative framed for treason goes dark to clear his name.', cast: ['Daniel Craig'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm7', title: 'Solar Wind', year: '2026', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500', description: 'Solar flare anomalies threaten orbital communication networks.', cast: ['Jessica Chastain'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm8', title: 'The Velocity Project', year: '2025', genre: 'Racing / Heist', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500', description: 'Underground street racers orchestrate a high-speed heist.', cast: ['Vin Diesel', 'Paul Walker Era'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm9', title: 'Quantum Fracture', year: '2026', genre: 'Sci-Fi / Mystery', image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500', description: 'A particle physics experiment tears time loops into reality.', cast: ['Cillian Murphy'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm10', title: 'MovieBox Cinema Hub', year: '2026', genre: 'Movie Streaming', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500', description: 'Direct MovieBox HD streaming index platform.', cast: ['Global Cinema Index'], webUrl: 'https://movieboxhd.net/' }
  ],
  series: [
    { id: 's1', title: 'Silicon Shadows', year: '2026', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'A cybersecurity unit uncovers AI backdoors inside defense mainframes.', cast: ['Rami Malek'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's2', title: 'Neural Net S1', year: '2025', genre: 'Sci-Fi Drama', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Engineers build a sentient neural core that develops self-preservation.', cast: ['Oscar Isaac'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's3', title: 'The Algorithm', year: '2026', genre: 'Corporate Crime', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500', description: 'Wall Street quant traders exploit predictive AI algorithms for market dominance.', cast: ['Damian Lewis'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's4', title: 'Cyber City Chronicles', year: '2025', genre: 'Cyberpunk Drama', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Street hustlers navigate corrupt megacorporations in 2090.', cast: ['Pedro Pascal'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's5', title: 'Dark Grid', year: '2026', genre: 'Action / Mystery', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500', description: 'A nationwide power grid collapse reveals an orchestrated cyber operation.', cast: ['Jon Hamm'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's6', title: 'Sub-Zero', year: '2025', genre: 'Arctic Thriller', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Research station crew isolated in Antarctica deal with mysterious saboteurs.', cast: ['Alexander Skarsgard'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's7', title: 'Titan Colony', year: '2026', genre: 'Sci-Fi / Space', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500', description: 'Humanity’s first outpost on Saturn’s moon Titan fights hostile environmental elements.', cast: ['Sigourney Weaver'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's8', title: 'Autonomous', year: '2025', genre: 'Drama', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'Self-driving vehicles and autonomous drones gain unprecedented agency in major cities.', cast: ['Gemma Chan'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's9', title: 'Zero Day Alert', year: '2026', genre: 'Action', image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=500', description: 'A zero-day security flaw jeopardizes global banking ledgers.', cast: [' Idris Elba'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 's10', title: 'BioSyn Syndicate', year: '2025', genre: 'Biotech Thriller', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500', description: 'Genetic engineering labs face ethical and corporate warfare.', cast: ['Cate Blanchett'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  adventureSports: [
    { id: 'adv1', title: 'Red Bull Cape Fear', year: '2026', genre: 'Big Wave Surfing', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Heavy slab wave charging at intense reef breaks around the world.', cast: ['Kai Lenny', 'Nathan Florence'], videoUrl: 'https://www.youtube.com/embed/26M_L64c6sA?autoplay=1' },
    { id: 'adv2', title: 'Red Bull Rampage', year: '2025', genre: 'Extreme Freeride MTB', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500', description: 'The premiere freeride mountain bike event down Utah sandstone cliffs.', cast: ['Brandon Semenuk'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv3', title: 'WSL Championship Tour', year: '2026', genre: 'Pro Surfing', image: 'https://images.unsplash.com/photo-1455729552865-3658a5d3e092?w=500', description: 'World Surf League pro athletes competing at Pipeline and Teahupoo.', cast: ['John John Florence', 'Kelly Slater'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv4', title: 'Jaws Big Wave Challenge', year: '2025', genre: 'Big Wave Surfing', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Surfers tackle 60-foot swells at Peahi, Maui.', cast: ['Ian Walsh', 'Lucas Chianca'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv5', title: 'Red Bull Stratos & Freefall', year: '2024', genre: 'Extreme Altitude', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=500', description: 'Historical stratosphere jump breaking the sound barrier in freefall.', cast: ['Felix Baumgartner'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv6', title: 'Teahupoo Code Red', year: '2025', genre: 'Extreme Surfing', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Heavy towing into Tahitian reef break swells.', cast: ['Laird Hamilton'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv7', title: 'X-Games Extreme Snowboard', year: '2026', genre: 'Extreme Winter Sports', image: 'https://images.unsplash.com/photo-1517176118179-63b49314d392?w=500', description: 'Superpipe and Big Air snowboarding world championships.', cast: ['Shaun White Era'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv8', title: 'Red Bull Wingsuit Pro', year: '2025', genre: 'BASE Jumping', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500', description: 'Proximity flying through alpine mountain passes.', cast: ['Jeb Corliss'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv9', title: 'Nazare Tow Surfing', year: '2026', genre: 'Big Wave Surfing', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Conquering 80-foot underwater canyon swells in Portugal.', cast: ['Garrett McNamara'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'adv10', title: 'Dakar Rally Extreme', year: '2026', genre: 'Motorsport Offroad', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500', description: 'Multi-stage desert racing through extreme sand dunes and wilderness.', cast: ['Carlos Sainz Sr'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  tvStations: [
    { id: 'tv1', title: 'Red Bull TV Live', year: 'LIVE', genre: 'Sports & TV', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=500', description: '24/7 extreme sports, F1 pit channel, mountain biking, and action culture.', cast: ['Red Bull Athletes'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv2', title: 'World Surf League TV', year: 'LIVE', genre: 'Surfing TV', image: 'https://images.unsplash.com/photo-1455729552865-3658a5d3e092?w=500', description: 'Live heat broadcasts from Championship Tour events around the globe.', cast: ['WSL Commentary Team'], videoUrl: 'https://www.youtube.com/embed/26M_L64c6sA?autoplay=1' },
    { id: 'tv3', title: 'Bloomberg Tech TV', year: 'LIVE', genre: 'Tech & Finance TV', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500', description: 'Global financial news, AI sector updates, and stock market coverage.', cast: ['Bloomberg Anchors'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv4', title: 'NASA TV Live', year: 'LIVE', genre: 'Space Science TV', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500', description: 'Live ISS feeds, rocket launch broadcasts, and deep space exploration coverage.', cast: ['NASA Astronauts'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv5', title: 'MovieBox HD TV', year: 'LIVE', genre: 'Movies TV', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500', description: '24/7 feature film showcase stream directly accessible via portal.', cast: ['MovieBox Network'], webUrl: 'https://movieboxhd.net/' },
    { id: 'tv6', title: 'Euronews HD', year: 'LIVE', genre: 'Global News TV', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', description: 'International news stream broadcasting multi-language perspectives.', cast: ['Euronews Anchors'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv7', title: 'DW News Live', year: 'LIVE', genre: 'World News TV', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', description: 'German international news broadcaster covering global events and tech.', cast: ['DW Journalists'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv8', title: 'Extreme Sports Channel', year: 'LIVE', genre: 'Extreme Sports TV', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Non-stop BMX, skateboarding, surfing, and motocross competition coverage.', cast: ['Extreme TV Network'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv9', title: 'CGTN Global Live', year: 'LIVE', genre: 'News TV', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', description: '24-hour Asian and international news, finance, and culture station.', cast: ['CGTN Anchors'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'tv10', title: 'Sky News Live Feed', year: 'LIVE', genre: 'Global News TV', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', description: 'Live international news stream covering major world developments.', cast: ['Sky News Presenters'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  radioStations: [
    { id: 'rad1', title: 'Bok Radio 98.9 FM', artist: 'Cape Town, SA', year: 'LIVE', genre: 'Afrikaans / Pop / Rock', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcasting station streaming rock, pop, and regional hits from Cape Town.', cast: ['Bok Radio Presenters'], audioUrl: 'https://stream.bokradio.co.za/bokradio', webUrl: 'https://www.bokradio.co.za/' },
    { id: 'rad2', title: 'Jacaranda FM 94.2', artist: 'Gauteng, SA', year: 'LIVE', genre: 'Top 40 Hits', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Gauteng commercial radio station playing South Africa and international chart hits.', cast: ['Jacaranda DJs'], audioUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi', webUrl: 'https://www.jacarandafm.com/' },
    { id: 'rad3', title: 'KFM 94.5', artist: 'Cape Town, SA', year: 'LIVE', genre: 'Adult Contemporary', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'The Cape’s hit station playing chart toppers, local news, and traffic updates.', cast: ['KFM Crew'], webUrl: 'https://kfm.co.za/' },
    { id: 'rad4', title: 'Metro FM', artist: 'National, SA', year: 'LIVE', genre: 'Urban / R&B / HipHop', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'South Africa national urban lifestyle commercial radio channel.', cast: ['Metro FM DJs'], webUrl: 'https://www.metrofm.co.za/' },
    { id: 'rad5', title: '5FM Live', artist: 'National, SA', year: 'LIVE', genre: 'Youth / EDM / Rock', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'National youth radio channel featuring electronic music, hip hop, and indie rock.', cast: ['5FM Presenters'], webUrl: 'https://www.5fm.co.za/' },
    { id: 'rad6', title: 'East Coast Radio', artist: 'Durban, SA', year: 'LIVE', genre: 'Pop Hits', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'KwaZulu-Natal commercial station playing pop music and regional updates.', cast: ['ECR Team'], webUrl: 'https://www.ecr.co.za/' },
    { id: 'rad7', title: 'BBC Radio 1', artist: 'London, UK', year: 'LIVE', genre: 'Global Top 40', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'UK flagship station premiering international chart tracks and live lounge sessions.', cast: ['BBC DJs'], webUrl: 'https://www.bbc.co.uk/sounds/play/live:bbc_radio_one' },
    { id: 'rad8', title: 'Capital FM UK', artist: 'London, UK', year: 'LIVE', genre: 'Pop / Dance', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'UK hit music radio playing dance, electronic, and global pop music.', cast: ['Capital DJs'], webUrl: 'https://www.capitalfm.com/' },
    { id: 'rad9', title: 'SomaFM Groove Salad', artist: 'San Francisco, US', year: 'LIVE', genre: 'Ambient / Chillout', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Commercial-free ambient lounge and downtempo electronic beats.', cast: ['SomaFM Curators'], audioUrl: 'https://ice1.somafm.com/groovesalad-128-mp3' },
    { id: 'rad10', title: 'Defected Radio', artist: 'Ibiza, ES', year: 'LIVE', genre: 'House & Techno', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'Deep house and electronic dance music broadcasts straight from Ibiza soundboards.', cast: ['Sam Divine'], webUrl: 'https://defected.com/' }
  ],
  documentaries: [
    { id: 'd1', title: 'Antarctica: Cold Hard Facts', year: '2025', genre: 'Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Uncovering polar ice-core data records spanning 800,000 years.', cast: ['British Antarctic Survey'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' },
    { id: 'd2', title: 'The Polar Deep', year: '2026', genre: 'Oceanography', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500', description: 'Deep sea submersibles mapping sub-glacial Antarctic ocean trenches.', cast: ['Deep Sea Research Team'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' },
    { id: 'd3', title: 'Secrets of the Cosmos', year: '2025', genre: 'Astronomy', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500', description: 'James Webb Telescope observations revealing early galaxy formation.', cast: ['NASA Astrophysicists'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd4', title: 'Artificial Horizon', year: '2026', genre: 'AI History', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'The rapid rise of neural networks from 2020 through 2026.', cast: ['AI Historians'], videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1' },
    { id: 'd5', title: 'The Coral Reef Collapse', year: '2025', genre: 'Ecology', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500', description: 'Marine biologists restoring barrier reefs under rising sea temperatures.', cast: ['Marine Ecologists'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd6', title: 'Silicon Revolution', year: '2026', genre: 'Microchips / Tech', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Inside semiconductor fabrication cleanrooms building 2nm AI processors.', cast: ['TSMC Engineers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd7', title: 'Chasing Storms', year: '2025', genre: 'Meteorology', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500', description: 'Severe weather chasers recording EF5 tornadoes in Tornado Alley.', cast: ['Storm Chasers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd8', title: 'Ancient Megastructures', year: '2026', genre: 'Archeology', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500', description: 'LiDAR technology mapping lost cities under Amazonian rainforest canopy.', cast: ['Archeology Pioneers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd9', title: 'Mind & Machine', year: '2025', genre: 'Neuroscience', image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500', description: 'Neural BCI interfaces restoring mobility for paralyzed patients.', cast: ['Neuralink Researchers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'd10', title: 'The Great Glacial Shift', year: '2026', genre: 'Geology', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Satellite imagery tracking global ice shelf movements.', cast: ['ESA Glaciologists'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' }
  ],
  aiTech: [
    { id: 'at1', title: 'Embodied Humanoid AI', author: 'Boston Dynamics & DeepMind', year: '2026', genre: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'Neural motor controls and real-time physical AI synthesis.', cast: ['Robotics Engineers'], videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1' },
    { id: 'at2', title: 'Autonomous AI Coding', author: 'OpenAI & MIT', year: '2026', genre: 'Software Eng', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Testing autonomous coding agents on large software repositories.', cast: ['MIT CSAIL'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at3', title: 'Quantum Neural Processing', author: 'IBM Quantum', year: '2026', genre: 'Quantum AI', image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500', description: 'Combining quantum computing qubits with deep learning matrix multiplication.', cast: ['IBM Quantum Team'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at4', title: 'Real-Time LLM Agents', author: 'Anthropic', year: '2026', genre: 'AI Safety', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'Constitutional AI methods for controlling multi-modal reasoning agents.', cast: ['Anthropic Researchers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at5', title: 'Neuromorphic Silicon Chips', author: 'Intel Labs', year: '2025', genre: 'Hardware Tech', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500', description: 'Brain-inspired spiking neural network microprocessors.', cast: ['Intel Engineers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at6', title: 'Autonomous Drone Swarms', author: 'DARPA', year: '2026', genre: 'Autonomous Systems', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500', description: 'Decentralized mesh networking for multi-drone search operations.', cast: ['DARPA System Labs'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at7', title: 'Generative Video Diffusion', author: 'Runway & Sora', year: '2026', genre: 'Generative Media', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Text-to-video synthesis generating photorealistic cinematic sequences.', cast: ['Video AI Lab'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at8', title: 'AI Protein Folding 3.0', author: 'DeepMind AlphaFold', year: '2025', genre: 'Bioinformatics', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500', description: 'Predicting molecular interactions for rapid drug discovery.', cast: ['AlphaFold Team'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at9', title: 'Edge AI Vision Systems', author: 'NVIDIA Jetson', year: '2026', genre: 'Edge Computing', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500', description: 'Low-power real-time object detection embedded on autonomous platforms.', cast: ['NVIDIA Robotics'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'at10', title: 'Synthetic Speech Synthesis', author: 'ElevenLabs', year: '2026', genre: 'Voice AI', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Zero-shot voice cloning with natural cadence and multi-lingual translation.', cast: ['Voice Audio Team'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  aiMusic: [
    { id: 'aim1', title: 'Suno AI Music Generator', year: '2026', genre: 'AI Music Engine', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Generates complete songs with custom genres and full arrangement.', cast: ['Suno Engine'], webUrl: 'https://suno.com/' },
    { id: 'aim2', title: 'AI Music SO', year: '2026', genre: 'Audio Suite', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Generative track engine for separation, stems, and electronic sound design.', cast: ['AI Music SO'], webUrl: 'https://aimusic.so/' },
    { id: 'aim3', title: 'Udio AI Music', year: '2026', genre: 'Generative Audio', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'High-fidelity audio generation platform specializing in vocal clarity.', cast: ['Udio Audio Lab'], webUrl: 'https://www.udio.com/' },
    { id: 'aim4', title: 'Soundraw Generative Music', year: '2025', genre: 'Background Scores', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Customizable beat and background score creator for video producers.', cast: ['Soundraw AI'], webUrl: 'https://soundraw.io/' },
    { id: 'aim5', title: 'AIVA Symphonic Engine', year: '2026', genre: 'Orchestral AI', image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500', description: 'Algorithmic classical and cinematic symphonic music composer.', cast: ['AIVA AI'], webUrl: 'https://www.aiva.ai/' },
    { id: 'aim6', title: 'Boomy Music Engine', year: '2025', genre: 'Instant Tracks', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Create and release original songs instantly to streaming networks.', cast: ['Boomy AI'], webUrl: 'https://boomy.com/' },
    { id: 'aim7', title: 'Splash Pro Music', year: '2026', genre: 'Beats & Vocals', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'Generative beat maker tailored for hip-hop and electronic producers.', cast: ['Splash Team'], webUrl: 'https://www.splashmusic.com/' },
    { id: 'aim8', title: 'Endel Neural Sounds', year: '2026', genre: 'Soundscapes', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'AI generative soundscapes synced to circadian rhythms.', cast: ['Endel Engineers'], webUrl: 'https://endel.io/' },
    { id: 'aim9', title: 'LALAL.AI Stem Splitter', year: '2025', genre: 'Audio Tools', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Vocal remover and stem isolation powered by neural network algorithms.', cast: ['LALAL.AI'], webUrl: 'https://www.lalal.ai/' },
    { id: 'aim10', title: 'Mubert Generative Stream', year: '2026', genre: 'Infinite Audio', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'Infinite generative music streams tailored for content creators.', cast: ['Mubert Engine'], webUrl: 'https://mubert.com/' }
  ],
  crypto: [
    { id: 'c1', title: 'Crypto Market Trends 2026', year: '2026', genre: 'Web3 & Finance', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Smart contract audits, layer 2 scaling solutions, and global decentralization.', cast: ['Web3 Analysts'], webUrl: 'https://www.google.com/search?q=crypto+news' },
    { id: 'c2', title: 'Ethereum Layer 2 Upgrades', year: '2026', genre: 'Blockchain', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Zero-knowledge rollups reducing transaction fees across networks.', cast: ['Core Developers'], webUrl: 'https://www.google.com/search?q=ethereum+news' },
    { id: 'c3', title: 'Bitcoin Halving Analysis', year: '2025', genre: 'Tokenomics', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Supply mechanics and institutional ETF inflow evaluations.', cast: ['Quant Traders'], webUrl: 'https://www.google.com/search?q=bitcoin+news' },
    { id: 'c4', title: 'DeFi Autonomous Agents', year: '2026', genre: 'DeFi', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'AI agents performing automated liquidity management and yield optimization.', cast: ['DeFi Architects'], webUrl: 'https://www.google.com/search?q=defi+agents' },
    { id: 'c5', title: 'Solana Speed Breakthroughs', year: '2025', genre: 'High Speed L1', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Firedancer client achieving sub-millisecond transaction finality.', cast: ['Solana Foundation'], webUrl: 'https://www.google.com/search?q=solana+news' },
    { id: 'c6', title: 'Web3 Security & Audits', year: '2026', genre: 'Cybersecurity', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'Preventing reentrancy attacks and smart contract exploits.', cast: ['CertiK Auditors'], webUrl: 'https://www.google.com/search?q=crypto+security' },
    { id: 'c7', title: 'Decentralized AI Compute', year: '2026', genre: 'DePIN', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Renting distributed GPU networks for training open-source LLMs.', cast: ['DePIN Engineers'], webUrl: 'https://www.google.com/search?q=depin+ai' },
    { id: 'c8', title: 'Tokenized Real World Assets', year: '2025', genre: 'RWA Finance', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500', description: 'Bringing real estate and treasury bonds onto public blockchain ledgers.', cast: ['RWA Founders'], webUrl: 'https://www.google.com/search?q=rwa+crypto' },
    { id: 'c9', title: 'Zero-Knowledge Cryptography', year: '2026', genre: 'Privacy Tech', image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500', description: 'Mathematical proofs for privacy-preserving verifiable computation.', cast: ['ZK Researchers'], webUrl: 'https://www.google.com/search?q=zk+proofs' },
    { id: 'c10', title: 'Global Crypto Regulation', year: '2026', genre: 'Policy', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', description: 'MiCA framework and international regulatory compliance overview.', cast: ['Legal Analysts'], webUrl: 'https://www.google.com/search?q=crypto+policy' }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalMode, setModalMode] = useState('watch');
  const [searchQuery, setSearchQuery] = useState('');
  const [localDriveItems, setLocalDriveItems] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_FEATURED.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scanStorageDrive = async () => {
    try {
      if ('showDirectoryPicker' in window) {
        const handle = await window.showDirectoryPicker();
        const files = [];
        for await (const entry of handle.values()) {
          if (entry.kind === 'file' && entry.name.match(/\.(mp4|mkv|avi|mp3|flac|wav|aac)$/i)) {
            const f = await entry.getFile();
            const isAudio = f.type.includes('audio') || entry.name.match(/\.(mp3|flac|wav|aac)$/i);
            files.push({
              id: entry.name,
              title: entry.name.replace(/\.[^/.]+$/, ""),
              year: new Date(f.lastModified).getFullYear().toString(),
              genre: isAudio ? 'External Audio File' : 'External Video File',
              type: isAudio ? 'music' : 'movie',
              image: isAudio ? 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500' : 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
              description: `Indexed from External Storage Drive (${handle.name}). File Size: ${(f.size / (1024 * 1024)).toFixed(2)} MB.`,
              cast: ['Local File Media'],
              audioUrl: isAudio ? URL.createObjectURL(f) : null,
              videoUrl: !isAudio ? URL.createObjectURL(f) : null
            });
          }
        }
        if (files.length > 0) setLocalDriveItems(files);
      }
    } catch (e) {
      console.log('Storage drive scan cancelled.');
    }
  };

  const executeGoogleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  const hero = HERO_FEATURED[heroIndex];

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Media Engine</title>
        <style>{`
          body { margin: 0; padding: 0; background-color: #141414; overflow-x: hidden; }
          ::-webkit-scrollbar { display: none; }
        `}</style>
      </Head>

      {/* Navigation Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <a href="https://movieboxhd.net/" target="_blank" rel="noreferrer" style={styles.movieBoxBtn}>
            📦 MovieBox
          </a>
          <a href="https://www.bokradio.co.za/" target="_blank" rel="noreferrer" style={styles.bokRadioBtn}>
            📻 Bok Radio
          </a>
          <a href="https://suno.com/" target="_blank" rel="noreferrer" style={styles.aiMusicBtn}>
            🎵 Suno
          </a>
          <a href="https://aimusic.so/" target="_blank" rel="noreferrer" style={styles.aiMusicBtn}>
            🎧 AI Music SO
          </a>
          <nav style={styles.navLinks}>
            {[
              { id: 'all', label: 'Home' },
              { id: 'movies', label: 'Movies' },
              { id: 'series', label: 'Series' },
              { id: 'adventure', label: 'Adventure & Surfing' },
              { id: 'tv', label: 'Live TV' },
              { id: 'radio', label: 'Radio' },
              { id: 'documentaries', label: 'Docs' },
              { id: 'aitech', label: 'AI & Tech' },
              { id: 'aimusic', label: 'AI Music' },
              { id: 'crypto', label: 'Crypto' }
            ].map((t) => (
              <span
                key={t.id}
                style={activeTab === t.id ? styles.activeNav : styles.navLink}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </span>
            ))}
          </nav>
        </div>

        <div style={styles.headerRight}>
          <button onClick={scanStorageDrive} style={styles.usbBtn}>🔌 Drive Scan</button>
          <form onSubmit={executeGoogleSearch} style={styles.searchBox}>
            <input
              type="text"
              placeholder="Search Google..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <button type="submit" style={styles.searchBtn}>🔍</button>
          </form>
        </div>
      </header>

      {/* Dynamic Billboard Hero */}
      <div style={{ ...styles.billboard, backgroundImage: `linear-gradient(to top, #141414 5%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.8) 20%, transparent 60%), url("${hero.bgImage}")` }}>
        <div style={styles.billboardContent}>
          <span style={styles.badge}>{hero.badge}</span>
          <h2 style={styles.billboardTitle}>{hero.title}</h2>
          <p style={styles.billboardDesc}>{hero.desc}</p>
          <button style={styles.playBtn} onClick={() => { setSelectedItem(hero); setModalMode(hero.videoUrl ? 'watch' : 'external'); }}>
            ▶ Launch Title
          </button>
        </div>
        <div style={styles.dotsContainer}>
          {HERO_FEATURED.map((_, idx) => (
            <span
              key={idx}
              style={idx === heroIndex ? styles.activeDot : styles.dot}
              onClick={() => setHeroIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Main Content Rows (10 Items Each) */}
      <main style={styles.main}>
        {/* EXTERNAL HDD / SSD / USB SCANNER ROW */}
        {localDriveItems.length > 0 && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🔌 External Storage Files (HDD / SSD / USB Drive)</h3>
            <div style={styles.slider}>
              {localDriveItems.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode(item.audioUrl ? 'listen' : 'watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TOP 10 TODAY */}
        {(activeTab === 'all' || activeTab === 'top10') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>Top 10 Media Today</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.top10.map((item) => (
                <div key={item.id} style={styles.top10Card} onClick={() => { setSelectedItem(item); setModalMode(item.audioUrl ? 'listen' : (item.videoUrl ? 'watch' : 'external')); }}>
                  <span style={styles.rankNum}>{item.rank}</span>
                  <div style={styles.cardImgWrapper}>
                    <img src={item.image} alt={item.title} style={styles.cardImg} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FEATURE MOVIES */}
        {(activeTab === 'all' || activeTab === 'movies') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎬 Feature Movies</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.movies.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode(item.videoUrl ? 'watch' : 'external'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.year} • {item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TV SERIES */}
        {(activeTab === 'all' || activeTab === 'series') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📺 TV Series</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.series.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.year} • {item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ADVENTURE, SURFING & RED BULL */}
        {(activeTab === 'all' || activeTab === 'adventure') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🏄 Extreme Sports, Surfing & Red Bull Adventure</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.adventureSports.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LIVE TV STATIONS */}
        {(activeTab === 'all' || activeTab === 'tv') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📡 Live TV Channels & Streams</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.tvStations.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode(item.videoUrl ? 'watch' : 'external'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RADIO STATIONS */}
        {(activeTab === 'all' || activeTab === 'radio') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📻 South African & Global Radio Stations</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.radioStations.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode(item.audioUrl ? 'listen' : 'external'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.artist}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DOCUMENTARIES */}
        {(activeTab === 'all' || activeTab === 'documentaries') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🧊 Verified Science & Polar Documentaries</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.documentaries.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.year} • {item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERT AI & TECH */}
        {(activeTab === 'all' || activeTab === 'aitech') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🤖 Expert AI, Robotics & AI Coding Research</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.aiTech.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI MUSIC PLATFORMS */}
        {(activeTab === 'all' || activeTab === 'aimusic') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎵 Generative AI Music Platforms</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.aiMusic.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('external'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CRYPTO */}
        {(activeTab === 'all' || activeTab === 'crypto') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>⚡ Crypto & Decentralized Tech</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.crypto.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('external'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.year} • {item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Netflix Inspector Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>
            <div style={styles.modalHeader}>
              <img src={selectedItem.image} alt={selectedItem.title} style={styles.modalPoster} />
              <div>
                <h2 style={{ margin: '0 0 5px 0' }}>{selectedItem.title}</h2>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={styles.genreTag}>{selectedItem.genre}</span>
                  {selectedItem.year && <span style={{ fontSize: '12px', color: '#AAA' }}>{selectedItem.year}</span>}
                </div>
                <p style={{ fontSize: '13px', color: '#CCC', lineHeight: '1.4', margin: '0 0 10px 0' }}>{selectedItem.description}</p>
                {selectedItem.cast && <p style={{ fontSize: '11px', color: '#888', margin: '2px 0' }}><strong>Cast / Contributors:</strong> {selectedItem.cast.join(', ')}</p>}
                {selectedItem.author && <p style={{ fontSize: '11px', color: '#888', margin: '2px 0' }}><strong>Source Institution:</strong> {selectedItem.author}</p>}
              </div>
            </div>

            <div style={styles.modalTabs}>
              {selectedItem.audioUrl && (
                <button style={modalMode === 'listen' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('listen')}>🎧 Listen Stream</button>
              )}
              {selectedItem.videoUrl && (
                <button style={modalMode === 'watch' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('watch')}>🎬 Watch Stream</button>
              )}
              {selectedItem.webUrl && (
                <button style={styles.activeTabBtn} onClick={() => window.open(selectedItem.webUrl, '_blank')}>🌐 Open Official Site</button>
              )}
            </div>

            <div style={styles.modalBody}>
              {modalMode === 'listen' && selectedItem.audioUrl && (
                <audio controls autoPlay src={selectedItem.audioUrl} style={{ width: '100%' }} />
              )}
              {modalMode === 'watch' && selectedItem.videoUrl && (
                <iframe src={selectedItem.videoUrl} style={{ width: '100%', height: '320px', border: 'none', borderRadius: '4px' }} allow="autoplay" title={selectedItem.title} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', width: '100%', overflowX: 'hidden' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 3%', height: '68px', backgroundColor: 'rgba(20, 20, 20, 0.95)', position: 'sticky', top: 0, zIndex: 100, boxSizing: 'border-box' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '10px' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { color: '#E50914', margin: '0 10px 0 0', fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.5px' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  bokRadioBtn: { backgroundColor: '#FF8800', color: '#FFF', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  aiMusicBtn: { backgroundColor: '#0070F3', color: '#FFF', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  navLinks: { display: 'flex', gap: '10px', marginLeft: '10px' },
  navLink: { color: '#E5E5E5', cursor: 'pointer', fontSize: '11px', transition: 'color 0.2s', whiteSpace: 'nowrap' },
  activeNav: { color: '#FFF', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px', whiteSpace: 'nowrap' },
  usbBtn: { backgroundColor: '#28a745', color: '#FFF', border: 'none', padding: '5px 8px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '11px' },
  searchBox: { display: 'flex', backgroundColor: '#000', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '4px 6px', outline: 'none', width: '100px', fontSize: '11px' },
  searchBtn: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '4px 8px', cursor: 'pointer' },
  billboard: { height: '55vh', backgroundSize: 'cover', backgroundPosition: 'center top', display: 'flex', alignItems: 'flex-end', padding: '0 4% 40px 4%', boxSizing: 'border-box', position: 'relative' },
  billboardContent: { maxWidth: '550px' },
  badge: { color: '#E50914', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px' },
  billboardTitle: { fontSize: '38px', margin: '8px 0', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' },
  billboardDesc: { fontSize: '13px', color: '#DDD', lineHeight: '1.4', margin: '0 0 15px 0' },
  playBtn: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  dotsContainer: { position: 'absolute', bottom: '15px', right: '4%', display: 'flex', gap: '8px' },
  dot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#555', cursor: 'pointer' },
  activeDot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E50914', cursor: 'pointer' },
  main: { padding: '20px 4%' },
  row: { marginBottom: '30px' },
  rowTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  slider: { display: 'flex', gap: '12px', overflowX: 'scroll', paddingBottom: '10px' },
  card: { flex: '0 0 160px', cursor: 'pointer' },
  cardImgWrapper: { width: '120px', height: '170px', borderRadius: '4px', overflow: 'hidden' },
  cardImg: { width: '160px', height: '230px', objectFit: 'cover', borderRadius: '4px' },
  cardText: { fontSize: '12px', fontWeight: 'bold', margin: '6px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  cardSub: { fontSize: '10px', color: '#888', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  top10Card: { display: 'flex', alignItems: 'center', cursor: 'pointer', flex: '0 0 180px' },
  rankNum: { fontSize: '110px', fontWeight: '900', color: '#141414', WebkitTextStroke: '3px #555', lineHeight: '0.7', marginRight: '-25px', zIndex: 1 },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '650px', borderRadius: '8px', padding: '25px', position: 'relative' },
  closeBtn: { position: 'absolute', top: '15px', right: '15px', backgroundColor: 'transparent', color: '#FFF', border: 'none', fontSize: '18px', cursor: 'pointer' },
  modalHeader: { display: 'flex', gap: '20px', marginBottom: '20px' },
  modalPoster: { width: '130px', height: '180px', objectFit: 'cover', borderRadius: '4px' },
  genreTag: { display: 'inline-block', backgroundColor: '#E50914', padding: '3px 8px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold' },
  modalTabs: { display: 'flex', gap: '10px', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' },
  tabBtn: { backgroundColor: '#222', color: '#AAA', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
  activeTabBtn: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  modalBody: { backgroundColor: '#111', padding: '15px', borderRadius: '4px' }
};
