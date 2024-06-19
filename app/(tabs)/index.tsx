import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Modal, Text, Button, Image } from 'react-native';
import { Computer } from '@/components/Computer';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../styles";
import logo from "@/assets/images/giacomellidevs.png";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState('');

  const handlePress = (socialName: string, socialInfo: string) => {
    setSelectedSocial(`${socialName}: ${socialInfo}`);
    setModalVisible(true);
  }
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#41C0F2', dark: '#1D3D47' }} headerImage={<Image source={logo} style={{ width: "100%", height: "100%" }} />}>
        <StatusBar style="auto" />
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Seja bem-vindo!</ThemedText>
          <Computer />
        </ThemedView>
        <ThemedView>
          <ThemedText style={{ textAlign: "center" }}>Teremos as seguintes redes sociais na próxima
            <ThemedText type='defaultSemiBold'> Página</ThemedText>:
          </ThemedText>
          <ThemedText style={{ textAlign: "center" }}>Clique e abra o pop-up:</ThemedText>
        </ThemedView>
        <ThemedView style={styles.lista}>
          <TouchableOpacity style={styles.item} onPress={() => handlePress('GitHub', ' é uma plataforma de hospedagem de código-fonte com controle de versão usando git. É onde os desenvolvedores podem colaborar em projetos, contribuir para projetos de código aberto, hospedar seu próprio projeto e muito mais.')}>
            <Ionicons name="logo-github" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => handlePress('LinkedIn', 'é uma rede social voltada para o mundo dos negócios e empregos. Os usuários podem postar seu currículo, procurar empregos, conectar-se com outros profissionais e compartilhar atualizações de negócios.')}>
            <Ionicons name="logo-linkedin" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => handlePress('Telefone', 'Discagem de números e ligações')}>
            <Ionicons name="call" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => handlePress('Email', '  é um método de troca de mensagens entre pessoas usando dispositivos eletrônicos. É uma das formas mais antigas e amplamente usadas de comunicação online.')}>
            <Ionicons name="mail" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => handlePress('Instagram', 'é uma rede social de compartilhamento de fotos e vídeos. Os usuários podem aplicar vários filtros digitais em suas imagens e compartilhá-los em várias redes sociais.')}>
            <Ionicons name="logo-instagram" size={35} color="white" />
          </TouchableOpacity>
        </ThemedView>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
          <ThemedView style={styles.centeredView}>
            <ThemedView style={styles.modalView}>
              <Text style={styles.modalText}>{selectedSocial}</Text>
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </ThemedView>
          </ThemedView>
        </Modal>
    </ParallaxScrollView>
  );
}
