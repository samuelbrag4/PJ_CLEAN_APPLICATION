import Header from "../components/Header.js";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContaScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header com as propriedades obrigatórias */}
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>
      <Text style={styles.text}>Página Conta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#F05080",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#333" },
});

export default ContaScreen;
