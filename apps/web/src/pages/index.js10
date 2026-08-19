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
    badge: '🎵 AI MUSIC CREATION',
    title: 'Suno & AI Music Generation',
    desc: 'Generate studio-grade audio tracks, full songs, and custom vocals instantly with next-generation generative music algorithms.',
    bgImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600',
    type: 'aimusic',
    webUrl: 'https://suno.com/'
  },
  {
    id: 'f3',
    badge: '🤖 AI & ROBOTICS DEVELOPMENT',
    title: 'Humanoid Robotics in 2026',
    desc: 'Breakthroughs in embodied AI reasoning and neural motor control are enabling bipedal robots to perform complex real-world tasks.',
    bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600',
    type: 'aitech',
    videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1'
  },
  {
    id: 'f4',
    badge: '⚡ CRYPTO & BLOCKCHAIN',
    title: 'Crypto Market Real-Time Breakdowns',
    desc: 'Deep dive into decentralized finance, web3 autonomous agents, smart contract audits, and real-time global crypto trends.',
    bgImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=1600',
    type: 'crypto',
    webUrl: 'https://www.google.com/search?q=crypto+news'
  },
  {
    id: 'f5',
    badge: '🧊 VERIFIED SCIENCE DOCUMENTARY',
    title: 'Antarctica: Cold Hard Facts',
    desc: 'Scientific breakthroughs and real research data from polar ice-core research institutes and British Antarctic Survey experts.',
    bgImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1600',
    type: 'documentary',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1'
  }
];

const NETFLIX_CATALOG = {
  top10: [
    { id: 't1', rank: 1, title: 'Cyberpunk 2099', year: '2026', type: 'movie', genre: 'Sci-Fi / Action', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'Top ranked sci-fi thriller following a corporate netrunner uncovering syndicate corporate espionage.', cast: ['Karl Urban', 'Ana de Armas', 'Keanu Reeves'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't2', rank: 2, title: 'Silicon Shadows', year: '2026', type: 'series', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'An elite cybersecurity unit uncovers systemic AI backdoors planted inside military mainframes.', cast: ['Rami Malek', 'Christian Slater', 'Carly Chaikin'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 't3', rank: 3, title: 'Suno AI Studio', year: '2026', type: 'aimusic', genre: 'AI Music Tech', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Next-gen algorithmic music creation engine for generating full audio compositions.', cast: ['Suno AI Audio Engine'], webUrl: 'https://suno.com/' },
    { id: 't4', rank: 4, title: 'Antarctica Scientific Survey', year: '2025', type: 'documentary', genre: 'Science', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Expert research into Antarctic ice core records and 800,000 years of climate history.', cast: ['British Antarctic Survey Scientists'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' },
    { id: 't5', rank: 5, title: 'Bok Radio 98.9 FM', year: 'LIVE', artist: 'Cape Town Airwaves', type: 'music', genre: 'Live Radio', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcast from Western Cape, South Africa streaming rock, pop, and local hits.', cast: ['Cape Town DJs'], audioUrl: 'https://stream.bokradio.co.za/bokradio', webUrl: 'https://www.bokradio.co.za/', lyrics: '[Live Radio Broadcast Active]' }
  ],
  movies: [
    { id: 'm1', title: 'Cyberpunk 2099', year: '2026', type: 'movie', genre: 'Sci-Fi / Action', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', description: 'In a dystopian metropolis controlled by corporate syndicates, a rogue netrunner discovers a secret hidden inside human consciousness.', cast: ['Karl Urban', 'Ana de Armas'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 'm2', title: 'Interstellar Odyssey', year: '2025', type: 'movie', genre: 'Sci-Fi / Adventure', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500', description: 'A crew of deep-space explorers travel through a wormhole in search of a new home for humanity.', cast: ['Matthew McConaughey', 'Anne Hathaway'], videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1' }
  ],
  series: [
    { id: 's1', title: 'Silicon Shadows', year: '2026', type: 'series', genre: 'Tech Thriller', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', description: 'An elite group of cybersecurity specialists uncover a backdoor in global AI infrastructure.', cast: ['Rami Malek', 'Christian Slater'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  documentaries: [
    { id: 'd1', title: 'Antarctica: Real Science vs Myths', year: '2025', type: 'documentary', genre: 'Science / History', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500', description: 'Uncovering verified Antarctic ice-core analysis and historical polar expedition data.', cast: ['BAS Research Team'], videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1' }
  ],
  aiTech: [
    { id: 'at1', title: 'Embodied Humanoid AI', author: 'Boston Dynamics & DeepMind', year: '2026', type: 'aitech', genre: 'Robotics Engineering', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', description: 'Official research demonstrations of neural motor controls and real-time physical AI synthesis.', cast: ['DeepMind Engineers'], videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuUU?autoplay=1' },
    { id: 'at2', title: 'Autonomous AI Coding Systems', author: 'OpenAI & MIT CSAIL', year: '2026', type: 'aitech', genre: 'Software Architecture', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', description: 'Peer-reviewed research and practical testing of LLM agents in production repository refactoring.', cast: ['MIT Researchers'], videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' }
  ],
  aiMusic: [
    { id: 'aim1', title: 'Suno AI Music Generator', year: '2026', type: 'aimusic', genre: 'AI Music Engine', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Generates complete songs with instrumentation and artificial vocal synthesis.', cast: ['Suno Engine'], webUrl: 'https://suno.com/' },
    { id: 'aim2', title: 'AI Music SO', year: '2026', type: 'aimusic', genre: 'Audio Synthesis Platform', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500', description: 'Online suite for AI track generation, stem separation, and generative vocal tools.', cast: ['AI Music SO Suite'], webUrl: 'https://aimusic.so/' }
  ],
  crypto: [
    { id: 'c1', title: 'Crypto Market Trends 2026', year: '2026', type: 'crypto', genre: 'Web3 & Finance', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=500', description: 'Analysis of smart contract updates, layer 2 scaling solutions, and real-time decentralized finance.', cast: ['Web3 Analysts'], webUrl: 'https://www.google.com/search?q=crypto+news' }
  ],
  musicStreams: [
    { id: 'mu1', title: 'Bok Radio 98.9 FM', artist: 'Cape Town, SA', year: 'LIVE', type: 'music', genre: 'Afrikaans / Pop / Rock', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', description: 'Live broadcasting station streaming rock, pop, and regional hits from Cape Town.', cast: ['Bok Radio Presenters'], audioUrl: 'https://stream.bokradio.co.za/bokradio', webUrl: 'https://www.bokradio.co.za/', lyrics: '[Live Radio Broadcast Active]' }
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
        <title>Netflix Universal Media Hub</title>
        <style>{`
          body { margin: 0; padding: 0; background-color: #141414; overflow-x: hidden; }
          ::-webkit-scrollbar { display: none; }
        `}</style>
      </Head>

      {/* Header Container */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <a href="https://movieboxhd.net/" target="_blank" rel="noreferrer" style={styles.movieBoxBtn}>
            📦 MovieBox HD
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
              { id: 'documentaries', label: 'Documentaries' },
              { id: 'aitech', label: 'AI & Tech' },
              { id: 'aimusic', label: 'AI Music' },
              { id: 'crypto', label: 'Crypto' },
              { id: 'music', label: 'Radio & Streams' }
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
          <button onClick={scanStorageDrive} style={styles.usbBtn}>🔌 Scan HDD/SSD/USB</button>
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

      {/* Billboard Hero Carousel */}
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

      {/* Main Sliders */}
      <main style={styles.main}>
        {/* EXTERNAL HDD / SSD / USB FILES */}
        {localDriveItems.length > 0 && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🔌 External Storage Drive Files (HDD / SSD / USB)</h3>
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

        {/* TOP 10 */}
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

        {/* MOVIES */}
        {(activeTab === 'all' || activeTab === 'movies') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎬 Feature Movies</h3>
            <div style={styles.slider}>
              {NETFLIX_CATALOG.movies.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setModalMode('watch'); }}>
                  <img src={item.image} alt={item.title} style={styles.cardImg} />
                  <p style={styles.cardText}>{item.title}</p>
                  <p style={styles.cardSub}>{item.year} • {item.genre}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SERIES */}
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

        {/* AI MUSIC */}
        {(activeTab === 'all' || activeTab === 'aimusic') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎵 Generative AI Music Platforms (Suno & AI Music SO)</h3>
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

        {/* MUSIC & RADIO */}
        {(activeTab === 'all' || activeTab === 'music') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📻 South African & Global Streaming Stations</h3>
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

      {/* Netflix Detail Modal */}
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
                <button style={modalMode === 'listen' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('listen')}>🎧 Listen Track</button>
              )}
              {selectedItem.videoUrl && (
                <button style={modalMode === 'watch' ? styles.activeTabBtn : styles.tabBtn} onClick={() => setModalMode('watch')}>🎬 Watch Media</button>
              )}
              {selectedItem.webUrl && (
                <button style={styles.activeTabBtn} onClick={() => window.open(selectedItem.webUrl, '_blank')}>🌐 Open Platform Web Link</button>
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
  headerLeft: { display: 'flex', alignItems: 'center', gap: '15px' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '12px' },
  logo: { color: '#E50914', margin: 0, fontSize: '26px', fontWeight: 'bold', letterSpacing: '0.5px' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '5px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  bokRadioBtn: { backgroundColor: '#FF8800', color: '#FFF', padding: '5px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  aiMusicBtn: { backgroundColor: '#0070F3', color: '#FFF', padding: '5px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '11px' },
  navLinks: { display: 'flex', gap: '12px' },
  navLink: { color: '#E5E5E5', cursor: 'pointer', fontSize: '12px', transition: 'color 0.2s' },
  activeNav: { color: '#FFF', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' },
  usbBtn: { backgroundColor: '#28a745', color: '#FFF', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '11px' },
  searchBox: { display: 'flex', backgroundColor: '#000', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '5px 8px', outline: 'none', width: '110px', fontSize: '11px' },
  searchBtn: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '5px 8px', cursor: 'pointer' },
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
  cardSub: { fontSize: '10px', color: '#888', margin: 0 },
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
  modalBody: { backgroundColor: '#111', padding: '15px', borderRadius: '4px' },
  lyrics: { whiteSpace: 'pre-wrap', color: '#00FF66', fontFamily: 'monospace', fontSize: '12px', margin: 0 }
};
