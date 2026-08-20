import { useState, useEffect } from 'react';
import Head from 'next/head';

const HERO_FEATURED = [
  {
    id: 'f1',
    badge: '🤖 AI & ROBOTICS DEVELOPMENT',
    title: 'HUMANOID ROBOTICS IN 2026',
    desc: 'Breakthroughs in embodied AI reasoning and neural motor control enabling bipedal robots to perform complex real-world manufacturing and domestic tasks.',
    tag: 'TECH NEWS',
    url: 'https://www.youtube.com/results?search_query=ai+robotics+humanoid+2026'
  },
  {
    id: 'f2',
    badge: '💻 AI CODING & AGENTS',
    title: 'AUTONOMOUS SOFTWARE ENGINEERS',
    desc: 'Next-gen LLMs and coding agents now auto-fix production bugs, refactor full-stack repositories, and generate deployment pipelines independently.',
    tag: 'CODING NEWS',
    url: 'https://www.youtube.com/results?search_query=ai+coding+agents+news'
  },
  {
    id: 'f3',
    badge: '🧊 FEATURE DOCUMENTARY',
    title: 'ANTARCTICA: TRUTH VS MYTH',
    desc: 'Deep dive into verified climate ice-core science versus secret bases, Operation Highjump records, and ice wall conspiracies.',
    tag: 'DOCUMENTARY',
    url: 'https://www.youtube.com/results?search_query=antarctica+documentary'
  }
];

const CATEGORIZED_MEDIA = {
  sa_media: [
    { id: 'sa1', name: 'SABC News Live', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', tag: 'NEWS', url: 'https://iptv-org.github.io/iptv/countries/za.m3u', year: 'LIVE' },
    { id: 'sa2', name: 'eNCA News Stream', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', tag: 'LIVE', url: 'https://iptv-org.github.io/iptv/countries/za.m3u', year: 'LIVE' },
    { id: 'sa3', name: 'WildEarth Safari Live', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500', tag: 'NATURE', url: 'https://wildearth.tv', year: 'LIVE' },
    { id: 'sa4', name: 'Bok Radio 98.9 FM Cape Town', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'RADIO', url: 'https://stream.bokradio.co.za/bokradio', year: 'LIVE', audioUrl: 'https://stream.bokradio.co.za/bokradio' },
    { id: 'sa5', name: 'Jacaranda FM 94.2', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', tag: 'RADIO', url: 'https://jacarandafm.streamguys1.com/jacafm-hi', year: 'LIVE', audioUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi' },
    { id: 'sa6', name: 'KFM 94.5 Cape Town', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'RADIO', url: 'https://www.kfm.co.za', year: 'LIVE' },
    { id: 'sa7', name: 'Metro FM South Africa', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500', tag: 'URBAN', url: 'https://www.metrofm.co.za', year: 'LIVE' },
    { id: 'sa8', name: 'CapeTalk 567 AM', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=500', tag: 'TALK', url: 'https://www.capetalk.co.za', year: 'LIVE' },
    { id: 'sa9', name: 'East Coast Radio 94.0', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'HITS', url: 'https://www.ecr.co.za', year: 'LIVE' },
    { id: 'sa10', name: '702 News & Talk', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', tag: 'TALK', url: 'https://www.702.co.za', year: 'LIVE' }
  ],
  global_tv: [
    { id: 'g1', name: '🇬🇧 BBC News (UK)', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500', tag: 'UK', url: 'https://iptv-org.github.io/iptv/countries/uk.m3u', year: 'LIVE' },
    { id: 'g2', name: '🇺🇸 ABC News (USA)', image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500', tag: 'USA', url: 'https://iptv-org.github.io/iptv/countries/us.m3u', year: 'LIVE' },
    { id: 'g3', name: '🇫🇷 France 24 (France)', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', tag: 'FRANCE', url: 'https://iptv-org.github.io/iptv/countries/fr.m3u', year: 'LIVE' },
    { id: 'g4', name: '🇩🇪 Deutsche Welle (Germany)', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500', tag: 'GERMANY', url: 'https://iptv-org.github.io/iptv/countries/de.m3u', year: 'LIVE' },
    { id: 'g5', name: '🇮🇹 RAI News 24 (Italy)', image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=500', tag: 'ITALY', url: 'https://iptv-org.github.io/iptv/countries/it.m3u', year: 'LIVE' },
    { id: 'g6', name: '🇸🇪 SVT Play (Sweden)', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=500', tag: 'SWEDEN', url: 'https://iptv-org.github.io/iptv/countries/se.m3u', year: 'LIVE' },
    { id: 'g7', name: '🇨🇴 Caracol TV (Colombia)', image: 'https://images.unsplash.com/photo-1533699224246-6ad3b3862535?w=500', tag: 'COLOMBIA', url: 'https://iptv-org.github.io/iptv/countries/co.m3u', year: 'LIVE' },
    { id: 'g8', name: '🇮🇪 RTE News (Ireland)', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=500', tag: 'IRELAND', url: 'https://iptv-org.github.io/iptv/countries/ie.m3u', year: 'LIVE' },
    { id: 'g9', name: '🇯🇵 NHK World (Japan)', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500', tag: 'JAPAN', url: 'https://iptv-org.github.io/iptv/countries/jp.m3u', year: 'LIVE' },
    { id: 'g10', name: '🇨🇦 CBC News Network (Canada)', image: 'https://images.unsplash.com/photo-1517935703635-27c707886130?w=500', tag: 'CANADA', url: 'https://iptv-org.github.io/iptv/countries/ca.m3u', year: 'LIVE' }
  ],
  crypto: [
    { id: 'c1', name: 'Bitcoin & Market Movements', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', tag: 'MARKET', url: 'https://coinmarketcap.com', year: 'LIVE' },
    { id: 'c2', name: 'CoinDesk Live Feed', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500', tag: 'NEWS', url: 'https://www.coindesk.com', year: 'LIVE' },
    { id: 'c3', name: 'Top Crypto Influencers Hub', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500', tag: 'INFLUENCERS', url: 'https://twitter.com/i/topics/1321528653205737472', year: 'LIVE' },
    { id: 'c4', name: 'TradingView Realtime Charts', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500', tag: 'CHARTS', url: 'https://www.tradingview.com', year: 'LIVE' },
    { id: 'c5', name: 'CoinTelegraph Global', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', tag: 'NEWS', url: 'https://cointelegraph.com', year: 'LIVE' },
    { id: 'c6', name: 'Crypto Banter Live Stream', image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=500', tag: 'SHOW', url: 'https://www.youtube.com/c/CryptoBanterGroup', year: 'LIVE' },
    { id: 'c7', name: 'Glassnode On-Chain Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500', tag: 'METRICS', url: 'https://glassnode.com', year: 'LIVE' },
    { id: 'c8', name: 'Messari Crypto Intelligence', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500', tag: 'RESEARCH', url: 'https://messari.io', year: 'LIVE' },
    { id: 'c9', name: 'DefiLlama TVL Dashboard', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500', tag: 'DEFI', url: 'https://defillama.com', year: 'LIVE' },
    { id: 'c10', name: 'Binance Live Market Stream', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500', tag: 'EXCHANGE', url: 'https://www.binance.com', year: 'LIVE' }
  ],
  antarctica_docs: [
    { id: 'a1', name: 'Real Ice Core Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'TRUTH', url: 'https://www.youtube.com/results?search_query=antarctica+scientific+research+truth', year: 'DOC' },
    { id: 'a2', name: 'Ice Wall & Secret Base Myths', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'DEBUNK', url: 'https://www.youtube.com/results?search_query=antarctica+conspiracies+debunked', year: 'DOC' },
    { id: 'a3', name: 'Operation Highjump Exposed', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500', tag: 'HISTORY', url: 'https://www.youtube.com/results?search_query=operation+highjump+documentary', year: 'DOC' },
    { id: 'a4', name: 'Antarctica Under the Ice LiDAR', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'GEOLOGY', url: 'https://www.youtube.com/results?search_query=antarctica+under+the+ice+lidar', year: 'DOC' },
    { id: 'a5', name: 'The Shackleton Expedition', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'EXPEDITION', url: 'https://www.youtube.com/results?search_query=shackleton+endurance+antarctica', year: 'DOC' },
    { id: 'a6', name: 'Lake Vostok Subglacial Mysteries', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500', tag: 'SCIENCE', url: 'https://www.youtube.com/results?search_query=lake+vostok+documentary', year: 'DOC' },
    { id: 'a7', name: 'Admiral Byrd Flight Records', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500', tag: 'ARCHIVE', url: 'https://www.youtube.com/results?search_query=admiral+byrd+antarctica+interview', year: 'DOC' },
    { id: 'a8', name: 'McMurdo Station Life 365 Days', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'INSIDE', url: 'https://www.youtube.com/results?search_query=mcmurdo+station+antarctica+life', year: 'DOC' },
    { id: 'a9', name: 'Antarctic Treaty Geopolitics', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'POLITICS', url: 'https://www.youtube.com/results?search_query=antarctic+treaty+system+explained', year: 'DOC' },
    { id: 'a10', name: 'Thwaites Glacier Doomsday Ice', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500', tag: 'CLIMATE', url: 'https://www.youtube.com/results?search_query=thwaites+glacier+documentary', year: 'DOC' }
  ],
  aitech: [
    { id: 'at1', name: 'Humanoid AI Robots 2026', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', tag: 'ROBOTICS', url: 'https://www.youtube.com/results?search_query=humanoid+robotics+in+action', year: '2026' },
    { id: 'at2', name: 'AI Coding Agents & Monorepos', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', tag: 'SOFTWARE', url: 'https://www.youtube.com/results?search_query=ai+coding+agents+developer', year: '2026' },
    { id: 'at3', name: 'Quantum AI Systems Breakdown', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', tag: 'QUANTUM', url: 'https://www.youtube.com/results?search_query=quantum+computing+ai', year: '2026' },
    { id: 'at4', name: 'Autonomous Drone Swarms', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500', tag: 'SWARMS', url: 'https://www.youtube.com/results?search_query=autonomous+drone+swarms+ai', year: '2026' },
    { id: 'at5', name: 'Neural Engine Chips (M4/NVIDIA)', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', tag: 'HARDWARE', url: 'https://www.youtube.com/results?search_query=ai+hardware+chips+nvidia', year: '2026' },
    { id: 'at6', name: 'Brain-Computer Interfaces (BCI)', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500', tag: 'BCI', url: 'https://www.youtube.com/results?search_query=neuralink+bci+updates', year: '2026' },
    { id: 'at7', name: 'Open-Source LLMs Showcase', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', tag: 'MODELS', url: 'https://www.youtube.com/results?search_query=open+source+llms+local', year: '2026' },
    { id: 'at8', name: 'Embodied AI Motor Control', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', tag: 'MOTORS', url: 'https://www.youtube.com/results?search_query=embodied+ai+robotics', year: '2026' },
    { id: 'at9', name: 'Autonomous AI Agents Monorepo', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', tag: 'AGENTS', url: 'https://www.youtube.com/results?search_query=multi+agent+frameworks', year: '2026' },
    { id: 'at10', name: 'AGI Horizon & Research Papers', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', tag: 'RESEARCH', url: 'https://www.youtube.com/results?search_query=agi+research+updates', year: '2026' }
  ],
  music_audio: [
    { id: 'm1', name: 'Lo-Fi Chill Beats 24/7', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'CHILL', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk', year: 'LIVE' },
    { id: 'm2', name: 'Deep House World Radio', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', tag: 'HOUSE', url: 'https://www.youtube.com/results?search_query=deep+house+live+radio', year: 'LIVE' },
    { id: 'm3', name: 'Classic Rock HD Stream', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500', tag: 'ROCK', url: 'https://stream.zeno.fm/f3wvbbqmdg8uv', year: 'LIVE', audioUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv' },
    { id: 'm4', name: 'Global Hits FM Radio', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'POP', url: 'https://www.radio.net', year: 'LIVE' },
    { id: 'm5', name: 'Jazz Classics 24/7 Stream', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'JAZZ', url: 'https://www.youtube.com/results?search_query=jazz+radio+live', year: 'LIVE' },
    { id: 'm6', name: 'Synthwave & Retrowave Live', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', tag: 'SYNTH', url: 'https://www.youtube.com/results?search_query=synthwave+radio+live', year: 'LIVE' },
    { id: 'm7', name: 'Classical Masterpieces 24/7', image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500', tag: 'CLASSICAL', url: 'https://www.youtube.com/results?search_query=classical+music+live', year: 'LIVE' },
    { id: 'm8', name: 'Ambient Sleep & Focus Music', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', tag: 'FOCUS', url: 'https://www.youtube.com/results?search_query=ambient+focus+music', year: 'LIVE' },
    { id: 'm9', name: 'Heavy Metal Worldwide Station', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500', tag: 'METAL', url: 'https://www.youtube.com/results?search_query=heavy+metal+radio+live', year: 'LIVE' },
    { id: 'm10', name: 'Afrobeat Energy Hits', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'AFROBEAT', url: 'https://www.youtube.com/results?search_query=afrobeat+live+radio', year: 'LIVE' }
  ]
};

export default function Home() {
  const [categories, setCategories] = useState([
    { title: '🇿🇦 South Africa Live TV & Media', items: CATEGORIZED_MEDIA.sa_media },
    { title: '🌍 Global Free Live TV', items: CATEGORIZED_MEDIA.global_tv },
    { title: '📈 Crypto Movements, News & Influencers', items: CATEGORIZED_MEDIA.crypto },
    { title: '🧊 Antarctica: Scientific Truths vs Conspiracies', items: CATEGORIZED_MEDIA.antarctica_docs },
    { title: '🤖 AI, Robotics & Autonomous Agents', items: CATEGORIZED_MEDIA.aitech },
    { title: '📻 Live Music & Audio Streams', items: CATEGORIZED_MEDIA.music_audio }
  ]);

  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeDockMedia, setActiveDockMedia] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube');
  const [localDriveItems, setLocalDriveItems] = useState([]);

  // Auto-scrolling Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_FEATURED.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Jellyfin Dynamic Detection
  useEffect(() => {
    async function fetchLiveMedia() {
      try {
        const host = process.env.NEXT_PUBLIC_JELLYFIN_HOST || '';
        if (!host) return;
        const res = await fetch(`${host}/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        if (data.Items && data.Items.length > 0) {
          const liveRow = {
            title: '📡 Jellyfin Server & Mounted Drives',
            items: data.Items.slice(0, 10).map((item) => ({
              id: item.Id,
              name: item.Name,
              image: `${host}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450`,
              tag: item.Type,
              url: `${host}/web/index.html#/details?id=${item.Id}`,
              year: 'LOCAL'
            }))
          };
          setCategories((prev) => [liveRow, ...prev]);
        }
      } catch (err) {
        console.log('Jellyfin host offline - operating on active standard media.');
      }
    }
    fetchLiveMedia();
  }, []);

  // USB/HDD Scanner
  const scanUsbDrive = async () => {
    try {
      if ('showDirectoryPicker' in window) {
        const directoryHandle = await window.showDirectoryPicker();
        const driveItems = [];
        for await (const entry of directoryHandle.values()) {
          if (entry.kind === 'file' && entry.name.match(/\.(mp4|mkv|avi|mp3|flac)$/i)) {
            const file = await entry.getFile();
            driveItems.push({
              id: entry.name,
              name: entry.name,
              year: 'USB STORAGE',
              tag: file.type.includes('audio') ? 'AUDIO' : 'VIDEO',
              image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
              description: `Loaded from physical storage device: ${directoryHandle.name}`,
              audioUrl: file.type.includes('audio') ? URL.createObjectURL(file) : null,
              videoUrl: file.type.includes('video') ? URL.createObjectURL(file) : null
            });
          }
        }
        if (driveItems.length > 0) {
          setLocalDriveItems(driveItems);
        }
      }
    } catch (e) {
      console.log('Drive scanning cancelled.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const url = searchEngine === 'youtube'
      ? `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
      : `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(url, '_blank');
  };

  const onItemClick = (item) => {
    setSelectedItem(item);
    if (item.audioUrl || item.url) {
      setActiveDockMedia(item);
    }
  };

  const currentHero = HERO_FEATURED[heroIndex];

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Media Platform</title>
      </Head>

      {/* 📌 FIXED TOP HEADER */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <a href="https://movieboxhd.net/" target="_blank" rel="noreferrer" style={styles.movieBoxBtn}>
            📦 Movie Box HD
          </a>
          <button onClick={scanUsbDrive} style={styles.usbBtn}>
            🔌 Scan USB/HDD
          </button>
        </div>

        <form onSubmit={handleSearch} style={styles.searchForm}>
          <select value={searchEngine} onChange={(e) => setSearchEngine(e.target.value)} style={styles.searchSelect}>
            <option value="youtube">YouTube</option>
            <option value="google">Google</option>
          </select>
          <input
            type="text"
            placeholder={`Search ${searchEngine === 'youtube' ? 'YouTube' : 'Google'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>🔍</button>
        </form>
      </header>

      {/* 📌 FIXED TOP CATEGORY FILTER BAR */}
      <nav style={styles.categoryBar}>
        {['all', 'sa', 'global', 'crypto', 'antarctica', 'aitech', 'music'].map((tab) => (
          <button
            key={tab}
            style={activeCategoryTab === tab ? styles.activeCategoryTab : styles.categoryTab}
            onClick={() => setActiveCategoryTab(tab)}
          >
            {tab === 'all' && '🔥 All Rows'}
            {tab === 'sa' && '🇿🇦 SA Media'}
            {tab === 'global' && '🌍 Global TV'}
            {tab === 'crypto' && '📈 Crypto'}
            {tab === 'antarctica' && '🧊 Antarctica'}
            {tab === 'aitech' && '🤖 AI & Tech'}
            {tab === 'music' && '🎵 Radio & Beats'}
          </button>
        ))}
      </nav>

      {/* 📜 MIDDLE SCROLLABLE BODY CONTENT */}
      <div style={styles.scrollableContent}>
        {/* Featured Hero */}
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <span style={styles.heroBadge}>{currentHero.badge}</span>
            <h2 style={styles.heroTitle}>{currentHero.title}</h2>
            <p style={styles.heroDesc}>{currentHero.desc}</p>
            <button style={styles.playButton} onClick={() => window.open(currentHero.url, '_blank')}>
              ▶ Stream Live Spotlight
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

        {/* Local Storage Row */}
        {localDriveItems.length > 0 && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🔌 Connected Storage Drive Media ({localDriveItems.length})</h3>
            <div style={styles.slider}>
              {localDriveItems.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => onItemClick(item)}>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.name} style={styles.poster} />
                    <span style={styles.cardTag}>{item.tag}</span>
                  </div>
                  <p style={styles.cardTitle}>{item.name}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Media Carousels */}
        {categories.map((cat, idx) => {
          if (activeCategoryTab !== 'all') {
            if (activeCategoryTab === 'sa' && !cat.title.includes('South Africa')) return null;
            if (activeCategoryTab === 'global' && !cat.title.includes('Global')) return null;
            if (activeCategoryTab === 'crypto' && !cat.title.includes('Crypto')) return null;
            if (activeCategoryTab === 'antarctica' && !cat.title.includes('Antarctica')) return null;
            if (activeCategoryTab === 'aitech' && !cat.title.includes('AI')) return null;
            if (activeCategoryTab === 'music' && !cat.title.includes('Music')) return null;
          }

          return (
            <section key={idx} style={styles.row}>
              <h3 style={styles.rowTitle}>{cat.title}</h3>
              <div style={styles.slider}>
                {cat.items.map((item) => (
                  <div key={item.id} style={styles.card} onClick={() => onItemClick(item)}>
                    <div style={styles.posterWrapper}>
                      <img src={item.image} alt={item.name} style={styles.poster} />
                      <span style={styles.cardTag}>{item.tag}</span>
                    </div>
                    <p style={styles.cardTitle}>{item.name}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* 📌 FIXED BOTTOM MEDIA CONTROL DOCK */}
      <footer style={styles.bottomDock}>
        <div style={styles.dockInfo}>
          <span style={{ fontSize: '18px' }}>🎧</span>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#FFF' }}>
              {activeDockMedia ? activeDockMedia.name : 'Netflix Universal Media Player active'}
            </div>
            <div style={{ fontSize: '11px', color: '#AAA' }}>
              {activeDockMedia ? activeDockMedia.tag || 'Ready' : 'Select any media stream above'}
            </div>
          </div>
        </div>

        <div style={styles.dockPlayer}>
          {activeDockMedia && activeDockMedia.audioUrl ? (
            <audio controls autoPlay src={activeDockMedia.audioUrl} style={{ height: '32px', width: '280px' }} />
          ) : (
            <button
              style={styles.dockActionBtn}
              onClick={() => activeDockMedia?.url && window.open(activeDockMedia.url, '_blank')}
            >
              ▶ Launch Active Media Link
            </button>
          )}
        </div>
      </footer>

      {/* Item Inspector Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>

            <div style={styles.modalHeader}>
              <img src={selectedItem.image} alt={selectedItem.name} style={styles.modalPoster} />
              <div>
                <h2>{selectedItem.name}</h2>
                <p style={styles.genreBadge}>{selectedItem.tag}</p>
                <p style={styles.modalDesc}>
                  {selectedItem.description || 'Live streamed station, TV broadcast channel, or video media resource.'}
                </p>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <button
                    style={styles.modalActionBtn}
                    onClick={() => {
                      if (selectedItem.url) window.open(selectedItem.url, '_blank');
                    }}
                  >
                    ▶ Launch Direct Channel / Stream
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', height: '100vh', display: 'flex', flexDirection: 'column', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', overflow: 'hidden' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 30px', backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: '1px solid #222', zIndex: 100, flexWrap: 'wrap', gap: '10px', flexShrink: 0 },
  logo: { color: '#E50914', margin: 0, fontSize: '26px', fontWeight: 'bold', letterSpacing: '1px' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' },
  usbBtn: { backgroundColor: '#28a745', color: '#FFF', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  searchForm: { display: 'flex', alignItems: 'center', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden', border: '1px solid #333' },
  searchSelect: { backgroundColor: '#222', color: '#FFF', border: 'none', padding: '6px 8px', fontSize: '12px', outline: 'none' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '6px 10px', outline: 'none', width: '180px', fontSize: '12px' },
  searchButton: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '6px 10px', cursor: 'pointer' },
  categoryBar: { display: 'flex', gap: '10px', padding: '10px 30px', backgroundColor: '#000', borderBottom: '1px solid #222', overflowX: 'auto', flexShrink: 0, zIndex: 90 },
  categoryTab: { backgroundColor: '#181818', color: '#AAA', border: 'none', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', whiteSpace: 'nowrap' },
  activeCategoryTab: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' },
  scrollableContent: { flex: 1, overflowY: 'auto', padding: '20px 30px 90px 30px' },
  hero: { height: '35vh', minHeight: '220px', backgroundImage: 'linear-gradient(to top, #141414, transparent 70%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px', position: 'relative', borderRadius: '8px', marginBottom: '25px' },
  heroContent: { maxWidth: '600px' },
  heroBadge: { color: '#E50914', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px' },
  heroTitle: { fontSize: '28px', margin: '4px 0', fontWeight: 'bold' },
  heroDesc: { fontSize: '12px', color: '#CCC', lineHeight: '1.4' },
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
  dotsContainer: { position: 'absolute', bottom: '15px', right: '20px', display: 'flex', gap: '6px' },
  dot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#555', cursor: 'pointer' },
  activeDot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E50914', cursor: 'pointer' },
  row: { marginBottom: '30px' },
  rowTitle: { fontSize: '17px', fontWeight: 'bold', marginBottom: '10px', color: '#E5E5E5' },
  slider: { display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' },
  card: { flex: '0 0 150px', cursor: 'pointer' },
  posterWrapper: { position: 'relative', width: '150px', height: '210px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#222' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  cardTag: { position: 'absolute', top: '5px', right: '5px', backgroundColor: '#E50914', color: '#FFF', fontSize: '9px', padding: '2px 5px', borderRadius: '2px', fontWeight: 'bold' },
  cardTitle: { fontSize: '12px', margin: '6px 0 0 0', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#DDD' },
  bottomDock: { position: 'fixed', bottom: 0, left: 0, right: 0, height: '65px', backgroundColor: '#0B0B0B', borderTop: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', zIndex: 1000 },
  dockInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  dockPlayer: { display: 'flex', alignItems: 'center' },
  dockActionBtn: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
  modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '600px', borderRadius: '8px', padding: '20px', position: 'relative' },
  closeBtn: { position: 'absolute', top: '12px', right: '12px', backgroundColor: 'transparent', color: '#FFF', border: 'none', fontSize: '18px', cursor: 'pointer' },
  modalHeader: { display: 'flex', gap: '15px' },
  modalPoster: { width: '120px', height: '170px', objectFit: 'cover', borderRadius: '4px' },
  genreBadge: { display: 'inline-block', backgroundColor: '#333', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', marginTop: '5px' },
  modalDesc: { fontSize: '12px', color: '#DDD', lineHeight: '1.4', marginTop: '10px' },
  modalActionBtn: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }
};
