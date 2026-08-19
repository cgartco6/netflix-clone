import { useState, useEffect } from 'react';
import Head from 'next/head';

const MEDIA_CATEGORIES = [
  {
    title: '🇿🇦 South Africa Live TV & Media',
    items: [
      { id: 'sa1', name: 'SABC News', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500', tag: 'NEWS', url: 'https://iptv-org.github.io/iptv/countries/za.m3u' },
      { id: 'sa2', name: 'eNCA Stream', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500', tag: 'LIVE', url: 'https://iptv-org.github.io/iptv/countries/za.m3u' },
      { id: 'sa3', name: 'WildEarth Safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500', tag: 'NATURE', url: 'https://wildearth.tv' }
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
      { id: 'c3', name: 'Top Crypto Influencers Hub', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500', tag: 'INFLUENCERS', url: 'https://twitter.com/i/topics/1321528653205737472' }
    ]
  },
  {
    title: '🧊 Antarctica: Scientific Truths vs Conspiracies',
    items: [
      { id: 'a1', name: 'The Real Ice Core Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'TRUTH', url: 'https://www.youtube.com/results?search_query=antarctica+scientific+research+truth' },
      { id: 'a2', name: 'Ice Wall & Secret Base Myths', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'CONSPIRACY', url: 'https://www.youtube.com/results?search_query=antarctica+conspiracies+debunked' },
      { id: 'a3', name: 'Operation Highjump Exposed', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500', tag: 'HISTORY', url: 'https://www.youtube.com/results?search_query=operation+highjump+documentary' }
    ]
  },
  {
    title: '📻 Live Music & Audio Stations',
    items: [
      { id: 'm1', name: 'Lo-Fi Chill Beats 24/7', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'CHILL', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
      { id: 'm2', name: 'Deep House World Radio', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', tag: 'HOUSE', url: 'https://www.youtube.com/results?search_query=deep+house+live+radio' },
      { id: 'm3', name: 'Global Hits FM', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'POP', url: 'https://www.radio.net' }
    ]
  }
];

export default function Home() {
  const [categories, setCategories] = useState(MEDIA_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube');

  // Load dynamically mapped drives & IPTV streams if local host is running
  useEffect(() => {
    async function fetchLiveMedia() {
      try {
        const host = process.env.NEXT_PUBLIC_JELLYFIN_HOST || '';
        if (!host) return;
        const res = await fetch(`${host}/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        if (data.Items && data.Items.length > 0) {
          const liveRow = {
            title: 'Mounted Drives & Local Media',
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
        console.log('Backend server offline - showing static categories.');
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
        <title>Netflix Universal Media Engine</title>
      </Head>

      {/* Header Navigation */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <a href="https://moviebox.ng" target="_blank" rel="noreferrer" style={styles.movieBoxBtn}>
            📦 Open Movie Box
          </a>
        </div>

        {/* Integrated Search Bar */}
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

      {/* Featured Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>DOCUMENTARY EXCLUSIVE</span>
          <h2 style={styles.heroTitle}>ANTARCTICA: TRUTH VS MYTH</h2>
          <p style={styles.heroDesc}>
            Explore the real ice core climate research vs. ice wall conspiracies, secret military bases, and Operation Highjump mysteries.
          </p>
          <div style={styles.heroButtons}>
            <button 
              style={styles.playButton} 
              onClick={() => window.open('https://www.youtube.com/results?search_query=antarctica+truths+vs+conspiracies', '_blank')}
            >
              ▶ Stream Feature
            </button>
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
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '8px 14px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' },
  searchForm: { display: 'flex', alignItems: 'center', backgroundColor: '#000', borderRadius: '4px', border: '1px solid #333', overflow: 'hidden' },
  searchSelect: { backgroundColor: '#222', color: '#FFF', border: 'none', padding: '8px', fontSize: '12px', outline: 'none' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '8px 12px', outline: 'none', width: '180px' },
  searchButton: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '8px 12px', cursor: 'pointer' },
  hero: { height: '55vh', backgroundImage: 'linear-gradient(to top, #141414, transparent 60%), url("https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1600")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', padding: '0 40px 40px 40px' },
  heroContent: { maxWidth: '600px' },
  heroBadge: { color: '#E50914', fontWeight: 'bold', letterSpacing: '3px', fontSize: '12px' },
  heroTitle: { fontSize: '42px', margin: '10px 0', fontWeight: 'bold' },
  heroDesc: { fontSize: '14px', color: '#CCC', lineHeight: '1.4', marginBottom: '20px' },
  heroButtons: { display: 'flex', gap: '12px' },
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '10px 24px', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
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
