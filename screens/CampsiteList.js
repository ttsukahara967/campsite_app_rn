// screens/CampsiteList.js
import React from 'react';
import { FlatList } from 'react-native';
import CampsiteCard from '../components/CampsiteCard';

export default function CampsiteList({ campsites, onSelect }) {
  return (
    <FlatList
      data={campsites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CampsiteCard campsite={item} onPress={() => onSelect(item.id)} />
      )}
    />
  );
}
