import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  const [pressedCategory, setPressedCategory] = useState(null);

  const navigationSections = [
    {
      title: "Acesso à Conta",
      icon: "user",
      items: [
        { 
          name: "Fazer Login", 
          href: "/login",
          icon: "sign-in",
          description: "Acesse sua conta existente"
        },
        { 
          name: "Criar Conta", 
          href: "/signup",
          icon: "user-plus",
          description: "Registre-se gratuitamente"
        }
      ]
    },
    {
      title: "Explorar Produtos",
      icon: "shopping-bag",
      items: [
        { 
          name: "Ver Produtos", 
          href: "/produto",
          icon: "heart",
          description: "Descubra nossa coleção"
        },
        { 
          name: "Blog", 
          href: "/blog",
          icon: "edit",
          description: "Dicas e novidades de beleza"
        }
      ]
    },
    {
      title: "Suporte",
      icon: "help-circle",
      items: [
        { 
          name: "Fale Conosco", 
          href: "/contato",
          icon: "envelope",
          description: "Tire suas dúvidas"
        }
      ]
    }
  ];

  const productCategories = [
    {
      name: "Skincare",
      icon: "droplet",
      color: "#00DAC7",
      description: "Cuidados com o rosto",
      href: "/skincare"
    },
    {
      name: "Maquiagem",
      icon: "heart",
      color: "#F05080",
      description: "Beleza e glamour",
      href: "/make"
    },
    {
      name: "Corpo",
      icon: "user",
      color: "#DBBD9C",
      description: "Cuidados corporais",
      href: "/corpo"
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header fixa no topo */}
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seção de boas-vindas */}
        <View style={styles.welcomeSection}>
          <FontAwesome name="home" size={40} color="#F05080" />
          <Text style={styles.welcomeTitle}>Bem-vindo à Home!</Text>
          <Text style={styles.welcomeSubtitle}>
            Produtos de skincare, maquiagem e cuidados com a pele.
          </Text>
        </View>

        {/* Categorias de Produtos */}
        <View style={styles.categoriesSection}>
          <Text style={styles.categoriesTitle}>Nossas Categorias</Text>
          <View style={styles.categoriesGrid}>
            {productCategories.map((category, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.categoryCard}
                activeOpacity={0.8}
                onPressIn={() => setPressedCategory(index)}
                onPressOut={() => setPressedCategory(null)}
              >
                <Link href={category.href} style={styles.categoryLink}>
                  <View 
                    style={[
                      styles.categoryContent, 
                      { borderTopColor: category.color },
                      pressedCategory === index && styles.categoryContentPressed
                    ]}
                  >
                    <View 
                      style={[
                        styles.categoryIconContainer, 
                        { backgroundColor: category.color + '20' },
                        pressedCategory === index && [
                          styles.categoryIconContainerPressed,
                          { backgroundColor: category.color + '40' }
                        ]
                      ]}
                    >
                      <Feather 
                        name={category.icon} 
                        size={pressedCategory === index ? 26 : 24} 
                        color={category.color} 
                      />
                    </View>
                    <Text 
                      style={[
                        styles.categoryName,
                        pressedCategory === index && { 
                          color: category.color,
                          fontSize: 15
                        }
                      ]}
                    >
                      {category.name}
                    </Text>
                    <Text 
                      style={[
                        styles.categoryDescription,
                        pressedCategory === index && { color: '#555' }
                      ]}
                    >
                      {category.description}
                    </Text>
                  </View>
                </Link>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu de navegação */}
        <View style={styles.sectionsContainer}>
          {navigationSections.map((section, index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Feather name={section.icon} size={20} color="#F05080" />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.itemButton}
                  activeOpacity={0.7}
                >
                  <Link href={item.href} style={styles.itemLink}>
                    <View style={styles.itemContent}>
                      <View style={styles.itemLeft}>
                        <FontAwesome name={item.icon} size={16} color="#F05080" />
                        <View style={styles.itemTextContainer}>
                          <Text style={styles.itemText}>{item.name}</Text>
                          <Text style={styles.itemDescription}>{item.description}</Text>
                        </View>
                      </View>
                      <Feather name="chevron-right" size={18} color="#CCC" />
                    </View>
                  </Link>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer fixa no rodapé */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#F05080",
    overflow: "hidden",
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  welcomeSection: {
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#F05080",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  sectionsContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
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
    color: "#F05080",
    marginLeft: 8,
  },
  categoriesSection: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  categoryCard: {
    width: "31%",
    marginBottom: 15,
  },
  categoryLink: {
    width: "100%",
  },
  categoryContent: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    borderTopWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    transform: [{ scale: 1 }],
    height: 130,
    justifyContent: "center",
  },
  categoryContentPressed: {
    backgroundColor: "#F8F8F8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    transform: [{ scale: 0.98 }],
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    transform: [{ scale: 1 }],
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    lineHeight: 13,
    paddingHorizontal: 2,
  },
  itemButton: {
    paddingVertical: 8,
  },
  itemLink: {
    width: "100%",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  itemText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 12,
    color: "#888",
  },
  highlightSection: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  benefitsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 13,
    color: "#555",
    marginLeft: 8,
    flex: 1,
  },
});