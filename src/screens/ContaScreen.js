import Header from "../components/Header.js";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ContaScreen = () => {
  const navigation = useNavigation();

  // Dados do usuário
  const userData = {
    name: "Ana Florzinha",
    email: "ana.florzinha@email.com",
    avatar: "https://i.pinimg.com/564x/3a/53/53/3a5353e7f0b5f4e0f7e2e6e5d8a5d5e5.jpg",
  };

  // Seções principais com navegação
  const sections = [
    { 
      title: "Meu Cadastro", 
      icon: "user",
      items: [
        { 
          name: "Cadastro", 
          onPress: () => navigation.navigate('CorpoScreen') // Usando a tela CorpoScreen existente (passando parâmetros)
        }
      ]
    },
    { 
      title: "Meus Favoritos", 
      icon: "heart",
      items: [
        { 
          name: "Produtos salvos (12)", 
          onPress: () => navigation.navigate('FavsScreen') // Tela existente
        },
        { 
          name: "Lojas favoritas (3)", 
          onPress: () => navigation.navigate('FavsScreen', { tab: 'stores' }) // Pode passar parâmetros
        }
      ]
    },
    { 
      title: "Meus Comentários", 
      icon: "message-square",
      items: [
        { 
          name: "Avaliações (5)", 
          onPress: () => navigation.navigate('ComentScreen') // Tela existente
        },
        { 
          name: "Comentários (8)", 
          onPress: () => navigation.navigate('ComentScreen', { tab: 'comments' }) // Pode passar parâmetros
        }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Conta" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Perfil */}
        <View style={styles.profileSection}>
          <Image source={{ uri: userData.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
        </View>

        {/* Seções */}
        <View style={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Feather name={section.icon} size={20} color="#FF7EB9" />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity 
                  key={itemIndex} 
                  style={styles.itemButton}
                  onPress={item.onPress}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Feather name="chevron-right" size={18} color="#CCC" />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// Estilos (mantidos os mesmos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FB",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#FF7EB9",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#FF7EB9",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#FF7EB9",
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },
  sectionsContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  sectionCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF7EB9",
    marginLeft: 8,
  },
  itemButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  itemText: {
    fontSize: 15,
    color: "#555",
  },
});



export default ContaScreen;