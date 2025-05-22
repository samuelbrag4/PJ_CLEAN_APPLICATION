import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfoCard from "../components/InfoCard";

const MakeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header themeColor="#F05080" activePage="Blog" />

      {/* Conteúdo principal */}

      <HeroSection
        corPrincipal="#F05080"
        linkImage="https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
        title="A arte de se maquiar!"
        text="Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"
      />

      <InfoCard
        image="https://cdn.dooca.store/140109/files/img-9426.jpeg?v=1693943921"
        title="Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
        description="Cuide da sua pele com dicas, produtos e orientações para uma rotina de skincare personalizada. Pequenos gestos podem deixar sua pele saudável, radiante e pronta para brilhar, pois cuidar da pele é cuidar de si mesma."
        buttonText="Ler mais"
        buttonColor="#F05080" 
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MakeScreen;