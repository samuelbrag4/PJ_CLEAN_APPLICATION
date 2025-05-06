import React from "react";
import Header from "../components/Header";
import { View, Text, StyleSheet } from "react-native";

const SkincareScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#5FCED4" activePage="Skincare" />

      <Text style={styles.text}>Página Skincare</Text>
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