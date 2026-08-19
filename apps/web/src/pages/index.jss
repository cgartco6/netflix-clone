import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMedia() {
      try {
        // Calls the Vercel/Netlify rewrite proxy defined above
        const res = await fetch(`/api/jellyfin/Items?IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        setItems(data.Items || []);
      } catch (err) {
        console.error('Failed to connect to backend engine from Vercel/Netlify:', err);
      }
    }
    fetchMedia();
  }, []);

  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', color: '#FFF', fontFamily: 'sans-serif', padding: '20px' }}>
      <Head>
        <title>Netflix Clone - Cloud Web</title>
      </Head>
      <h1 style={{ color: '#E50914', fontSize: '28px', marginBottom: '20px' }}>NETFLIX</h1>
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
        {items.map((item) => (
          <div key={item.Id} style={{ flex: '0 0 160px' }}>
            <img 
              src={`/api/jellyfin/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450`} 
              alt={item.Name} 
              style={{ width: '160px', height: '240px', borderRadius: '4px', objectFit: 'cover', backgroundColor: '#222' }} 
            />
            <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '6px' }}>{item.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
