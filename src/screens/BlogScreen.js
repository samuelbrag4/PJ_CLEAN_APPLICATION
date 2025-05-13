import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";

const BlogScreen = () => {
  const sections = [
    {
      title: "Skincare",
      description: "Cuidar da pele vai muito além da estética — é uma forma de manter-se saudável e protegida. O skincare ajuda a prevenir o envelhecimento precoce, controla a oleosidade, estimula o crescimento de fios e corrige agressões diárias.",
      image1: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      image2: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      cards: [
        { title: "Hidratação com Argila", description: "Máscara de argila para remoção de impurezas." },
        { title: "Esfoliação", description: "Renove sua pele com esfoliação suave semanalmente." },
        { title: "Massagem", description: "Ative a circulação e relaxe com massagens faciais." },
        { title: "Tônico Facial", description: "Equilibre o pH da pele com um bom tônico." },
        { title: "Alimentação", description: "Inclua alimentos antioxidantes na sua dieta." },
        { title: "Proteção", description: "Não esqueça do protetor solar diariamente." },
      ],
    },
    {
      title: "Maquiagem",
      description: "A maquiagem realça a beleza natural e permite explorar diferentes estilos e tendências. Com os produtos certos, é possível destacar seus traços e expressar sua personalidade de forma criativa.",
      image1: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      image2: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      cards: [
        { title: "Base Perfeita", description: "Como escolher a base ideal para sua pele." },
        { title: "Contorno", description: "Dicas para um contorno natural e elegante." },
        { title: "Iluminador", description: "Realce seus traços com iluminação estratégica." },
        { title: "Olho Esfumado", description: "Passo a passo para um olhar marcante." },
        { title: "Batom Duradouro", description: "Técnicas para fixar o batom o dia todo." },
        { title: "Delineado Gatinho", description: "Truques para um delineado perfeito." },
      ],
    },
    {
      title: "Corpo",
      description: "Cuidar do corpo envolve práticas de bem-estar, hidratação e proteção. A rotina de cuidados corporais promove a saúde da pele, previne o ressecamento e proporciona momentos de autocuidado essenciais.",
      image1: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      image2: "https://solangefreire.com.br/wp-content/uploads/2019/07/2-5.jpg",
      cards: [
        { title: "Esfoliação Corporal", description: "Renove sua pele com esfoliação semanal." },
        { title: "Hidratação Profunda", description: "Mantenha a pele do corpo sempre macia." },
        { title: "Proteção Solar", description: "Importância do protetor no corpo." },
        { title: "Massagem Relaxante", description: "Benefícios das massagens para o bem-estar." },
        { title: "Banho Revitalizante", description: "Transforme o banho em um ritual relaxante." },
        { title: "Alimentação Balanceada", description: "Como a nutrição impacta a saúde da pele." },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header themeColor="#00DAC7" activePage="Blog" />

      <ScrollView style={styles.scroll}>
        {/* Título e Introdução */}
        <View style={styles.intro}>
          <Text style={styles.title}>Conheça e encontre dicas incríveis!!</Text>
          <Text style={styles.description}>
            Aqui, você encontrará dicas, tendências e informações sobre skincare, maquiagem, produtos de beleza e cuidados com o corpo.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dicas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Vídeos</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seções Dinâmicas */}
        {sections.map((section, index) => (
          <View key={index}>
            {renderSection(section)}
            {renderCards(section.cards)}
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

const renderSection = ({ title, description, image1, image2 }) => (
  <View style={styles.sectionContainer}>
    <Image source={{ uri: image1 }} style={styles.sectionImage} />
    <Image source={{ uri: image2 }} style={styles.sectionImage} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const renderCards = (cards) => (
  <View style={styles.cardsContainer}>
    {cards.map((tip, index) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: 'https://vittaespa.com.br/wp-content/uploads/2021/10/Imagem1.jpg' }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{tip.title}</Text>
        <Text style={styles.cardDescription}>{tip.description}</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  scroll: { flex: 1 },
  intro: { padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", color: "#000", marginBottom: 8 },
  description: { fontSize: 14, color: "#555", marginBottom: 16 },
  buttonRow: { flexDirection: "row", gap: 10 },
  button: { backgroundColor: "#00DAC7", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" },

  sectionContainer: { padding: 16, alignItems: "center" },
  sectionImage: { width: 300, height: 150, marginBottom: 10, borderRadius: 10 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#00DAC7", marginVertical: 8 },
  sectionDescription: { fontSize: 14, color: "#333", textAlign: "center" },

  cardsContainer: { padding: 16 },
  card: { backgroundColor: "#fff", padding: 16, marginBottom: 16, borderRadius: 10, elevation: 2 },
  cardImage: { width: "100%", height: 100, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  cardDescription: { fontSize: 13, color: "#666", marginBottom: 10 },
  cardButton: { alignSelf: "flex-start", backgroundColor: "#00DAC7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  cardButtonText: { color: "#fff", fontSize: 12 },
});

export default BlogScreen;
