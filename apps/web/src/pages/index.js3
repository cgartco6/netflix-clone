import { useState, useEffect } from 'react';
import Head from 'next/head';

const MEDIA_CATEGORIES = [
  {
    title: '▶ Continue Watching',
    items: [
      { id: 'cw1', name: 'Cyberpunk 2099 (S1:E3)', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', tag: '72% WATCHED', url: 'https://www.youtube.com/results?search_query=cyberpunk+movie' },
      { id: 'cw2', name: 'Antarctica: Truth vs Myth', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: '45m LEFT', url: 'https://www.youtube.com/results?search_query=antarctica+documentary' },
      { id: 'cw3', name: 'Bok Radio Live', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'RESUME AUDIO', url: 'https://www.bokradio.co.za' }
    ]
  },
  {
    title: '🤖 AI Music Generation Tools',
    items: [
      { id: 'ai1', name: 'Suno AI Music Generator', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', tag: 'AI TOOL', url: 'https://suno.com' },
      { id: 'ai2', name: 'AiMusic.so Platform', image: 'https://images.unsplash.com/photo-1614680376593-902f749f705d?w=500', tag: 'AI TOOL', url: 'https://aimusic.so' }
    ]
  },
  {
    title: '🎸 Classic, Contemporary & Alternative Rock',
    items: [
      { id: 'r1', name: 'Classic Rock Legends 24/7', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500', tag: 'CLASSIC', url: 'https://www.youtube.com/results?search_query=classic+rock+live' },
      { id: 'r2', name: 'Contemporary Rock Hits', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500', tag: 'MODERN', url: 'https://www.youtube.com/results?search_query=contemporary+rock' },
      { id: 'r3', name: 'Alternative Rock Essentials', image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500', tag: 'ALT ROCK', url: 'https://www.youtube.com/results?search_query=alternative+rock+live' }
    ]
  },
  {
    title: '⚡ Heavy Metal & Hard Rock',
    items: [
      { id: 'hm1', name: 'Heavy Metal Mayhem Live', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'HEAVY METAL', url: 'https://www.youtube.com/results?search_query=heavy+metal+radio+live' },
      { id: 'hm2', name: 'Thrash & Death Metal Radio', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500', tag: 'EXTREME', url: 'https://www.youtube.com/results?search_query=thrash+metal+stream' }
    ]
  },
  {
    title: '📻 South African Live Radio Stations',
    items: [
      { id: 'sar1', name: 'Bok Radio 98.9 FM', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'SA RADIO', url: 'https://www.bokradio.co.za' },
      { id: 'sar2', name: 'Jacaranda FM', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', tag: 'SA RADIO', url: 'https://www.jacarandafm.com' },
      { id: 'sar3', name: 'KFM 94.5', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'CAPETOWN', url: 'https://www.kfm.co.za' },
      { id: 'sar4', name: 'East Coast Radio', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500', tag: 'KZN', url: 'https://www.ecr.co.za' },
      { id: 'sar5', name: 'Metro FM', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500', tag: 'NATIONAL', url: 'https://www.metrofm.co.za' }
    ]
  },
  {
    title: '🇿🇦 South Africa Live TV & Channels',
    items: [
      { id: 'sa1', name: 'SABC News Live', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', tag: 'NEWS', url: 'https://iptv-org.github.io/iptv/countries/za.m3u' },
      { id: 'sa2', name: 'eNCA Stream', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', tag: 'LIVE', url: 'https://iptv-org.github.io/iptv/countries/za.m3u' },
      { id: 'sa3', name: 'WildEarth Safari HD', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500', tag: 'NATURE', url: 'https://wildearth.tv' }
    ]
  },
  {
    title: '🌍 Global Free Live TV (UK, USA, FR, DE, IT, SE, CO, IE)',
    items: [
      { id: 'g1', name: '🇬🇧 BBC News (UK)', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500', tag: 'UK', url: 'https://iptv-org.github.io/iptv/countries/uk.m3u' },
      { id: 'g2', name: '🇺🇸 ABC News (USA)', image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500', tag: 'USA', url: 'https://iptv-org.github.io/iptv/countries/us.m3u' },
      { id: 'g3', name: '🇫🇷 France 24 (France)', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', tag: 'FRANCE', url: 'https://iptv-org.github.io/iptv/countries/fr.m3u' },
      { id: 'g4', name: '🇩🇪 Deutsche Welle (Germany)', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500', tag: 'GERMANY', url: 'https://iptv-org.github.io/iptv/countries/de.m3u' },
      { id: 'g5', name: '🇮🇹 RAI News 24 (Italy)', image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=500', tag: 'ITALY', url: 'https://iptv-org.github.io/iptv/countries/it.m3u' },
      { id: 'g6', name: '🇸🇪 SVT Play (Sweden)', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=500', tag: 'SWEDEN', url: 'https://iptv-org.github.io/iptv/countries/se.m3u' },
      { id: 'g7', name: '🇨🇴 Caracol TV (Colombia)', image: 'https://images.unsplash.com/photo-1533699224246-6ad3b3862535?w=500', tag: 'COLOMBIA', url: 'https://iptv-org.github.io/iptv/countries/co.m3u' },
      { id: 'g8', name: '🇮🇪 RTE News (Ireland)', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=500', tag: 'IRELAND', url: 'https://iptv-org.github.io/iptv/countries/ie.m3u' }
    ]
  },
  {
    title: '📈 Crypto Movements, News & Influencers',
    items: [
      { id: 'c1', name: 'Bitcoin & Market Movements', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', tag: 'MARKET', url: 'https://coinmarketcap.com' },
      { id: 'c2', name: 'CoinDesk Live Feed', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500', tag: 'NEWS', url: 'https://www.coindesk.com' },
      { id: 'c3', name: 'Crypto Influencers Hub', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500', tag: 'INFLUENCERS', url: 'https://twitter.com/i/topics/1321528653205737472' }
    ]
  },
  {
    title: '🧊 Antarctica: Scientific Truths vs Conspiracies',
    items: [
      { id: 'a1', name: 'The Real Ice Core Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'TRUTH', url: 'https://www.youtube.com/results?search_query=antarctica+scientific+research+truth' },
      { id: 'a2', name: 'Ice Wall & Secret Base Myths', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'CONSPIRACY', url: 'https://www.youtube.com/results?search_query=antarctica+conspiracies+debunked' },
      { id: 'a3', name: 'Operation Highjump Exposed', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500', tag: 'HISTORY', url: 'https://www.youtube.com/results?search_query=operation+highjump+documentary' }
    ]
  }
];

export default function Home() {
  const [categories, setCategories] = useState(MEDIA_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube');

  // Load local drive media dynamically if Jellyfin backend is reachable
  useEffect(() => {
    async function fetchLiveMedia() {
      try {
        const host = process.env.NEXT_PUBLIC_JELLYFIN_HOST || '';
        if (!host) return;
        const res = await fetch(`${host}/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        if (data.Items && data.Items.length > 0) {
          const liveRow = {
            title: '💾 Mounted HDDs & Local Library',
            items: data.Items.map((item) => ({
              id: item.Id,
              name: item.Name,
              image: `${host}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450`,
              tag: item.Type,
              url: `${host}/web/index.html#/details?id=${item.Id}`
            }))
          };
          setCategories((prev) => [liveRow, ...prev]);
        }
      } catch (err) {
        console.log('Local media server offline - displaying unified cloud media catalogue.');
      }
    }
    fetchLiveMedia();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const url = searchEngine === 'youtube' 
      ? `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
      : `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(url, '_blank');
  };

  const openItem = (url) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Media Hub</title>
      </Head>

      {/* Navigation Bar */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <a href="https://moviebox.ng" target="_blank" rel="noreferrer" style={styles.movieBoxBtn}>
            📦 Movie Box
          </a>
          <a href="https://suno.com" target="_blank" rel="noreferrer" style={styles.aiBtn}>
            🎵 Suno AI
          </a>
          <a href="https://aimusic.so" target="_blank" rel="noreferrer" style={styles.aiBtn}>
            🎶 AiMusic
          </a>
        </div>

        {/* Global Search Bar */}
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

      {/* Featured Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>FEATURED STREAM</span>
          <h2 style={styles.heroTitle}>BOK RADIO 98.9 FM & HEAVY METAL</h2>
          <p style={styles.heroDesc}>
            Stream local South African radio stations live, or generate original AI songs directly via Suno and AiMusic tools.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.playButton} onClick={() => window.open('https://www.bokradio.co.za', '_blank')}>▶ Listen to Bok Radio</button>
            <button style={styles.infoButton} onClick={() => window.open('https://suno.com', '_blank')}>✨ Create AI Music</button>
          </div>
        </div>
      </div>

      {/* Media Categories List */}
      <main style={styles.main}>
        {categories.map((cat, idx) => (
          <section key={idx} style={styles.row}>
            <h3 style={styles.rowTitle}>{cat.title}</h3>
            <div style={styles.slider}>
              {cat.items.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => openItem(item.url)}>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.name} style={styles.poster} />
                    <span style={styles.cardTag}>{item.tag}</span>
                  </div>
                  <p style={styles.cardTitle}>{item.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: 'rgba(0,0,0,0.9)', position: 'sticky', top: 0, zIndex: 100, flexWrap: 'wrap', gap: '10px' },
  logo: { color: '#E50914', margin: 0, fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' },
  aiBtn: { backgroundColor: '#333', color: '#FFF', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px', border: '1px solid #555' },
  searchForm: { display: 'flex', alignItems: 'center', backgroundColor: '#000', borderRadius: '4px', border: '1px solid #333', overflow: 'hidden' },
  searchSelect: { backgroundColor: '#222', color: '#FFF', border: 'none', padding: '8px', fontSize: '12px', outline: 'none' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '8px 12px', outline: 'none', width: '180px' },
  searchButton: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '8px 12px', cursor: 'pointer' },
  hero: { height: '55vh', backgroundImage: 'linear-gradient(to top, #141414, transparent 60%), url("https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=1600")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', padding: '0 40px 40px 40px' },
  heroContent: { maxWidth: '600px' },
  heroBadge: { color: '#E50914', fontWeight: 'bold', letterSpacing: '3px', fontSize: '12px' },
  heroTitle: { fontSize: '42px', margin: '10px 0', fontWeight: 'bold' },
  heroDesc: { fontSize: '14px', color: '#CCC', lineHeight: '1.4', marginBottom: '20px' },
  heroButtons: { display: 'flex', gap: '12px' },
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  infoButton: { backgroundColor: 'rgba(109, 109, 110, 0.7)', color: '#FFF', border: 'none', padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  main: { padding: '20px 40px' },
  row: { marginBottom: '35px' },
  rowTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#E5E5E5' },
  slider: { display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '10px' },
  card: { flex: '0 0 180px', cursor: 'pointer' },
  posterWrapper: { position: 'relative', width: '180px', height: '260px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#222' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  cardTag: { position: 'absolute', top: '8px', right: '8px', backgroundColor: '#E50914', color: '#FFF', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '2px' },
  cardTitle: { fontSize: '13px', color: '#E5E5E5', marginTop: '8px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
};
