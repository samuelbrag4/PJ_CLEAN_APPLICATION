import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header fixa no topo */}
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>

        <TouchableOpacity style={styles.button}>
          <Link href="/login" style={styles.buttonText}>
            Ir para Login
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link href="/signup" style={styles.buttonText}>
            Ir para Cadastro
          </Link>
        </TouchableOpacity>
      </View>

      {/* Footer fixa no rodapé */}
      <Footer themeColor="#F05080" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    position: "relative", // Mantém o layout relativo para o conteúdo principal
    zIndex: 0, // Garante que o conteúdo principal fique abaixo do menu
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#F05080",
    overflow: "hidden", // Evita que o menu hamburguer quebre a tela
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F05080",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});