// components/CampsiteCard.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

export default function CampsiteCard({ campsite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={require('../img/campsite/sample.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{campsite.name}</Text>
        <Text numberOfLines={2}>{campsite.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 8
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  }
});
