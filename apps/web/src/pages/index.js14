import React, { useState } from 'react';
import feedsData from '../data/feeds.json';

export default function Home() {
  const initialStream = feedsData.categories[0]?.items[0] || null;
  const [activeStream, setActiveStream] = useState(initialStream);

  return (
    <div style={{ backgroundColor: '#141414', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ paddingBottom: '15px', borderBottom: '1px solid #333', marginBottom: '20px' }}>
        <h1 style={{ color: '#E50914', margin: 0, fontSize: '24px' }}>NETFLIX CLONE - LIVE PLAYER</h1>
      </header>

      {/* ACTIVE MEDIA PLAYER DISPLAY */}
      {activeStream && (
        <section style={{ marginBottom: '30px', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #222' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>{activeStream.title}</h2>
            <span style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase' }}>Type: {activeStream.type}</span>
          </div>

          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
            {activeStream.type === 'youtube' ? (
              <iframe
                src={activeStream.streamUrl}
                title={activeStream.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <video
                src={activeStream.streamUrl}
                controls
                autoPlay
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            )}
          </div>
        </section>
      )}

      {/* CATEGORY ROWS */}
      <main>
        {feedsData.categories.map((category) => (
          <section key={category.id} style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>{category.title}</h3>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingBottom: '10px' }}>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveStream(item)}
                  style={{
                    minWidth: '180px',
                    backgroundColor: '#1f1f1f',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    border: activeStream?.id === item.id ? '2px solid #E50914' : '2px solid transparent',
                    overflow: 'hidden'
                  }}
                >
                  <img src={item.poster} alt={item.title} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                  <div style={{ padding: '8px' }}>
                    <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}>{item.title}</p>
                    <button
                      style={{
                        marginTop: '8px',
                        width: '100%',
                        backgroundColor: '#E50914',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 0',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}
                    >
                      Watch Stream
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
