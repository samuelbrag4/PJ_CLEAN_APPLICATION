import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogScreen = () => {
  const navigation = useNavigation();
  
  const articles = [
    { id: '1', title: 'Como cuidar da pele seca', preview: 'Dicas essenciais para hidratar sua pele...' },
    { id: '2', title: 'Rotina de skincare matinal', preview: 'Passo a passo para começar bem o dia...' },
    { id: '3', title: 'Produtos para pele sensível', preview: 'Descubra os melhores ingredientes...' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nosso Blog</Text>
      
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.articleCard}
            onPress={() => navigation.navigate('BlogArtigo', { articleId: item.id })}
          >
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.articlePreview}>{item.preview}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 20,
  },
  articleCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  articlePreview: {
    fontSize: 14,
    color: '#666',
  },
});

export default BlogScreen;