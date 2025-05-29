// filepath: c:\Users\Aluno DS\Documents\GitHub\clean_application\app\blog-artigo.js
import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const BlogArtigoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header themeColor="#00DAC7" activePage="Blog" />
      <Text>BLOG ARTIGOS</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  }
});

export default BlogArtigoScreen;