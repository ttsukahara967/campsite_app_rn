// components/CampsiteCard.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function CampsiteCard({ campsite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{campsite.name}</Text>
      <Text>{campsite.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontWeight: 'bold', fontSize: 16 }
});
