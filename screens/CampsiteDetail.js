// screens/CampsiteDetail.js
import React from 'react';
import { ScrollView, Text, Button, StyleSheet, Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function CampsiteDetail({ campsite, onBack }) {
  return (
    <ScrollView style={styles.detailContainer}>
      <Image source={require('../img/campsite/sample.png')} style={styles.image} />
      <Text style={styles.name}>{campsite.name}</Text>
      <Text style={styles.description}>{campsite.description}</Text>
      <Text>住所: {campsite.address}</Text>
      <Text>設備: {campsite.facilities}</Text>
      <Text>価格: ¥{campsite.price}</Text>
      <Text>緯度: {campsite.latitude}</Text>
      <Text>経度: {campsite.longitude}</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: campsite.latitude,
            longitude: campsite.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
          <Marker
            coordinate={{
              latitude: campsite.latitude,
              longitude: campsite.longitude
            }}
            title={campsite.name}
            description={campsite.address}
          />
        </MapView>
      </View>
      <Button title="戻る" onPress={onBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailContainer: { padding: 10 },
  image: { width: '100%', height: 200, marginBottom: 15, borderRadius: 10 },
  name: { fontWeight: 'bold', fontSize: 20, marginBottom: 5 },
  description: { marginBottom: 10 },
  mapContainer: { height: 200, marginVertical: 15, borderRadius: 10, overflow: 'hidden' },
  map: { flex: 1 }
});
