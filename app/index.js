import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F05080",
    marginBottom: 16,
    fontFamily: "Pacifico", // Use a fonte Pacifico se estiver carregada
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
});