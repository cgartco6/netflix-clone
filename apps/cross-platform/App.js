import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

const SERVER_URL = 'http://localhost:8096'; // Point to your Jellyfin instance

export default function App() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    // Fetch aggregated media (Local HDD items + IPTV streams)
    fetch(`${SERVER_URL}/Items?api_key=YOUR_API_KEY`)
      .then((res) => res.json())
      .then((data) => setMedia(data.Items || []))
      .catch((err) => console.log('Error loading media:', err));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: `${SERVER_URL}/Items/${item.Id}/Images/Primary` }}
        style={styles.poster}
      />
      <Text style={styles.title} numberOfLines={1}>{item.Name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Clone - Home</Text>
      <FlatList
        data={media}
        horizontal
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414', paddingTop: 50, paddingHorizontal: 20 },
  header: { color: '#E50914', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  list: { paddingVertical: 10 },
  card: { marginRight: 15, width: 140 },
  poster: { width: 140, height: 210, borderRadius: 6, backgroundColor: '#333' },
  title: { color: '#FFF', marginTop: 8, fontSize: 14, textAlign: 'center' },
});
