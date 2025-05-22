import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { View, Text, StyleSheet } from "react-native";

const SkincareScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#5FCED4" activePage="Skincare" />

      <HeroSection
        corPrincipal="#5FCED4"
        linkImage="https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"
        title="Beleza começa com uma pele bem cuidada."
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
  text: { fontSize: 18, fontWeight: "bold", color: "#333" },
});

export default SkincareScreen;