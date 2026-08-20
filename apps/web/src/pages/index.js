import React, { useState } from 'react';
import feedsData from '../data/feeds.json';

export default function Home() {
  const [selectedStream, setSelectedStream] = useState(null);
  const heroItem = feedsData.categories[0]?.items[0];

  return (
    <div style={{ backgroundColor: '#141414', color: '#fff', minHeight: '100vh', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
      
      {/* ORIGINAL NETFLIX NAVIGATION BAR */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '60px',
        padding: '0 4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <h1 style={{ color: '#E50914', margin: 0, fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }}>NETFLIX</h1>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '18px', fontSize: '14px', color: '#e5e5e5' }}>
            <li style={{ cursor: 'pointer', fontWeight: 'bold', color: '#fff' }}>Home</li>
            <li style={{ cursor: 'pointer' }}>TV Shows</li>
            <li style={{ cursor: 'pointer' }}>Movies</li>
            <li style={{ cursor: 'pointer' }}>Live Feeds</li>
            <li style={{ cursor: 'pointer' }}>My List</li>
          </ul>
        </div>
        <div style={{ fontSize: '14px', color: '#fff', cursor: 'pointer' }}>Account</div>
      </nav>

      {/* ORIGINAL HERO BANNER */}
      {heroItem && (
        <header style={{
          position: 'relative',
          height: '440px',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), #141414), url(${heroItem.poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 4%',
          paddingTop: '60px'
        }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 10px 0', maxWidth: '600px' }}>{heroItem.title}</h1>
          <p style={{ fontSize: '14px', color: '#e5e5e5', maxWidth: '500px', lineHeight: '1.4', margin: '0 0 20px 0' }}>
            Featured live stream source integrated into your media collection.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => setSelectedStream(heroItem)}
              style={{ padding: '8px 24px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
            >
              ► Play
            </button>
            <button style={{ padding: '8px 24px', backgroundColor: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              ⓘ More Info
            </button>
          </div>
        </header>
      )}

      {/* NETFLIX CATEGORY ROWS */}
      <main style={{ padding: '0 4%', marginTop: '-20px', position: 'relative', zIndex: 10 }}>
        {feedsData.categories.map((category) => (
          <section key={category.id} style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', color: '#e5e5e5', marginBottom: '12px', fontWeight: '600' }}>{category.title}</h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', paddingBottom: '10px', scrollbarWidth: 'none' }}>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedStream(item)}
                  style={{
                    minWidth: '200px',
                    height: '115px',
                    backgroundColor: '#222',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <img src={item.poster} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    padding: '8px',
                    boxSizing: 'border-box'
                  }}>
                    <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.title}</p>
                    <span style={{ fontSize: '10px', color: '#E50914', textTransform: 'uppercase' }}>{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* EMBEDDED STREAM MODAL OVERLAY */}
      {selectedStream && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ width: '90%', maxWidth: '800px', backgroundColor: '#181818', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>{selectedStream.title}</h3>
              <button 
                onClick={() => setSelectedStream(null)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
              {selectedStream.type === 'youtube' ? (
                <iframe
                  src={selectedStream.streamUrl}
                  title={selectedStream.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <video
                  src={selectedStream.streamUrl}
                  controls
                  autoPlay
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
