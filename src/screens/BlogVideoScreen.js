import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const BlogVideoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header themeColor="#00DAC7" activePage="Blog" />
      <Text>BLOG VIDEOS</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  }
});

export default BlogVideoScreen;