import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"; // Importando a Footer

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header fixa no topo */}
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      {/* Conteúdo centralizado */}
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

      {/* Footer fixa no final */}
      <Footer themeColor="#F05080" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerWrapper: {
    minHeight: 100,
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F05080",
    marginBottom: 16,
    fontFamily: "Pacifico", // Se você estiver usando essa fonte personalizada
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#F05080",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
