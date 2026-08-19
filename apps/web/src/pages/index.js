import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const MEDIA_CATEGORIES = [
  {
    title: '▶ Continue Watching',
    items: [
      { id: 'cw1', name: 'Cyberpunk 2099', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', tag: 'S1:E3 • 72%', type: 'video', url: 'https://www.youtube.com/results?search_query=cyberpunk+2099' },
      { id: 'cw2', name: 'Antarctica: Truth vs Myth', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'DOCUMENTARY', type: 'video', url: 'https://www.youtube.com/results?search_query=antarctica+documentary' }
    ]
  },
  {
    title: '🎬 Trending Movies',
    items: [
      { id: 'm1', name: 'Cyberpunk 2099', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', tag: '4K ULTRA HD', type: 'link', url: 'https://www.youtube.com/results?search_query=cyberpunk+movie+trailer' },
      { id: 'm2', name: 'Interstellar Odyssey', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500', tag: 'SCI-FI', type: 'link', url: 'https://www.youtube.com/results?search_query=interstellar+trailer' },
      { id: 'm3', name: 'Neon Samurai', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500', tag: 'ACTION', type: 'link', url: 'https://www.youtube.com/results?search_query=action+movies' },
      { id: 'm4', name: 'The Lost Kingdom', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500', tag: 'FANTASY', type: 'link', url: 'https://www.youtube.com/results?search_query=fantasy+movies' }
    ]
  },
  {
    title: '📺 Popular TV Series',
    items: [
      { id: 's1', name: 'Silicon Shadows', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', tag: 'SEASON 2', type: 'link', url: 'https://www.youtube.com/results?search_query=tv+series+trailers' },
      { id: 's2', name: 'Northern Ice', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500', tag: 'SEASON 1', type: 'link', url: 'https://www.youtube.com/results?search_query=nordic+thriller' },
      { id: 's3', name: 'Dark Net Diaries', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500', tag: 'NEW EPISODE', type: 'link', url: 'https://www.youtube.com/results?search_query=tech+series' }
    ]
  },
  {
    title: '🧊 Feature Documentaries',
    items: [
      { id: 'd1', name: 'Antarctica: Real Science vs Myths', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', tag: 'SCIENCE', type: 'link', url: 'https://www.youtube.com/results?search_query=antarctica+documentary' },
      { id: 'd2', name: 'Deep Ocean Mysteries', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500', tag: 'NATURE', type: 'link', url: 'https://www.youtube.com/results?search_query=ocean+documentary' },
      { id: 'd3', name: 'Crypto Movements & Market Truths', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', tag: 'FINANCE', type: 'link', url: 'https://www.youtube.com/results?search_query=crypto+documentary' }
    ]
  },
  {
    title: '🇿🇦 South African Live Radio Streams',
    items: [
      { id: 'sar1', name: 'Bok Radio 98.9 FM', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', tag: 'LIVE STREAM', type: 'audio', streamUrl: 'https://stream.bokradio.co.za/bokradio', webUrl: 'https://www.bokradio.co.za/luister-live' },
      { id: 'sar2', name: 'Jacaranda FM 94.2', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', tag: 'LIVE STREAM', type: 'audio', streamUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi', webUrl: 'https://www.jacarandafm.com/listen-live' },
      { id: 'sar3', name: 'KFM 94.5 Cape Town', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'LIVE STREAM', type: 'audio', streamUrl: 'https://primedia.streamguys1.com/KFM', webUrl: 'https://www.kfm.co.za' },
      { id: 'sar4', name: 'Metro FM', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500', tag: 'LIVE STREAM', type: 'audio', streamUrl: 'https://sabc.streamguys1.com/metrofm', webUrl: 'https://www.metrofm.co.za' }
    ]
  },
  {
    title: '🎸 Rock & Heavy Metal Live Radio',
    items: [
      { id: 'rock1', name: 'Classic Rock Radio', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500', tag: 'CLASSIC ROCK', type: 'audio', streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv', webUrl: 'https://www.radio.net/s/classicrock' },
      { id: 'rock2', name: 'Heavy Metal Radio', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', tag: 'HEAVY METAL', type: 'audio', streamUrl: 'https://stream.zeno.fm/0r225880508uv', webUrl: 'https://www.radio.net/s/heavymetal' },
      { id: 'rock3', name: 'Alternative Rock Radio', image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500', tag: 'ALT ROCK', type: 'audio', streamUrl: 'https://stream.zeno.fm/3u8v83qmdg8uv', webUrl: 'https://www.radio.net/s/alternativerock' }
    ]
  },
  {
    title: '🌍 Global Free Live TV & News Channels',
    items: [
      { id: 'g1', name: '🇬🇧 BBC News Live', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500', tag: 'UK TV', type: 'link', url: 'https://iptv-org.github.io/iptv/countries/uk.m3u' },
      { id: 'g2', name: '🇺🇸 ABC News USA', image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500', tag: 'USA TV', type: 'link', url: 'https://iptv-org.github.io/iptv/countries/us.m3u' },
      { id: 'g3', name: '🇫🇷 France 24 HD', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', tag: 'FRANCE TV', type: 'link', url: 'https://iptv-org.github.io/iptv/countries/fr.m3u' },
      { id: 'g4', name: '🇩🇪 Deutsche Welle', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500', tag: 'GERMANY TV', type: 'link', url: 'https://iptv-org.github.io/iptv/countries/de.m3u' }
    ]
  }
];

export default function Home() {
  const [categories, setCategories] = useState(MEDIA_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube');
  
  // Live Audio Player State
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchLiveMedia() {
      try {
        const host = process.env.NEXT_PUBLIC_JELLYFIN_HOST || '';
        if (!host) return;
        const res = await fetch(`${host}/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        if (data.Items && data.Items.length > 0) {
          const liveRow = {
            title: '💾 Mounted Hard Drives & Media Server',
            items: data.Items.map((item) => ({
              id: item.Id,
              name: item.Name,
              image: `${host}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450`,
              tag: item.Type.toUpperCase(),
              type: 'link',
              url: `${host}/web/index.html#/details?id=${item.Id}`
            }))
          };
          setCategories((prev) => [liveRow, ...prev]);
        }
      } catch (err) {
        console.log('Local media server offline - serving cloud catalogue.');
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

  const handleCardClick = (item) => {
    if (item.type === 'audio') {
      setHasError(false);
      setCurrentTrack(item);
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = item.streamUrl;
        audioRef.current.load();
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.log("In-page stream blocked by CORS/HTTPS or autoplay policy. Opening stream player...", err);
              setHasError(true);
              setIsPlaying(false);
              // Fallback launcher if direct audio buffer fails due to browser security restrictions
              if (item.webUrl) window.open(item.webUrl, '_blank');
            });
        }
      }
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
    }
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Engine</title>
      </Head>

      {/* Embedded HTML5 Audio Element */}
      <audio 
        ref={audioRef} 
        onError={() => {
          if (currentTrack) {
            setHasError(true);
            setIsPlaying(false);
          }
        }}
        style={{ display: 'none' }} 
      />

      {/* Navigation Header */}
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

      {/* Featured Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>FEATURED DOCUMENTARY</span>
          <h2 style={styles.heroTitle}>ANTARCTICA: TRUTH VS MYTH</h2>
          <p style={styles.heroDesc}>
            Deep dive into verified climate ice-core science versus the secret bases, Operation Highjump, and flat-earth ice wall conspiracies.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.playButton} onClick={() => window.open('https://www.youtube.com/results?search_query=antarctica+documentary', '_blank')}>▶ Play Documentary</button>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <main style={styles.main}>
        {categories.map((cat, idx) => (
          <section key={idx} style={styles.row}>
            <h3 style={styles.rowTitle}>{cat.title}</h3>
            <div style={styles.slider}>
              {cat.items.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => handleCardClick(item)}>
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

      {/* Embedded Live Player Controller */}
      {currentTrack && (
        <div style={styles.playerBar}>
          <div style={styles.playerInfo}>
            <span style={styles.nowPlayingLabel}>NOW PLAYING LIVE:</span>
            <span style={styles.trackName}>{currentTrack.name}</span>
            {hasError && (
              <span style={styles.errorLabel}>
                (In-page audio stream blocked by HTTPS browser policy — <a href={currentTrack.webUrl} target="_blank" rel="noreferrer" style={{ color: '#FFF' }}>Click here to open live player</a>)
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={styles.audioControls} onClick={togglePlayPause}>
              {isPlaying ? '⏸ Pause Radio' : '▶ Play Radio'}
            </button>
            {currentTrack.webUrl && (
              <button style={styles.externalBtn} onClick={() => window.open(currentTrack.webUrl, '_blank')}>
                🔗 Open Web Player
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', paddingBottom: '70px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: 'rgba(0,0,0,0.9)', position: 'sticky', top: 0, zIndex: 100, flexWrap: 'wrap', gap: '10px' },
  logo: { color: '#E50914', margin: 0, fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' },
  aiBtn: { backgroundColor: '#333', color: '#FFF', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px', border: '1px solid #555' },
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
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  main: { padding: '20px 40px' },
  row: { marginBottom: '35px' },
  rowTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#E5E5E5' },
  slider: { display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '10px' },
  card: { flex: '0 0 180px', cursor: 'pointer' },
  posterWrapper: { position: 'relative', width: '180px', height: '260px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#222' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  cardTag: { position: 'absolute', top: '8px', right: '8px', backgroundColor: '#E50914', color: '#FFF', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '2px' },
  cardTitle: { fontSize: '13px', color: '#E5E5E5', marginTop: '8px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  playerBar: { position: 'fixed', bottom: 0, left: 0, right: 0, height: '65px', backgroundColor: '#000', borderTop: '2px solid #E50914', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', zIndex: 1000 },
  playerInfo: { display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' },
  nowPlayingLabel: { color: '#E50914', fontSize: '12px', fontWeight: 'bold' },
  trackName: { color: '#FFF', fontSize: '14px', fontWeight: 'bold' },
  errorLabel: { color: '#FFCC00', fontSize: '12px', marginLeft: '10px' },
  audioControls: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  externalBtn: { backgroundColor: '#333', color: '#FFF', border: '1px solid #555', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};
