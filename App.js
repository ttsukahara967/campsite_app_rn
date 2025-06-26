// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import CampsiteList from './screens/CampsiteList';
import CampsiteDetail from './screens/CampsiteDetail';
import { login, getCampsites, getCampsiteDetail } from './api/campsite';

export default function App() {
  const [token, setToken] = useState(null);
  const [campsites, setCampsites] = useState([]);
  const [selectedCampsite, setSelectedCampsite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    login()
      .then(setToken)
      .catch(() => setError('Login failed'));
  }, []);

  useEffect(() => {
    if (token) {
      getCampsites(token)
        .then(setCampsites)
        .catch(() => setError('Failed to fetch campsites'));
    }
  }, [token]);

  const handleSelectCampsite = async (id) => {
    try {
      const detail = await getCampsiteDetail(id, token);
      setSelectedCampsite(detail);
    } catch {
      setError('Failed to fetch campsite detail');
    }
  };

  const handleBack = () => setSelectedCampsite(null);

  return (
    <SafeAreaView style={styles.container}>
      {token && selectedCampsite ? (
        <CampsiteDetail campsite={selectedCampsite} onBack={handleBack} />
      ) : (
        <CampsiteList campsites={campsites} onSelect={handleSelectCampsite} />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  error: { color: 'red', marginTop: 10 }
});
