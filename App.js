// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, FlatList, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const API_BASE = 'http://192.168.11.3:8080';

export default function App() {
  const [token, setToken] = useState(null);
  const [campsites, setCampsites] = useState([]);
  const [selectedCampsite, setSelectedCampsite] = useState(null);
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      const res = await axios.post(`${API_BASE}/login`, {
        username: 'admin',
        password: 'password'
      });
      setToken(res.data.token);
    } catch (err) {
      setError('Login failed');
    }
  };

  const fetchCampsites = async () => {
    try {
      const res = await axios.get(`${API_BASE}/campsites`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCampsites(res.data);
    } catch (err) {
      setError('Failed to fetch campsites');
    }
  };

  const fetchCampsiteDetail = async (id) => {
    try {
      const res = await axios.get(`${API_BASE}/campsites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSelectedCampsite(res.data);
    } catch (err) {
      setError('Failed to fetch campsite detail');
    }
  };

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    if (token) fetchCampsites();
  }, [token]);

  const renderCampsiteDetail = () => (
    <ScrollView style={styles.detailContainer}>
      <Text style={styles.name}>{selectedCampsite.name}</Text>
      <Text>{selectedCampsite.description}</Text>
      <Text>住所: {selectedCampsite.address}</Text>
      <Text>設備: {selectedCampsite.facilities}</Text>
      <Text>価格: ¥{selectedCampsite.price}</Text>
      <Text>緯度: {selectedCampsite.latitude}</Text>
      <Text>経度: {selectedCampsite.longitude}</Text>
      <Button title="戻る" onPress={() => setSelectedCampsite(null)} />
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {token && selectedCampsite ? (
        renderCampsiteDetail()
      ) : (
        <FlatList
          data={campsites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => fetchCampsiteDetail(item.id)}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
  card: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontWeight: 'bold', fontSize: 16 },
  error: { color: 'red', marginTop: 10 },
  detailContainer: { padding: 10 }
});

