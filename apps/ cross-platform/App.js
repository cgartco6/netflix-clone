import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SERVER_URL = 'http://localhost:8096';
const API_KEY = 'YOUR_JELLYFIN_API_KEY';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${SERVER_URL}/Items?api_key=${API_KEY}&IncludeItemTypes=Movie,Series,LiveTvChannel&Recursive=true`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.Items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load media items:', error);
        setLoading(false);
      });
  }, []);

  const renderMediaCard = ({ item }) => {
    const imageUrl = `${SERVER_URL}/Items/${item.Id}/Images/Primary?fillWidth=300&fillHeight=450&quality=90`;

    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.poster}
          resizeMode="cover"
        />
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.Name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.logo}>NETFLIX</Text>
      </View>

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#E50914" />
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.sectionHeader}>Mounted Media & Live TV</Text>
          <FlatList
            data={items}
            horizontal
            keyExtractor={(item) => item.Id}
            renderItem={renderMediaCard}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  logo: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    paddingLeft: 20,
  },
  sectionHeader: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContainer: {
    paddingRight: 20,
  },
  card: {
    width: 140,
    marginRight: 12,
  },
  poster: {
    width: 140,
    height: 210,
    borderRadius: 4,
    backgroundColor: '#222',
  },
  itemTitle: {
    color: '#E5E5E5',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
  },
});
