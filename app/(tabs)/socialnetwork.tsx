import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, TouchableOpacity, Linking, ImageBackground, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import perfilImage from "../../assets/images/giacomelli.jpg";
import { styles } from "../styles";

export default function TabTwoScreen() {

  function openDialer(phoneNumber: string) {
    Linking.openURL(`tel:${phoneNumber}`);
  }


  function openLink(url: string) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`URl não aberta: ${url}`);
      }
    });
  }


  function openEmail(email: string, subject: string, body: string) {
    Linking.openURL(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }


  function openInstagram(username: string) {
    Linking.canOpenURL(`instagram://user?username=${username}`)
      .then(supported => {
        if (supported) {
          return Linking.openURL(`instagram://user?username=${username}`);
        } else {
          return Linking.openURL(`https://www.instagram.com/${username}`);
        }
      });
  }


  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={{ borderRadius: 60, overflow: 'hidden', height: 120, width: 120, top: 40, left: 120 }}>
          <ImageBackground source={require('../../assets/images/giacomelli.jpg')} style={{ width: '100%', height: '100%' }} blurRadius={10}>
            <Image style={styles.perfil} source={perfilImage} />
          </ImageBackground>
        </View>
      </ThemedView>
      <ThemedView>
        <ThemedText style={{ fontSize: 23, fontWeight: "bold", textAlign: "center", top: -10, }}>Giacomelli Dev's</ThemedText>
      </ThemedView>
      <ThemedView style={styles.list}>
        <TouchableOpacity style={styles.button} onPress={() => openLink('https://github.com/smithgg415')}>
          <Ionicons name="logo-github" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>GitHub</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.linkedin.com/in/lu%C3%ADs-felipe-giacomelli-rodrigues-1449842a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
          <Ionicons name="logo-linkedin" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>LinkedIn</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openDialer("(18)981971147")}>
          <Ionicons name="call" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>Telefone</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openInstagram('lf.giacomelli')}>
          <Ionicons name="logo-instagram" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>Instagram</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openEmail('lfgiacomellirodrigues@gmail.com', 'Trabalho D.D.M', 'Olá, Dev Giacomelli!')}>
          <Ionicons name="mail" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>Email</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView >
  );
}
