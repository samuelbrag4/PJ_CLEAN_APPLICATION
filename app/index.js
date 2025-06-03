import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const SkinTypeCard = ({ title, type, description, highlight }) => {
  return (
    <View style={styles.skinCard}>
      {highlight && <Text style={styles.highlightText}>{highlight}</Text>}
      <Text style={styles.skinTitle}>{title}</Text>
      <Text style={styles.skinType}>{type}</Text>
      <Text style={styles.skinSubtitle}>Descubra seu tipo de pele</Text>
      {description.map((item, index) => (
        <View key={index} style={styles.skinItem}>
          <Text style={styles.checkmark}>✔</Text>
          <Text style={styles.skinItemText}>{item}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.skinButton}>
        <Text style={styles.skinButtonText}>Ver Mais em Blog</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
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
          Descubra 8 dicas de beleza simples para começar hoje mesmo e deixar a
          pele ainda mais radiante.
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
        <View style={styles.corContainer}>
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
          <Text style={styles.cardQuestion}>
            O que não pode faltar na maquiagem?
          </Text>
          <TouchableOpacity>
            <Text style={styles.cardLink}>LER MAIS</Text>
          </TouchableOpacity>
          <Text style={styles.cardNumberLarge}>3</Text>
        </View>
        </View>

        {/* Produtos Populares */}
        <Text style={styles.sectionTitle}>Produtos Populares</Text>
        <Text style={styles.sectionSubtitle}>
          Os produtos mais procurados da internet! Onde você encontra eles? Aqui
          mesmo.
        </Text>

        {[1, 2, 3].map((_, i) => (
          <View key={i} style={styles.productCard}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.productTitle}>Produto Tal</Text>
            <Text style={styles.productDescription}>
              Kit anti-acne avançado com 5 produtos: um gel de limpeza com mix
              de tensoativos + salicílico + glicerina, um sérum com mix de 4
              ativos
            </Text>
            <Text style={styles.productRating}>⭐️⭐️⭐️⭐️⭐️ (18)</Text>
            <Text style={styles.productLink}>Get Started</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>
          Autocuidado: importância, como praticar e dicas
        </Text>
        <Text style={styles.signature}>By clean</Text>

        {/* Cards de Tipo de Pele */}
        <Text style={styles.sectionTitle}>Qual Seu Tipo De Pele?</Text>
        <View style={{ gap: 20 }}>
          <SkinTypeCard
            title="Produtos para pele"
            type="Mista"
            description={[
              "Oleosidade apenas na zona T ou seja, testa, nariz e queixo.",
              "As bochechas e extremidades do rosto são secas.",
              "Acessa a todas as classes",
            ]}
          />

          <SkinTypeCard
            title="Produtos para pele"
            type="Oleosa"
            highlight="RECOMENDADO"
            description={[
              "Poros dilatados em todo o rosto",
              "Aspecto úmido e brilhante",
              "Tendência à acne.",
            ]}
          />

          <SkinTypeCard
            title="Produtos para pele"
            type="Seca"
            description={[
              "O rosto fica sensível e avermelhado com muita facilidade",
              "Coceira e até descamação.",
              "A textura da pele seca também costuma ser irregular e mais áspera",
            ]}
          />
        </View>

        {/* Texto sobre o blog */}
        <View style={styles.blogSection}>
          <Text style={styles.blogTitle}>
            Venha Conhecer Nosso Blog Sobre Auto Cuidado
          </Text>
          <Text style={styles.blogDescription}>
            No meio da correria do dia a dia, cuidar de si mesmo(a) é essencial.
            Aqui no Clean, você encontra dicas práticas, produtos incríveis e
            inspiração para se sentir bem, por dentro e por fora. Autocuidado é
            se cuidar com carinho, e beleza é sobre se expressar. Aqui, unimos
            os dois para você! Explore, cuide-se e brilhe! 💖
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerWrapper: { width: "100%", backgroundColor: "#FFB7C5" },
  scrollContent: { padding: 20, paddingBottom: 100 },
  mainTitle: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  mainSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: { textAlign: "center", color: "#666", marginBottom: 5 },
  tips: { textAlign: "center", color: "#888", marginBottom: 20 },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },
  readMoreButton: {
    backgroundColor: "#F05080",
    padding: 10,
    borderRadius: 10,
  },
  aboutButton: {
    borderColor: "#F05080",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: { color: "#fff" },
  aboutButtonText: { color: "#F05080" },
  corContainer: {
    backgroundColor: "#FFB7C5",
    marginLeft: -20,
    marginRight:-20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
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
  cardNumber: {
    position: "absolute",
    right: 10,
    bottom: 10,
    fontSize: 30,
    color: "#ccc",
  },
  cardNumberLarge: {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 40,
    color: "#fff",
  },
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
  blogSection: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  blogDescription: {
    textAlign: "center",
    marginTop: 10,
    color: "#555",
  },
  signature: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#00BFD5",
    textAlign: "center",
    marginTop: 10,
  },

  // 👇 Estilos novos para os cards de pele
  skinCard: {
    backgroundColor: "#00E6D1",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  highlightText: {
    color: "#fff",
    backgroundColor: "#00c5b5",
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 5,
    fontSize: 12,
  },
  skinTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  skinType: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  skinSubtitle: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 10,
  },
  skinItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  checkmark: {
    color: "#fff",
    marginRight: 8,
    fontSize: 14,
  },
  skinItemText: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
  },
  skinButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  skinButtonText: {
    color: "#00CDB8",
    fontWeight: "600",
    fontSize: 14,
  },
  arrow: {
    color: "#00CDB8",
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
