import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const CorpoScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#DBBD9C" activePage="Blog" />

      {/* Conteúdo principal */}
      
      <HeroSection
        corPrincipal="#DBBD9C"
        linkImage="https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"
        title="Seu corpo merece todo o cuidado e atenção para se sentir bem."
        text="Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
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

export default CorpoScreen;