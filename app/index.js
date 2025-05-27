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
        {/* Seção de boas-vindas (original) */}
        <Text style={styles.title}>Bem Vindo a Home!</Text>
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

        {/* Novo conteúdo baseado na imagem (adicionado abaixo dos botões originais) */}
        <View style={styles.imageContent}>
          <Text style={styles.mainTitle}>Aqui a sua Beleza Entra</Text>
          <Text style={styles.mainSubtitle}>em Primeiro Lugar</Text>

          <Text style={styles.description}>
            Quer saber como ter uma pele naturalmente bonita?
          </Text>

          <Text style={styles.tips}>
            Descubra 8 dicas de beleza simples para começar
            hoje mesmo e deixar a pele ainda mais radiante.
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.buttonText}>Ler mais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutButton}>
              <Text style={styles.aboutButtonText}>Sobre</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.pageIndicators}>
            <View style={styles.pageIndicator}>
              <Text style={styles.pageText}>Página De Skincare.</Text>
              <View style={styles.pageNumber}>
                <Text style={styles.numberText}>1</Text>
              </View>
            </View>

            <View style={styles.pageIndicator}>
              <Text style={styles.pageText}>Página De Corpo.</Text>
              <View style={styles.pageNumber}>
                <Text style={styles.numberText}>2</Text>
              </View>
            </View>

            <View style={styles.pageIndicator}>
              <Text style={styles.pageText}>Página De Maquiagem.</Text>
              <View style={styles.pageNumber}>
                <Text style={styles.numberText}>3</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <Text style={styles.question}>O que não pode faltar na maquiagem?</Text>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>LER MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    position: "relative",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#F05080",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  // Estilos originais mantidos
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
  // Novos estilos adicionados para o conteúdo da imagem
  imageContent: {
    marginTop: 30,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  mainSubtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  tips: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  readMoreButton: {
    backgroundColor: "#F05080",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginRight: 15,
  },
  aboutButton: {
    borderWidth: 1,
    borderColor: "#F05080",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  aboutButtonText: {
    color: "#F05080",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    marginVertical: 20,
  },
  pageIndicators: {
    marginBottom: 30,
  },
  pageIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  pageText: {
    fontSize: 16,
    color: "#555",
  },
  pageNumber: {
    backgroundColor: "#F05080",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  bottomSection: {
    marginTop: 20,
  },
  question: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  bottomButton: {
    backgroundColor: "#F05080",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});