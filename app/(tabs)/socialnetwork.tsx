import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import perfilImage from '../../assets/images/programmer.png';

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
        <Image style={styles.perfil} source={perfilImage} />
      </ThemedView>
      <ThemedView>
        <ThemedText style={{ fontSize: 23, fontWeight: "bold", textAlign: "center", top: -10 }}>Giacomelli Dev's</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lista}>
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
        <TouchableOpacity style={styles.button} onPress={() => openEmail('lfgiacomellirodrigues@gmail.com', 'Trabalho D.D.M', 'Olá, Dev Giacomelli!')}>
          <Ionicons name="logo-discord" size={24} color="white" style={styles.icn} />
          <ThemedText style={styles.nameSocial}>Discord</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView >
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 400,
    left: 25,
    top: 150,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.84,
    elevation: 20
  },
  header: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    top: -80,
    width: "100%",
    height: 70,
    backgroundColor: "#007bff",
  },
  perfil: {
    top: 30,
    borderWidth: 2,
    borderColor: "black",
    left: 130,
    width: 100,
    height: 100,

  },
  lista: {
    gap: 8,
    justifyContent: "center",
    alignItems: "center",

  },
  button: {
    flexDirection: "row",
    width: "90%",
    height: 35,
    alignItems: "center",
    backgroundColor: "#007bff"
  },
  nameSocial: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  icn: {
    top: 2,
    marginRight: 90,
    marginLeft: 10
  }
});
