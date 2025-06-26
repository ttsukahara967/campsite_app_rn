// screens/CampsiteDetail.js
import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function CampsiteDetail({ campsite, onBack }) {
  return (
    <ScrollView style={styles.detailContainer}>
      <Text style={styles.name}>{campsite.name}</Text>
      <Text>{campsite.description}</Text>
      <Text>住所: {campsite.address}</Text>
      <Text>設備: {campsite.facilities}</Text>
      <Text>価格: ¥{campsite.price}</Text>
      <Text>緯度: {campsite.latitude}</Text>
      <Text>経度: {campsite.longitude}</Text>
      <Button title="戻る" onPress={onBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailContainer: { padding: 10 },
  name: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 }
});
