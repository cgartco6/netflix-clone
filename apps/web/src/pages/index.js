import { useState, useEffect } from 'react';
import Head from 'next/head';

const HERO_FEATURED = [
  {
    id: 'f1',
    badge: '🤖 AI & ROBOTICS DEVELOPMENT',
    title: 'HUMANOID ROBOTICS IN 2026',
    desc: 'Breakthroughs in embodied AI reasoning and neural motor control are enabling bipedal robots to perform complex real-world tasks.',
    tag: 'TECH NEWS',
    bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600',
    url: 'https://www.youtube.com/results?search_query=ai+robotics+humanoid+2026'
  },
  {
    id: 'f2',
    badge: '⚡ CRYPTO & BLOCKCHAIN',
    title: 'CRYPTO MARKET REAL-TIME BREAKDOWNS',
    desc: 'Deep dive into decentralized finance, web3 autonomous agents, smart contract audits, and real-time global crypto trends.',
    tag: 'FINANCE & TECH',
    bgImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=1600',
    url: 'https://www.google.com/search?q=crypto+news'
  },
  {
    id: 'f3',
    badge: '🧊 FEATURE DOCUMENTARY',
    title: 'ANTARCTICA: TRUTH VS MYTH',
    desc: 'Deep dive into verified climate ice-core science versus secret bases, Operation Highjump records, and flat-earth ice wall conspiracies.',
    tag: 'DOCUMENTARY',
    bgImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1600',
    url: 'https://www.youtube.com/results?search_query=antarctica+documentary'
  },
  {
    id: 'f4',
    badge: '🎬 CYBERPUNK PREMIERE',
    title: 'CYBERPUNK 2099',
    desc: 'In a dystopian metropolis controlled by corporate syndicates, a rogue netrunner discovers a secret hidden inside human consciousness.',
    tag: 'NEW MOVIE',
    bgImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600',
    url: 'https://www.youtube.com/results?search_query=cyberpunk+movie+trailer'
  }
];

const CATEGORIZED_MEDIA = {
  top10: [
    { id: 't1', rank: 1, title: 'Cyberpunk 2099', year: '2026', type: 'movie', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Top ranked sci-fi thriller.' },
    { id: 't2', rank: 2, title: 'Silicon Shadows', year: '2026', type: 'series', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'Top ranked AI security drama.' },
    { id: 't3', rank: 3, title: 'Interstellar Odyssey', year: '2025', type: 'movie', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500', description: 'Space exploration adventure.' },
    { id: 't4', rank: 4, title: 'Antarctica Revealed', year: '2025', type: 'documentary', genre: 'Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Exploring expedition history.' },
    { id: 't5', rank: 5, title: 'Neural Net Agents', year: '2026', type: 'aitech', genre: 'AI Tech', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Inside autonomous software engineers.' },
    { id: 't6', rank: 6, title: 'Quantum Matrix', year: '2025', type: 'movie', genre: 'Action', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500', description: 'Virtual reality frontier.' },
    { id: 't7', rank: 7, title: 'Bok Radio Live', year: 'LIVE', type: 'music', genre: 'Afrikaans Rock', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live South African airwaves.', audioUrl: 'https://stream.bokradio.co.za/bokradio' },
    { id: 't8', rank: 8, title: 'Crypto Genesis', year: '2026', type: 'aitech', genre: 'Finance Tech', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Blockchain evolution.' },
    { id: 't9', rank: 9, title: 'Humanoid Dawn', year: '2026', type: 'aitech', genre: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'General robotics testing.' },
    { id: 't10', rank: 10, title: 'Jacaranda FM', year: 'LIVE', type: 'music', genre: 'Top Hits', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Top 40 music streaming.', audioUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi' }
  ],
  movies: Array.from({ length: 10 }).map((_, i) => ({
    id: `m${i+1}`,
    title: `Movie Feature Title ${i+1}`,
    year: `${2020 + i}`,
    type: 'movie',
    genre: i % 2 === 0 ? 'Sci-Fi / Action' : 'Thriller / Mystery',
    image: `https://picsum.photos/seed/movie${i+1}/500/750`,
    description: `Full movie writeup description detailing cast, storyline, and directorial release for index item ${i+1}.`,
    cast: ['Actor Alpha', 'Actor Beta', 'Actor Gamma'],
    director: 'Director Name',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  })),
  series: Array.from({ length: 10 }).map((_, i) => ({
    id: `s${i+1}`,
    title: `TV Series Title ${i+1}`,
    year: `Season ${i+1}`,
    type: 'series',
    genre: 'Drama / Tech',
    image: `https://picsum.photos/seed/series${i+1}/500/750`,
    description: `Series synopsis with multi-episode release updates and metadata summary for series ${i+1}.`,
    cast: ['Lead Star', 'Co-Star A', 'Co-Star B'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  })),
  music: Array.from({ length: 10 }).map((_, i) => ({
    id: `mu${i+1}`,
    title: i === 0 ? 'Bok Radio 98.9 FM' : i === 1 ? 'Jacaranda FM' : `Radio Channel ${i+1}`,
    artist: i < 2 ? 'South Africa Broadcast' : `Global Station ${i+1}`,
    year: 'LIVE',
    type: 'music',
    genre: 'Rock / Pop / Live Radio',
    image: `https://picsum.photos/seed/music${i+1}/500/750`,
    description: `Live streaming audio channel broadcast feed metadata for station item ${i+1}.`,
    audioUrl: i === 0 ? 'https://stream.bokradio.co.za/bokradio' : 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    lyrics: `[Live Stream - Track Lyrics Unavailable]`
  }))
};

export default function Home() {
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeMediaTab, setActiveMediaTab] = useState('watch');

  // Hero section image and topic synchronized transition (rotates every 5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_FEATURED.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = HERO_FEATURED[heroIndex];

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Engine</title>
      </Head>

      {/* Top Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>NETFLIX</h1>
      </header>

      {/* Category Tabs Bar */}
      <nav style={styles.categoryBar}>
        {['all', 'top10', 'movies', 'series', 'music'].map((tab) => (
          <button
            key={tab}
            style={activeCategoryTab === tab ? styles.activeCategoryTab : styles.categoryTab}
            onClick={() => setActiveCategoryTab(tab)}
          >
            {tab === 'all' && '🔥 All Content'}
            {tab === 'top10' && '🏆 Top 10 Ranked'}
            {tab === 'movies' && '🎬 Movies (10)'}
            {tab === 'series' && '📺 TV Series (10)'}
            {tab === 'music' && '🎵 Music & Radio (10)'}
          </button>
        ))}
      </nav>

      {/* Dynamic Background Feature Carousel */}
      <div style={{ ...styles.hero, backgroundImage: `linear-gradient(to top, #141414, transparent 50%), url("${currentHero.bgImage}")` }}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>{currentHero.badge}</span>
          <h2 style={styles.heroTitle}>{currentHero.title}</h2>
          <p style={styles.heroDesc}>{currentHero.desc}</p>
          <button style={styles.playButton} onClick={() => window.open(currentHero.url, '_blank')}>
            ▶ Explore Topic
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

      {/* Media Catalog Sections */}
      <main style={styles.main}>
        {/* TOP 10 RANKED ROW */}
        {(activeCategoryTab === 'all' || activeCategoryTab === 'top10') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🏆 Top 10 Ranked Movies & Series Today</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.top10.map((item) => (
                <div key={item.id} style={styles.top10Card} onClick={() => { setSelectedItem(item); setActiveMediaTab(item.audioUrl ? 'listen' : 'watch'); }}>
                  <div style={styles.rankNumber}>{item.rank}</div>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.title} style={styles.poster} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MOVIES ROW */}
        {(activeCategoryTab === 'all' || activeCategoryTab === 'movies') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎬 Feature Movies (10 Selection)</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.movies.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setActiveMediaTab('watch'); }}>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.title} style={styles.poster} />
                    <span style={styles.cardTag}>{item.year}</span>
                  </div>
                  <p style={styles.cardTitle}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TV SERIES ROW */}
        {(activeCategoryTab === 'all' || activeCategoryTab === 'series') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📺 TV Series (10 Selection)</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.series.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setActiveMediaTab('watch'); }}>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.title} style={styles.poster} />
                    <span style={styles.cardTag}>{item.year}</span>
                  </div>
                  <p style={styles.cardTitle}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MUSIC & RADIO ROW */}
        {(activeCategoryTab === 'all' || activeCategoryTab === 'music') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎵 South Africa & Global Radio Streams (10 Selection)</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.music.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setActiveMediaTab('listen'); }}>
                  <div style={styles.posterWrapper}>
                    <img src={item.image} alt={item.title} style={styles.poster} />
                    <span style={styles.cardTag}>{item.year}</span>
                  </div>
                  <p style={styles.cardTitle}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Modal Inspector */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>
            <div style={styles.modalHeader}>
              <img src={selectedItem.image} alt={selectedItem.title} style={styles.modalPoster} />
              <div>
                <h2>{selectedItem.title}</h2>
                <p style={styles.genreBadge}>{selectedItem.genre}</p>
                <p>{selectedItem.description}</p>
              </div>
            </div>
            {selectedItem.audioUrl && <audio controls autoPlay src={selectedItem.audioUrl} style={{ width: '100%' }} />}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' },
  header: { padding: '15px 40px', backgroundColor: 'rgba(0,0,0,0.95)' },
  logo: { color: '#E50914', margin: 0, fontSize: '28px', fontWeight: 'bold' },
  categoryBar: { display: 'flex', gap: '10px', padding: '12px 40px', backgroundColor: '#000', borderBottom: '1px solid #222' },
  categoryTab: { backgroundColor: '#181818', color: '#AAA', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' },
  activeCategoryTab: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' },
  hero: { height: '40vh', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.8s ease-in-out', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 40px 20px 40px', position: 'relative' },
  heroContent: { maxWidth: '650px' },
  heroBadge: { color: '#E50914', fontWeight: 'bold', fontSize: '12px' },
  heroTitle: { fontSize: '32px', margin: '5px 0' },
  heroDesc: { fontSize: '13px', color: '#CCC' },
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '8px 16px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
  dotsContainer: { position: 'absolute', bottom: '15px', right: '40px', display: 'flex', gap: '8px' },
  dot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#555', cursor: 'pointer' },
  activeDot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E50914', cursor: 'pointer' },
  main: { padding: '20px 40px' },
  row: { marginBottom: '30px' },
  rowTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  slider: { display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' },
  top10Card: { display: 'flex', alignItems: 'center', cursor: 'pointer', flex: '0 0 200px' },
  rankNumber: { fontSize: '90px', fontWeight: '900', color: '#141414', WebkitTextStroke: '3px #555', lineHeight: '0.8', marginRight: '-20px', zIndex: 1 },
  card: { flex: '0 0 160px', cursor: 'pointer' },
  posterWrapper: { position: 'relative', width: '150px', height: '220px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#222' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  cardTag: { position: 'absolute', top: '5px', right: '5px', backgroundColor: '#E50914', color: '#FFF', fontSize: '10px', padding: '2px 4px', borderRadius: '2px', fontWeight: 'bold' },
  cardTitle: { fontSize: '13px', margin: '5px 0 0 0', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '600px', borderRadius: '8px', padding: '25px', position: 'relative' },
  closeBtn: { position: 'absolute', top: '15px', right: '15px', backgroundColor: 'transparent', color: '#FFF', border: 'none', fontSize: '20px', cursor: 'pointer' },
  modalHeader: { display: 'flex', gap: '20px', marginBottom: '15px' },
  modalPoster: { width: '120px', height: '170px', objectFit: 'cover', borderRadius: '4px' },
  genreBadge: { display: 'inline-block', backgroundColor: '#333', padding: '3px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' }
};
