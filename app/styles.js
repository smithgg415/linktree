
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
      justifyContent: "center",
      alignItems: "center"
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      height: 600,
      width: "100%",
      marginBottom: -300,
      backgroundColor: "#00BFFF",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
    },
    modalText: {
      color:"#fff",
      marginBottom: 15,
      textAlign: "justify",
      fontSize: 20,
    },
    
  container: {
    width: 350,
    height: 500,
    left: 25,
    top: 100,
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
    top: -90,
    width: "100%",
    height: 100,
    backgroundColor: "#007bff",
  },
  perfil: {
    borderRadius: 50,
    top: 10,
    borderWidth: 2,
    borderColor: "#fff",
    left: 10,
    width: 100,
    height: 100,
  },
  list: {
    gap: 8,
    justifyContent: "center",
    alignItems: "center",

  },
  button: {
    borderRadius:15,
    textAlign: "center",
    flexDirection: "row",
    width: "85%",
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
  