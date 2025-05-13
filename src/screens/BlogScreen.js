import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#00DAC7" activePage="Blog" />

      {/* Conteúdo principal */}
      
      <HeroSection
        linkImage="https://i.pinimg.com/736x/cc/d7/f1/ccd7f15523a1891ec4b20fc2002221c4.jpg"
        title="Conheça e encotre dicas incríveis!!"
        text="Aqui, você encontrará dicas, tendências e informações sobre skincare, produtos de beleza e cuidados com o corpo. Nosso objetivo é ajudar você a escolher os melhores produtos para a sua rotina, entender os ingredientes e descobrir novas formas de cuidar da sua pele. Fique por dentro das novidades e aproveite nossas recomendações para realçar sua beleza da melhor forma!"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
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

export default BlogScreen;