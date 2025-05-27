import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Seção de texto principal */}
        <View style={styles.introSection}>
          <Text style={styles.mainTitle}>
            Aqui a sua Beleza Entra{"\n"}em Primeiro Lugar
          </Text>
          <Text style={styles.mainSubtitle}>
            Quer saber como ter uma pele naturalmente bonita?
          </Text>
          <Text style={styles.mainSubtitle}>
            Descubra 8 dicas de beleza simples para começar{"\n"}hoje mesmo e
            deixar a pele ainda mais radiante.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.pinkButton}>
              <Text style={styles.buttonText}>Ler mais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteButton}>
              <Text style={styles.whiteButtonText}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards: Skincare, Corpo, Maquiagem */}
        <View style={styles.cardGrid}>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Página{"\n"}De{"\n"}Skincare.</Text>
              <Text style={styles.cardNumber}>1</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Página{"\n"}De{"\n"}Corpo.</Text>
              <Text style={styles.cardNumber}>2</Text>
            </View>
          </View>
          <View style={styles.cardFull}>
            <Text style={styles.cardTitle}>Página{"\n"}De{"\n"}Maquiagem.</Text>
            <Text style={styles.cardInfo}>O que não pode faltar na maquiagem?</Text>
            <Text style={styles.cardLink}>LER MAIS</Text>
            <Text style={styles.cardNumberFull}>3</Text>
          </View>
        </View>

        {/* Produtos Populares */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produtos Populares</Text>
          <Text style={styles.sectionSubtitle}>
            Os produtos mais procurados da internet! Onde você encontra eles?
            Aqui mesmo.
          </Text>
        </View>

        <View style={styles.cardContainer}>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.productCard}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.productTitle}>Produto Tal</Text>
              <Text style={styles.productDescription}>
                Kit anti-acne avançado com 5 produtos: um gel de limpeza com mix
                de tensoativos + salicílico + glicerina, um sérum com mix de 4
                ativos
              </Text>
              <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ (18)</Text>
              <Text style={styles.getStarted}>Get Started</Text>
            </View>
          ))}
        </View>

        {/* Cards com imagem abaixo */}
        <View style={styles.cardContainer}>
          {[1, 2, 3].map((_, i) => (
            <View key={i} style={styles.imageCard}>
              <View style={styles.imageSlot}>
                {/* <Image source={require("...")} style={styles.imageSlot} /> */}
              </View>
              <Text style={styles.productTitle}>Produto Tal</Text>
              <Text style={styles.productDescription}>
                Kit anti-acne avançado com 5 produtos: um gel de limpeza com mix
                de tensoativos + salicílico + glicerina, um sérum com mix de 4
                ativos
              </Text>
              <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ (18)</Text>
              <Text style={styles.getStarted}>Get Started</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Footer themeColor="#F05080" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerWrapper: {
    backgroundColor: "#F05080",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  introSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
    marginBottom: 12,
  },
  mainSubtitle: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 12,
  },
  pinkButton: {
    backgroundColor: "#F05080",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  whiteButton: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  whiteButtonText: {
    color: "#000",
    fontWeight: "bold",
  },

  section: {
    marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 4,
  },
  cardGrid: {
    backgroundColor: "#FEC8D8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  cardFull: {
    backgroundColor: "#F78DA7",
    borderRadius: 10,
    padding: 20,
    marginTop: 8,
    position: "relative",
  },
  cardTitle: {
    fontFamily: "cursive",
    fontSize: 20,
    color: "#2c0d0d",
    fontWeight: "bold",
  },
  cardNumber: {
    fontSize: 28,
    color: "#ccc",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  cardNumberFull: {
    position: "absolute",
    top: 10,
    right: 15,
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  cardInfo: {
    color: "#fff",
    fontSize: 14,
    marginTop: 8,
  },
  cardLink: {
    marginTop: 6,
    color: "#fff",
    fontWeight: "bold",
  },
  cardContainer: {
    gap: 16,
    marginBottom: 30,
  },
  productCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#fff",
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    marginBottom: 4,
  },
  getStarted: {
    color: "#F05080",
    fontWeight: "bold",
    fontSize: 12,
  },
  imageCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#fff",
  },
  imageSlot: {
    height: 120,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
  },
});
