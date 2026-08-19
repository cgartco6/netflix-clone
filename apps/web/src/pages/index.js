import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const HERO_FEATURED = [
  {
    id: 'f1',
    badge: '🤖 AI & ROBOTICS DEVELOPMENT',
    title: 'HUMANOID ROBOTICS IN 2026',
    desc: 'Breakthroughs in embodied AI reasoning and neural motor control are enabling bipedal robots to perform complex real-world manufacturing and domestic tasks.',
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
    desc: 'Deep dive into verified climate ice-core science versus secret bases, Operation Highjump records, and flat-earth ice wall conspiracies.',
    tag: 'DOCUMENTARY',
    url: 'https://www.youtube.com/results?search_query=antarctica+documentary'
  }
];

const CATEGORIZED_MEDIA = {
  movies: [
    {
      id: 'm1',
      title: 'Cyberpunk 2099',
      year: '2025',
      type: 'movie',
      genre: 'Sci-Fi / Action',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500',
      description: 'In a dystopian metropolis controlled by corporate syndicates, a rogue netrunner discovers a secret hidden inside human consciousness.',
      cast: ['Karl Urban', 'Ana de Armas', 'Hiroyuki Sanada'],
      director: 'Denis Villeneuve',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 'm2',
      title: 'Interstellar Odyssey',
      year: '2024',
      type: 'movie',
      genre: 'Sci-Fi / Adventure',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500',
      description: 'A crew of explorers travel through a newly discovered wormhole in search of a suitable home planet to rescue humanity.',
      cast: ['Matthew McConaughey', 'Jessica Chastain', 'Anne Hathaway'],
      director: 'Christopher Nolan',
      videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1'
    }
  ],
  series: [
    {
      id: 's1',
      title: 'Silicon Shadows',
      year: '2026',
      type: 'series',
      genre: 'Tech Thriller',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500',
      description: 'An elite group of cybersecurity specialists uncover a backdoor in global AI infrastructure capable of manipulating elections.',
      cast: ['Rami Malek', 'Christian Slater', 'Carly Chaikin'],
      creator: 'Sam Esmail',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    }
  ],
  documentaries: [
    {
      id: 'd1',
      title: 'Antarctica: Real Science vs Myths',
      year: '2024',
      type: 'documentary',
      genre: 'Science / History',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500',
      description: 'Uncovering the real science of Antarctic ice-core analysis, Operation Highjump records, and contrasting historical expedition data with modern myths.',
      cast: ['Dr. Sarah Jenkins', 'Prof. David Attenborough (Narrator)'],
      director: 'James Cameron',
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1'
    }
  ],
  aitech: [
    {
      id: 'at1',
      title: 'Humanoid AI Robots: Factory Testing',
      year: '2026',
      type: 'aitech',
      genre: 'Robotics & AI',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500',
      description: 'Inside modern automotive manufacturing facilities deployment of general-purpose humanoid robots with neural motion control.',
      videoUrl: 'https://www.youtube.com/results?search_query=humanoid+robotics+in+action'
    },
    {
      id: 'at2',
      title: 'AI Coding Revolution: LLM Agents',
      year: '2026',
      type: 'aitech',
      genre: 'Software & AI',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
      description: 'How autonomous software development agents write, debug, and auto-deploy code architectures.',
      videoUrl: 'https://www.youtube.com/results?search_query=ai+coding+agents+developer'
    }
  ],
  music: [
    {
      id: 'mu1',
      title: 'Bok Radio 98.9 FM',
      artist: 'South Africa Live Airwaves',
      year: 'LIVE',
      type: 'music',
      genre: 'Afrikaans Rock / Pop',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
      description: 'Live local radio broadcasting from Cape Town featuring hit tracks, rock, and talk shows.',
      audioUrl: 'https://stream.bokradio.co.za/bokradio',
      webUrl: 'https://www.bokradio.co.za/?proradio-popup=1',
      lyrics: '[Live Broadcast - Stream Active]'
    },
    {
      id: 'mu2',
      title: 'Jacaranda FM 94.2',
      artist: 'South Africa Top 40',
      year: 'LIVE',
      type: 'music',
      genre: 'Top Hits / Live Radio',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
      description: 'Gautengs major commercial radio station playing South Africa and international chart leaders.',
      audioUrl: 'https://jacarandafm.streamguys1.com/jacafm-hi',
      webUrl: 'https://www.jacarandafm.com/listen-live',
      lyrics: '[Live Broadcast - Stream Active]'
    },
    {
      id: 'mu3',
      title: 'Classic Rock HD Stream',
      artist: 'Global Rock Radio',
      year: 'LIVE',
      type: 'music',
      genre: 'Classic Rock',
      image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500',
      description: '24/7 global stream dedicated to classic rock tracks from legendary bands across the decades.',
      audioUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
      webUrl: 'https://www.radio.net/s/classicrock',
      lyrics: '[Global Stream Active]'
    }
  ],
  tv: [
    {
      id: 'tv1',
      title: '🇬🇧 BBC News HD',
      year: 'LIVE TV',
      type: 'tv',
      genre: 'Global News',
      image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500',
      description: 'International breaking news coverage and global affairs.',
      webUrl: 'https://iptv-org.github.io/iptv/countries/uk.m3u'
    },
    {
      id: 'tv2',
      title: '🇺🇸 ABC News Live',
      year: 'LIVE TV',
      type: 'tv',
      genre: 'US News',
      image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500',
      description: 'US and worldwide news broadcasting live online.',
      webUrl: 'https://iptv-org.github.io/iptv/countries/us.m3u'
    }
  ]
};

export default function Home() {
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeMediaTab, setActiveMediaTab] = useState('watch');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('youtube');
  const [localDriveItems, setLocalDriveItems] = useState([]);

  // Auto-scrolling feature hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % HERO_FEATURED.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
              title: entry.name,
              year: 'USB / HDD',
              genre: file.type.includes('audio') ? 'Audio File' : 'Video File',
              type: file.type.includes('audio') ? 'music' : 'movie',
              image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
              description: `Loaded from connected storage: ${directoryHandle.name}`,
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

  const currentHero = HERO_FEATURED[heroIndex];

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Universal Engine</title>
      </Head>

      {/* Header Bar */}
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

        {/* Global Search Bar */}
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <select value={searchEngine} onChange={(e) => setSearchEngine(e.target.value)} style={styles.searchSelect}>
            <option value="youtube">YouTube</option>
            <option value="google">Google</option>
          </select>
          <input
            type="text"
            placeholder="Search movies, AI news, artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>🔍</button>
        </form>
      </header>

      {/* Category Tabs Navigation Bar */}
      <nav style={styles.categoryBar}>
        {['all', 'movies', 'series', 'documentaries', 'aitech', 'music', 'tv'].map((tab) => (
          <button
            key={tab}
            style={activeCategoryTab === tab ? styles.activeCategoryTab : styles.categoryTab}
            onClick={() => setActiveCategoryTab(tab)}
          >
            {tab === 'all' && '🔥 All'}
            {tab === 'movies' && '🎬 Movies'}
            {tab === 'series' && '📺 TV Series'}
            {tab === 'documentaries' && '🧊 Documentaries'}
            {tab === 'aitech' && '🤖 AI & Robotics News'}
            {tab === 'music' && '🎵 Radio & Music'}
            {tab === 'tv' && '🌍 Live TV'}
          </button>
        ))}
      </nav>

      {/* Auto-scrolling Featured Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>{currentHero.badge}</span>
          <h2 style={styles.heroTitle}>{currentHero.title}</h2>
          <p style={styles.heroDesc}>{currentHero.desc}</p>
          <button style={styles.playButton} onClick={() => window.open(currentHero.url, '_blank')}>
            ▶ Explore Update
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
        {localDriveItems.length > 0 && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🔌 Connected Storage Drive Media</h3>
            <div style={styles.slider}>
              {localDriveItems.map((item) => (
                <div key={item.id} style={styles.card} onClick={() => { setSelectedItem(item); setActiveMediaTab(item.audioUrl ? 'listen' : 'watch'); }}>
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'movies') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎬 Feature Movies</h3>
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'series') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>📺 TV Series</h3>
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'documentaries') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🧊 Feature Documentaries</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.documentaries.map((item) => (
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'aitech') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🤖 AI, Robotics & AI Coding Updates</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.aitech.map((item) => (
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'music') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🎵 South Africa & Worldwide Radio Streams</h3>
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

        {(activeCategoryTab === 'all' || activeCategoryTab === 'tv') && (
          <section style={styles.row}>
            <h3 style={styles.rowTitle}>🌍 Worldwide Live TV Stations</h3>
            <div style={styles.slider}>
              {CATEGORIZED_MEDIA.tv.map((item) => (
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
      </main>

      {/* Netflix Item Details Inspector Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>

            <div style={styles.modalHeader}>
              <img src={selectedItem.image} alt={selectedItem.title} style={styles.modalPoster} />
              <div>
                <h2>{selectedItem.title} ({selectedItem.year})</h2>
                {selectedItem.artist && <p><strong>Artist/Band:</strong> {selectedItem.artist}</p>}
                {selectedItem.director && <p><strong>Director:</strong> {selectedItem.director}</p>}
                <p style={styles.genreBadge}>{selectedItem.genre}</p>
                <p style={styles.modalDesc}>{selectedItem.description}</p>
                {selectedItem.cast && <p><strong>Cast:</strong> {selectedItem.cast.join(', ')}</p>}
              </div>
            </div>

            {/* Mode Tabs: Listen | Watch | Lyrics */}
            <div style={styles.tabContainer}>
              {selectedItem.audioUrl && (
                <button style={activeMediaTab === 'listen' ? styles.activeTab : styles.tab} onClick={() => setActiveMediaTab('listen')}>
                  🎧 Listen Audio
                </button>
              )}
              {(selectedItem.videoUrl || selectedItem.webUrl) && (
                <button style={activeMediaTab === 'watch' ? styles.activeTab : styles.tab} onClick={() => setActiveMediaTab('watch')}>
                  🎬 Watch Stream
                </button>
              )}
              {selectedItem.lyrics && (
                <button style={activeMediaTab === 'lyrics' ? styles.activeTab : styles.tab} onClick={() => setActiveMediaTab('lyrics')}>
                  📜 View Lyrics
                </button>
              )}
            </div>

            {/* Content Display */}
            <div style={styles.tabContent}>
              {activeMediaTab === 'listen' && selectedItem.audioUrl && (
                <div style={{ textAlign: 'center', padding: '15px' }}>
                  <audio controls autoPlay src={selectedItem.audioUrl} style={{ width: '100%' }} />
                </div>
              )}

              {activeMediaTab === 'watch' && (
                <div>
                  {selectedItem.videoUrl && selectedItem.videoUrl.includes('embed') ? (
                    <iframe src={selectedItem.videoUrl} style={{ width: '100%', height: '320px', border: 'none' }} allow="autoplay" title={selectedItem.title} />
                  ) : (
                    <button style={styles.actionBtn} onClick={() => window.open(selectedItem.webUrl || selectedItem.videoUrl, '_blank')}>
                      ▶ Launch Live Stream
                    </button>
                  )}
                </div>
              )}

              {activeMediaTab === 'lyrics' && selectedItem.lyrics && (
                <pre style={styles.lyricsBox}>{selectedItem.lyrics}</pre>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', paddingBottom: '50px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: 'rgba(0,0,0,0.95)', position: 'sticky', top: 0, zIndex: 100, flexWrap: 'wrap', gap: '10px' },
  logo: { color: '#E50914', margin: 0, fontSize: '28px', fontWeight: 'bold' },
  movieBoxBtn: { backgroundColor: '#E50914', color: '#FFF', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' },
  usbBtn: { backgroundColor: '#28a745', color: '#FFF', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  searchForm: { display: 'flex', alignItems: 'center', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden' },
  searchSelect: { backgroundColor: '#222', color: '#FFF', border: 'none', padding: '8px', fontSize: '12px' },
  searchInput: { backgroundColor: 'transparent', border: 'none', color: '#FFF', padding: '8px 12px', outline: 'none', width: '200px' },
  searchButton: { backgroundColor: '#E50914', border: 'none', color: '#FFF', padding: '8px 12px', cursor: 'pointer' },
  categoryBar: { display: 'flex', gap: '10px', padding: '12px 40px', backgroundColor: '#000', borderBottom: '1px solid #222', overflowX: 'auto' },
  categoryTab: { backgroundColor: '#181818', color: '#AAA', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', whiteSpace: 'nowrap' },
  activeCategoryTab: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', whiteSpace: 'nowrap' },
  hero: { height: '38vh', backgroundImage: 'linear-gradient(to top, #141414, transparent 60%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600")', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 40px 20px 40px', position: 'relative' },
  heroContent: { maxWidth: '650px' },
  heroBadge: { color: '#E50914', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px' },
  heroTitle: { fontSize: '32px', margin: '5px 0', fontWeight: 'bold' },
  heroDesc: { fontSize: '13px', color: '#CCC', lineHeight: '1.4' },
  playButton: { backgroundColor: '#FFF', color: '#000', border: 'none', padding: '8px 16px', fontSize: '14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
  dotsContainer: { position: 'absolute', bottom: '15px', right: '40px', display: 'flex', gap: '8px' },
  dot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#555', cursor: 'pointer' },
  activeDot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E50914', cursor: 'pointer' },
  main: { padding: '20px 40px' },
  row: { marginBottom: '30px' },
  rowTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  slider: { display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' },
  card: { flex: '0 0 160px', cursor: 'pointer' },
  posterWrapper: { position: 'relative', width: '160px', height: '230px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#222' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  cardTag: { position: 'absolute', top: '5px', right: '5px', backgroundColor: '#E50914', color: '#FFF', fontSize: '10px', padding: '2px 4px', borderRadius: '2px', fontWeight: 'bold' },
  cardTitle: { fontSize: '13px', margin: '5px 0 0 0', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '700px', borderRadius: '8px', padding: '25px', position: 'relative' },
  closeBtn: { position: 'absolute', top: '15px', right: '15px', backgroundColor: 'transparent', color: '#FFF', border: 'none', fontSize: '20px', cursor: 'pointer' },
  modalHeader: { display: 'flex', gap: '20px', marginBottom: '15px' },
  modalPoster: { width: '140px', height: '200px', objectFit: 'cover', borderRadius: '4px' },
  genreBadge: { display: 'inline-block', backgroundColor: '#333', padding: '3px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' },
  modalDesc: { fontSize: '13px', color: '#DDD', lineHeight: '1.4' },
  tabContainer: { display: 'flex', gap: '10px', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '15px' },
  tab: { backgroundColor: '#222', color: '#AAA', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
  activeTab: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  tabContent: { backgroundColor: '#111', padding: '15px', borderRadius: '4px' },
  lyricsBox: { whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: '#00FF66', fontSize: '13px' },
  actionBtn: { backgroundColor: '#E50914', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '4px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }
};
