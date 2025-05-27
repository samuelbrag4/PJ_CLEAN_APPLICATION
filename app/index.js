import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Seção inicial */}
        <Text style={styles.mainTitle}>Aqui a sua Beleza Entra</Text>
        <Text style={styles.mainSubtitle}>em Primeiro Lugar</Text>
        <Text style={styles.description}>
          Quer saber como ter uma pele naturalmente bonita?
        </Text>
        <Text style={styles.tips}>
          Descubra 8 dicas de beleza simples para começar hoje mesmo e deixar a pele ainda mais radiante.
        </Text>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.buttonText}>Ler mais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutButton}>
            <Text style={styles.aboutButtonText}>Sobre</Text>
          </TouchableOpacity>
        </View>

        {/* Cards 1, 2, 3 */}
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Página De{"\n"}Skincare.</Text>
            <Text style={styles.cardNumber}>1</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Página De{"\n"}Corpo.</Text>
            <Text style={styles.cardNumber}>2</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardLarge]}>
          <Text style={styles.cardTitle}>Página De{"\n"}Maquiagem.</Text>
          <Text style={styles.cardQuestion}>O que não pode faltar na maquiagem?</Text>
          <TouchableOpacity>
            <Text style={styles.cardLink}>LER MAIS</Text>
          </TouchableOpacity>
          <Text style={styles.cardNumberLarge}>3</Text>
        </View>

        {/* Produtos Populares */}
        <Text style={styles.sectionTitle}>Produtos Populares</Text>
        <Text style={styles.sectionSubtitle}>
          Os produtos mais procurados da internet! Onde você encontra eles? Aqui mesmo.
        </Text>

        {[1, 2, 3].map((_, i) => (
          <View key={i} style={styles.productCard}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.productTitle}>Produto Tal</Text>
            <Text style={styles.productDescription}>
              Kit anti-acne avançado com 5 produtos: um gel de limpeza com mix de tensoativos + salicílico + glicerina, um sérum com mix de 4 ativos
            </Text>
            <Text style={styles.productRating}>⭐️⭐️⭐️⭐️⭐️ (18)</Text>
            <Text style={styles.productLink}>Get Started</Text>
          </View>
        ))}

        {/* NOVA SEÇÃO: Tipo de Pele + Cards */}
        <View style={{ marginTop: 40 }}>
          <Text style={styles.peleIntro}>
            Você sabia que autocuidado é tão importante como cuidar da saúde?
          </Text>
          <Text style={styles.peleIntro2}>
            Vivemos em um mundo tão agitado que, pensar em parar uns minutos para cuidar de si mesmo, pode não ser tão fácil assim.
          </Text>

          <TouchableOpacity style={styles.botaoComecar}>
            <Text style={styles.botaoComecarTexto}>Começar</Text>
          </TouchableOpacity>

          <Text style={styles.peleTitulo}>Qual Seu Tipo De Pele?</Text>
          <Text style={styles.peleSubtitulo}>Oleosa? Seca ou Mista.</Text>
          <Text style={styles.peleSubdescricao}>Descubra agora.</Text>

          <View style={styles.cardTipoPele}>
            <Text style={styles.cardTipoTitulo}>Produtos para pele</Text>
            <Text style={styles.cardTipoTipo}>Mista</Text>
            <Text style={styles.cardTipoDescricao}>Descubra seu tipo de pele</Text>

            <View style={styles.cardItem}>
              <Text>✅ Oleosidade apenas na zona T ou seja, testa, nariz e queixo.</Text>
            </View>
            <View style={styles.cardItem}>
              <Text>✅ As bochechas e extremidades do rosto são secas.</Text>
            </View>
            <View style={styles.cardItem}>
              <Text>✅ Acces to all classes</Text>
            </View>

            <TouchableOpacity style={styles.botaoVerMais}>
              <Text style={styles.botaoVerMaisTexto}>Ver Mais em Blog</Text>
              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={styles.statsNumber}>84%</Text>
            <Text style={styles.statsText}>Dos Brasileiros</Text>
            <Text style={styles.statsSub}>
              Buscam ter uma rotina de autocuidado, mas apenas um terço consegue, revela pesquisa
            </Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.statsNumber}>97%</Text>
            <Text style={styles.statsText}>Dos Brasileiros</Text>
            <Text style={styles.statsSub}>
              Buscam ter uma rotina de autocuidado, mas apenas um terço consegue, revela pesquisa
            </Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          61,7% dos brasileiros adotaram algum ritual de autocuidado. Este dado é um sinal positivo de que cada vez mais pessoas estão reconhecendo a necessidade de equilibrar a saúde mental e física em suas vidas.
        </Text>

        <Text style={styles.subsectionTitle}>Autocuidado:</Text>
        <Text style={styles.subsectionSub}>importância, como</Text>
        <Text style={styles.subsectionSub}>praticar e dicas</Text>
        <Text style={styles.signature}>By clean</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerWrapper: { width: "100%", backgroundColor: "#F05080" },
  scrollContent: { padding: 20, paddingBottom: 100 },

  mainTitle: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  mainSubtitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  description: { textAlign: "center", color: "#666", marginBottom: 5 },
  tips: { textAlign: "center", color: "#888", marginBottom: 20 },

  actionButtons: { flexDirection: "row", justifyContent: "center", gap: 10, marginBottom: 30 },
  readMoreButton: { backgroundColor: "#F05080", padding: 10, borderRadius: 10 },
  aboutButton: { borderColor: "#F05080", borderWidth: 1, padding: 10, borderRadius: 10 },
  buttonText: { color: "#fff" },
  aboutButtonText: { color: "#F05080" },

  cardRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
  },
  cardLarge: {
    backgroundColor: "#F89DBF",
    marginVertical: 10,
    position: "relative",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  cardNumber: { position: "absolute", right: 10, bottom: 10, fontSize: 30, color: "#ccc" },
  cardNumberLarge: { position: "absolute", right: 10, top: 10, fontSize: 40, color: "#fff" },
  cardQuestion: { color: "#fff", marginTop: 10 },
  cardLink: { color: "#fff", fontWeight: "bold", marginTop: 5 },

  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
  sectionSubtitle: { textAlign: "center", marginBottom: 20 },

  productCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: { fontWeight: "bold" },
  productDescription: { fontSize: 13, color: "#666" },
  productRating: { marginTop: 5, color: "#F05080" },
  productLink: { textAlign: "right", color: "#F05080", fontWeight: "bold" },

  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 20 },
  statsBox: { width: "48%" },
  statsNumber: { fontSize: 28, fontWeight: "bold" },
  statsText: { fontWeight: "bold" },
  statsSub: { fontSize: 13, color: "#444" },

  paragraph: { fontSize: 14, color: "#555", marginBottom: 20 },

  subsectionTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  subsectionSub: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  signature: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#00BFD5",
    textAlign: "center",
    marginTop: 10,
  },

  // Novos estilos da seção de pele
  peleIntro: {
    textAlign: "center",
    fontSize: 13,
    color: "#444",
    marginBottom: 5,
  },
  peleIntro2: {
    textAlign: "center",
    fontSize: 13,
    color: "#666",
    marginBottom: 15,
  },
  botaoComecar: {
    alignSelf: "center",
    backgroundColor: "#00E3F2",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  botaoComecarTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  peleTitulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  peleSubtitulo: {
    textAlign: "center",
    color: "#666",
  },
  peleSubdescricao: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
  },
  cardTipoPele: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTipoTitulo: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  cardTipoTipo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardTipoDescricao: {
    marginBottom: 20,
    color: "#666",
  },
  cardItem: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  botaoVerMais: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00E3F2",
    borderRadius: 10,
    paddingVertical: 10,
  },
  botaoVerMaisTexto: {
    color: "#00E3F2",
    fontWeight: "bold",
    marginRight: 5,
  },
  seta: {
    color: "#00E3F2",
    fontWeight: "bold",
  },
});
