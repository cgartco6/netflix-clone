import { useState, useEffect } from 'react';
import Head from 'next/head';

const SERVER_URL = 'http://localhost:8096';
const API_KEY = 'YOUR_JELLYFIN_API_KEY';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const res = await fetch(`${SERVER_URL}/Items?api_key=${API_KEY}&IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`);
        const data = await res.json();
        setItems(data.Items || []);
      } catch (err) {
        console.error('Error connecting to backend media engine:', err);
      }
    }
    fetchMedia();
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Netflix Clone - Web</title>
      </Head>

      <header style={styles.header}>
        <h1 style={styles.logo}>NETFLIX</h1>
      </header>

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Library & Free Channels</h2>
        <div style={styles.grid}>
          {items.map((item) => {
            const imgUrl = `${SERVER_URL}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450&quality=90`;
            return (
              <div key={item.Id} style={styles.card}>
                <img src={imgUrl} alt={item.Name} style={styles.poster} />
                <p style={styles.title}>{item.Name}</p>
              </div>
            );
          })}
        </div>
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
    padding: '20px 40px',
    borderBottom: '1px solid #222',
  },
  logo: {
    color: '#E50914',
    margin: 0,
    fontSize: '28px',
    letterSpacing: '2px',
  },
  main: {
    padding: '40px',
  },
  sectionTitle: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '20px',
  },
  card: {
    flex: '0 0 160px',
  },
  poster: {
    width: '160px',
    height: '240px',
    borderRadius: '4px',
    objectFit: 'cover',
    backgroundColor: '#222',
  },
  title: {
    fontSize: '14px',
    color: '#CCC',
    marginTop: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
