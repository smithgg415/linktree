import React from 'react';
import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.header}>
      <ImageBackground source={require('@/assets/images/programmer.png')} style={styles.header}></ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    width: '100%',
    height: 200,
    backgroundColor: '#007bff',
  },
});
