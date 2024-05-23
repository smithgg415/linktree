import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons name="code-slash" size={300} color="#007bff" style={styles.logo} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText style={{ textAlign: "center" }}>Teremos as seguintes redes sociais na próxima
          <ThemedText type='defaultSemiBold'> Página</ThemedText>:
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.lista}>
        <ThemedView style={styles.item}>
          <Ionicons name="logo-github" size={24} color="white" />
        </ThemedView>
        <ThemedView style={styles.item}>
          <Ionicons name="logo-linkedin" size={24} color="white" /> 
        </ThemedView>
        <ThemedView style={styles.item}>
          <Ionicons name="call" size={24} color="white" /> 
        </ThemedView>
        <ThemedView style={styles.item}>
          <Ionicons name="mail" size={24} color="white" /> 
        </ThemedView>
        <ThemedView style={styles.item}>
        <Ionicons name="logo-instagram" size={24} color="white" />
        </ThemedView>
        <ThemedView style={styles.item}>
        <Ionicons name="logo-discord" size={24} color="white" />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    bottom: -100,
    left: -70,
    position: 'absolute',
  },
  lista: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 15,
    justifyContent:"center", 
    alignItems:"center"
  }
});
