import { useState, useEffect } from 'react';
import Head from 'next/head';

// Public high-quality visual mock data for immediate layout rendering
const MOCK_CATEGORIES = [
  {
    title: 'Popular Movies',
    items: [
      { id: 'm1', name: 'Cyberpunk 2099', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop', tag: '4K Ultra HD' },
      { id: 'm2', name: 'Interstellar Odyssey', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop', tag: 'Trending' },
      { id: 'm3', name: 'Neon Samurai', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop', tag: 'Action' },
      { id: 'm4', name: 'The Lost Kingdom', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop', tag: 'New' }
    ]
  },
  {
    title: 'Free Live TV Channels',
    items: [
      { id: 'tv1', name: 'BBC News Live', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop', tag: 'LIVE' },
      { id: 'tv2', name: 'Red Bull TV', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop', tag: 'SPORTS' },
      { id: 'tv3', name: 'Euronews HD', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop', tag: 'LIVE' },
      { id: 'tv4', name: 'NASA TV', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop', tag: '24/7' }
    ]
  },
  {
    title: 'Documentaries & Nature',
    items: [
      { id: 'd1', name: 'Deep Ocean Mysteries', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop', tag: '4K Nature' },
      { id: 'd2', name: 'Cosmos Unleashed', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop', tag: 'Space' },
      { id: 'd3', name: 'Wild Serengeti', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop', tag: 'Wildlife' }
    ]
  },
  {
    title: 'Music & Concerts',
    items: [
      { id: 'mu1', name: 'Lo-Fi Beats Live', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop', tag: 'Radio' },
      { id: 'mu2', name: 'EDM World Tour', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop', tag: 'Live Set' }
    ]
  }
];

export default function Home() {
  const [categories, setCategories] = useState(MOCK_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube'); // 'youtube' or 'google'

  // Attempt connection to live Jellyfin instance, keep mock fallback if server offline
  useEffect(() => {
    async function fetchLiveMedia() {
      try {
        const host = process.env.NEXT_PUBLIC_JELLYFIN_HOST || '';
        if (!host) return;
        const res = await fetch(`${host}/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        if (data.Items && data.Items.length > 0) {
          const liveRow = {
            title: 'Mounted HDDs & Live TV Stream',
            items: data.Items.map((item) => ({
              id: item.Id,
              name: item.Name,
              image: `${host}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450`,
              tag: item.Type
            }))
          };
          setCategories((prev) => [liveRow, ...prev]);
        }
      } catch (err) {
        console.log('Backend offline - rendering fallback mock data.');
      }
    }
    fetchLiveMedia();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    if (searchEngine === 'youtube') {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
    } else {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Streaming Engine</title>
      </Head>

      {/* Header Bar */}
      <header style={styles.header}>
        <h1 style={styles.logo}>NETFLIX</h1>
        
        {/* Search Bar for YouTube & Google */}
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <select 
            value={searchEngine} 
            onChange={(e) => setSearchEngine(e.target.value)}
            style={styles.searchSelect}
          >
            <option value="youtube">YouTube</option>
            <option value="google">Google</option>
          </select>
          <input
            type="text"
            placeholder={`Search ${searchEngine === 'youtube' ? 'YouTube Videos...' : 'Google...'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>🔍</button>
        </form>
      </header>

      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>N FEATURED</span>
          <h2 style={styles.heroTitle}>CYBERPUNK 2099</h2>
          <p style={styles.heroDesc}>
            In a neon-soaked metropolis, an rogue AI operative unlocks secrets stored across connected drive clusters and live encrypted video nodes.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.playButton}>▶ Play Now</button>
            <button style={styles.infoButton}>ℹ More Info</button>
          </div>
        </div>
      </div>

      {/* Content Categories Rows */}
      <main style={styles.main}>
        {categories.map((cat, idx) => (
          <section key={idx} style={styles.row}>
            <h3 style={styles.rowTitle}>{cat.title}</h3>
            <div style={styles.slider}>
              {cat.items.map((item) => (
                <div key={item.id} style={styles.card}>
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
  container: {
    backgroundColor: '#141414',
    minHeight: '100vh',
    color: '#FFF',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    flexWrap: 'wrap',
    gap: '10px'
  },
  logo: {
    color: '#E50914',
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: '4px',
    border: '1px solid #333',
    overflow: 'hidden',
  },
  searchSelect: {
    backgroundColor: '#222',
    color: '#FFF',
    border: 'none',
    padding: '8px',
    fontSize: '12px',
    outline: 'none',
  },
  searchInput: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFF',
    padding: '8px 12px',
    outline: 'none',
    width: '180px',
  },
  searchButton: {
    backgroundColor: '#E50914',
    border: 'none',
    color: '#FFF',
    padding: '8px 12px',
    cursor: 'pointer',
  },
  hero: {
    height: '60vh',
    backgroundImage: 'linear-gradient(to top, #141414, transparent 60%), url("https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '0 40px 40px 40px',
  },
  heroContent: {
    maxWidth: '600px',
  },
  heroBadge: {
    color: '#E50914',
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontSize: '12px',
  },
  heroTitle: {
    fontSize: '48px',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  heroDesc: {
    fontSize: '14px',
    color: '#CCC',
    lineHeight: '1.4',
    marginBottom: '20px',
  },
  heroButtons: {
    display: 'flex',
    gap: '12px',
  },
  playButton: {
    backgroundColor: '#FFF',
    color: '#000',
    border: 'none',
    padding: '10px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  infoButton: {
    backgroundColor: 'rgba(109, 109, 110, 0.7)',
    color: '#FFF',
    border: 'none',
    padding: '10px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  main: {
    padding: '20px 40px',
  },
  row: {
    marginBottom: '35px',
  },
  rowTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#E5E5E5',
  },
  slider: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
  card: {
    flex: '0 0 180px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  posterWrapper: {
    position: 'relative',
    width: '180px',
    height: '260px',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardTag: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#E50914',
    color: '#FFF',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '2px',
  },
  cardTitle: {
    fontSize: '13px',
    color: '#E5E5E5',
    marginTop: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
