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
    badge: '🧊 VERIFIED SCIENCE DOCUMENTARY',
    title: 'Antarctica: Cold Hard Facts',
    desc: 'Scientific breakthroughs and real research data from polar ice-core research institutes and British Antarctic Survey experts.',
    bgImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1600',
    type: 'documentary',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1'
  },
  {
    id: 'f3',
    badge: '🤖 AI & ROBOTICS INSIGHTS',
    title: 'Embodied AI & Humanoid Robotics',
    desc: 'Verified developments in artificial intelligence, neural networks, and robotics from premier research institutions.',
    bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600',
    type: 'aitech',
    videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1'
  }
];

const NETFLIX_CATALOG = {
  top10: [
    { id: 't1', rank: 1, title: 'Cyberpunk 2099', year: '2026', type: 'movie', genre: 'Sci-Fi / Action', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Top ranked sci-fi thriller following a corporate netrunner.', cast: ['Karl Urban', 'Ana de Armas'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't2', rank: 2, title: 'Silicon Shadows', year: '2026', type: 'series', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'Cybersecurity team uncovers systemic AI backdoors.', cast: ['Rami Malek', 'Christian Slater'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't3', rank: 3, title: 'Antarctica Scientific Survey', year: '2025', type: 'documentary', genre: 'Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Expert research into Antarctic ice core records.', cast: ['British Antarctic Survey Scientists'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' },
    { id: 't4', rank: 4, title: 'Master of Puppets', year: '1986', artist: 'Metallica', type: 'music', genre: 'Heavy Metal', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', description: 'Influential thrash metal track exploring control themes.', audioUrl: 'https://stream.zeno.fm/0r225880508uv', lyrics: `[Verse 1]\nEnd of passion play, crumbling away\nI'm your source of self-destruction\n\n[Chorus]\nMaster of puppets, I'm pulling your strings` },
    { id: 't5', rank: 5, title: 'Bok Radio 98.9 FM', year: 'LIVE', artist: 'Cape Town Airwaves', type: 'music', genre: 'Live Radio', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcast from Western Cape, South Africa.', audioUrl: 'https://stream.bokradio.co.za/bokradio', lyrics: '[Live Radio Broadcast]' }
  ],
  expertTech: [
    { id: 'et1', title: 'Embodied Humanoid AI', author: 'Boston Dynamics & DeepMind', year: '2026', type: 'aitech', genre: 'Robotics Engineering', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'Official research demonstrations of neural motor controls and real-time physical AI synthesis.', videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1' },
    { id: 'et2', title: 'Autonomous AI Coding Systems', author: 'OpenAI & MIT CSAIL', year: '2026', type: 'aitech', genre: 'Software Architecture', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Peer-reviewed research and practical testing of LLM agents in production repository refactoring.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  expertAntarctica: [
    { id: 'ea1', title: 'Ice Core Climate Records', author: 'British Antarctic Survey', year: '2025', type: 'documentary', genre: 'Climate Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Verified atmospheric measurement data spanning 800,000 years extracted from polar ice cores.', videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' }
  ],
  musicStreams: [
    { id: 'm1', title: 'Bok Radio 98.9 FM', artist: 'Cape Town, SA', year: 'LIVE', type: 'music', genre: 'Afrikaans / Pop', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcasting station streaming rock, pop, and regional hits.', audioUrl: 'https://stream.bokradio.co.za/bokradio', lyrics: '[Live Airwaves Broadcast]' },
    { id: 'm2', title: 'Jacaranda FM', artist: 'Gauteng, SA', year: 'LIVE', type: 'music', genre: 'Top 40 Hits', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'South Africa top 40 music station broadcasting live.', audioUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi', lyrics: '[Live Airwaves Broadcast]' }
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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scanUsbDrive = async () => {
    try {
      if ('showDirectoryPicker' in window) {
        const handle = await window.showDirectoryPicker();
        const files = [];
        for await (const entry of handle.values()) {
          if (entry.kind === 'file' && entry.name.match(/\.(mp4|mkv|avi|mp3|flac)$/i)) {
            const f = await entry.getFile();
            files.push({
              id: entry.name,
              title: entry.name,
              year: 'Local Drive',
              genre: f.type.includes('audio') ? 'Audio' : 'Video',
              type: f.type.includes('audio') ? 'music' : 'movie',
              image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
              description: `Local file loaded from storage drive: ${handle.name}`,
              audioUrl: f.type.includes('audio') ? URL.createObjectURL(f) : null,
              videoUrl: f.type.includes('video') ? URL.createObjectURL(f) : null
            });
          }
        }
        if (files.length > 0) setLocalDriveItems(files);
      }
    } catch (e) {
      console.log('Drive picker cancelled.');
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
        <title>Netflix Universal Engine</title>
        <style>{`
          body { margin: 0; padding: 0; background-color: #141414; overflow-x: hidden; }
          ::-webkit-scrollbar { display: none; }
        `}</style>
      </Head>

      {/* Header Container */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <nav style={styles.navLinks}>
            {[
              { id: 'all', label: 'Home' },
              { id: 'movies', label: 'Movies & Series' },
              { id: 'aitech', label: 'Expert AI & Tech' },
              { id: 'antarctica', label: 'Antarctica Science' },
              { id: 'music', label: 'Radio & Music' }
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
          <button onClick={scanUsbDrive} style={styles.usbBtn}>🔌 Scan Drive</button>
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

      {/* Billboard Hero */}
      <div style={{ ...styles.billboard, backgroundImage: `linear-gradient(to top, #141414 5%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.8) 20%, transparent 60%), url("${hero.bgImage}")` }}>
        <div style={styles.billboardContent}>
          <span style={styles.badge}>{hero.badge}</span>
          <h2 style={styles.billboardTitle}>{hero.title}</h2>
          <p style={styles.billboardDesc}>{hero.desc}</p>
          <button style={styles.playBtn} onClick={() => { setSelectedItem(hero); setModalMode('watch'); }}>
            ▶ Play Overview
          </button>
        </div>
      </div>

      {/* Main Catalog Sliders */}
      <main style={styles.main}>
        {localDriveItems.length > 0 && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🔌 Connected Storage Drive Files</h3>
            <div style={styles.slider}>
              {localDriveItems.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode(item.audioUrl ? 'listen' : 'watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === 'all' || activeTab === 'movies') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>Top 10 Media Today</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.top10.map((item) => (
                <div key={item.id} style={styles.top10Card} onClick={() => { setSelectedItem(item); setModalMode(item.audioUrl ? 'listen' : 'watch'); }}>
                  <span style={styles.rankNum}>{item.rank}</span>
                  <div style={styles.cardImgWrapper}>
                    <img src={item.image} alt={item.title} style={styles.cardImg} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === 'all' || activeTab === 'aitech') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🤖 Verified Expert AI & Robotics Research</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.expertTech.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === 'all' || activeTab === 'antarctica') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🧊 Verified Polar Science & Ice Core Research</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.expertAntarctica.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === 'all' || activeTab === 'music') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎵 South African & Global Streaming Channels</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.musicStreams.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('listen'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.artist}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Netflix Item Inspector Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>
            <div style={styles.modalHeader}>
              <img src={selectedItem.image} alt={selectedItem.title} style={styles.modalPoster} />
              <div>
                <h2 style={{ margin: '0 0 10px 0' }}>{selectedItem.title}</h2>
                <span style={styles.genreTag}>{selectedItem.genre}</span>
                <p style={{ fontSize: '14px', color: '#CCC', lineHeight: '1.4' }}>{selectedItem.description}</p>
                {selectedItem.cast && <p style={{ fontSize: '12px', color: '#888' }}><strong>Cast:</strong> {selectedItem.cast.join(', ')}</p>}
                {selectedItem.author && <p style={{ fontSize: '12px', color: '#888' }}><strong>Source:</strong> {selectedItem.author}</p>}
              </div>
            </div>

            <div style={styles.modalTabs}>
              {selectedItem.audioUrl && (
                <button style={modalMode === 'listen' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('listen')}>🎧 Listen</button>
              )}
              {selectedItem.videoUrl && (
                <button style={modalMode === 'watch' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('watch')}>🎬 Watch</button>
              )}
              {selectedItem.lyrics && (
                <button style={modalMode === 'lyrics' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('lyrics')}>📜 Lyrics</button>
              )}
            </div>

            <div style={styles.modalBody}>
              {modalMode === 'listen' && selectedItem.audioUrl && (
                <audio controls autoPlay src={selectedItem.audioUrl} style={{ width: '100%' }} />
              )}
              {modalMode === 'watch' && selectedItem.videoUrl && (
                <iframe src={selectedItem.videoUrl} style={{ width: '100%', height: '320px', border: 'none', borderRadius: '4px' }} allow="autoplay" title={selectedItem.title} />
              )}
              {modalMode === 'lyrics' && selectedItem.lyrics && (
                <pre style={styles.lyrics}>{selectedItem.lyrics}</pre>
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
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4%', height: '68px', backgroundColor: 'rgba(20, 20, 20, 0.95)', position: 'sticky', top: 0, zIndex: 100, boxSizing: 'border-box' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '30px' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '15px' },
  logo: { color: '#E50914', margin: 0, fontSize: '26px', fontWeight: 'bold', letterSpacing: '0.5px' },
  navLinks: { display: 'flex', gap: '18px' },
  navLink: { color: '#E5E5E5', cursor: 'pointer', fontSize: '13px', transition: 'color 0.2s' },
  activeNav: { color: '#FFF', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' },
  usbBtn: { backgroundColor: '#28a745', color: '#FFF', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  searchBox: { display: 'flex', backgroundColor: '#000', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '6px 10px', outline: 'none', width: '140px', fontSize: '12px' },
  searchBtn: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '6px 10px', cursor: 'pointer' },
  billboard: { height: '55vh', backgroundSize: 'cover', backgroundPosition: 'center top', display: 'flex', alignItems: 'flex-end', padding: '0 4% 40px 4%', boxSizing: 'border-box' },
  billboardContent: { maxWidth: '550px' },
  badge: { color: '#E50914', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px' },
  billboardTitle: { fontSize: '38px', margin: '8px 0', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' },
  billboardDesc: { fontSize: '13px', color: '#DDD', lineHeight: '1.4', margin: '0 0 15px 0' },
  playBtn: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  main: { padding: '20px 4%' },
  row: { marginBottom: '30px' },
  rowTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  slider: { display: 'flex', gap: '12px', overflowX: 'scroll', paddingBottom: '10px' },
  card: { flex: '0 0 160px', cursor: 'pointer' },
  cardImgWrapper: { width: '120px', height: '170px', borderRadius: '4px', overflow: 'hidden' },
  cardImg: { width: '160px', height: '230px', objectFit: 'cover', borderRadius: '4px' },
  cardText: { fontSize: '12px', fontWeight: 'bold', margin: '6px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  cardSub: { fontSize: '10px', color: '#888', margin: 0 },
  top10Card: { display: 'flex', alignItems: 'center', cursor: 'pointer', flex: '0 0 180px' },
  rankNum: { fontSize: '110px', fontWeight: '900', color: '#141414', WebkitTextStroke: '3px #555', lineHeight: '0.7', marginRight: '-25px', zIndex: 1 },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '650px', borderRadius: '8px', padding: '25px', position: 'relative' },
  closeBtn: { position: 'absolute', top: '15px', right: '15px', backgroundColor: 'transparent', color: '#FFF', border: 'none', fontSize: '18px', cursor: 'pointer' },
  modalHeader: { display: 'flex', gap: '20px', marginBottom: '20px' },
  modalPoster: { width: '130px', height: '180px', objectFit: 'cover', borderRadius: '4px' },
  genreTag: { display: 'inline-block', backgroundColor: '#E50914', padding: '3px 8px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', marginBottom: '10px' },
  modalTabs: { display: 'flex', gap: '10px', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' },
  tabBtn: { backgroundColor: '#222', color: '#AAA', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
  activeTabBtn: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  modalBody: { backgroundColor: '#111', padding: '15px', borderRadius: '4px' },
  lyrics: { whiteSpace: 'pre-wrap', color: '#00FF66', fontFamily: 'monospace', fontSize: '12px', margin: 0 }
};
