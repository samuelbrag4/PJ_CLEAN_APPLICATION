import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Header from "../components/Header";

const SkinTypeCard = ({ title, type, description, highlight }) => (
  <View style={styles.skinCard}>
    {highlight && <Text style={styles.highlightText}>{highlight}</Text>}
    <Text style={styles.skinTitle}>{title}</Text>
    <Text style={styles.skinType}>{type}</Text>
    <Text style={styles.skinSubtitle}>Descubra seu tipo de pele</Text>
    {description.map((item, index) => (
      <View key={index} style={styles.skinItem}>
        <Text style={styles.checkmark}>✔</Text>
        <Text style={styles.skinItemText}>{item}</Text>
      </View>
    ))}
    <TouchableOpacity style={styles.skinButton}>
      <Text style={styles.skinButtonText}>Ver Mais em Blog</Text>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  </View>
);

export default function HomeScreen() {
  const [pressedCategory, setPressedCategory] = useState(null);

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

  const popularProducts = [
    {
      imagem: "https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/10bf8c82-5581-4b70-8c4b-712651152076___cd36f2ce8e2234cf1cf4ea132c04b2c0.png",
      titulo: "Ácido Mandélico",
      descricao: "Efeito clareador, antiacneico e regulador da oleosidade. Esfolia suavemente a pele.",
      nota: "⭐️⭐️⭐️⭐️⭐️ (25)",
    },
    {
      imagem: "https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/a1502766-65a2-4d16-bf13-9de46a1d68b8___ad927ad9afecd9294ff7927d9c888043.png",
      titulo: "Ácido Glicólico",
      descricao: "Uniformiza, melhora textura, controla oleosidade e estimula colágeno.",
      nota: "⭐️⭐️⭐️⭐️ (13)",
    },
    {
      imagem: "https://creamy.vtexassets.com/arquivos/ids/157070-768-768/01.jpg?v=638446358897930000",
      titulo: "Calming Cream",
      descricao: "Hidratante leve que acalma peles sensíveis ou sensibilizadas.",
      nota: "⭐️⭐️⭐️⭐️⭐️ (40)",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Home" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Boas-vindas */}
        <View style={styles.welcomeSection}>
          <FontAwesome name="home" size={40} color="#F05080" />
          <Text style={styles.welcomeTitle}>Bem-vindo à Home!</Text>
          <Text style={styles.welcomeSubtitle}>
            Produtos de skincare, maquiagem e cuidados com a pele.
          </Text>
        </View>

        {/* Categorias */}
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
                  <View style={[
                    styles.categoryContent,
                    { borderTopColor: category.color },
                    pressedCategory === index && styles.categoryContentPressed
                  ]}>
                    <View style={[
                      styles.categoryIconContainer,
                      { backgroundColor: category.color + '20' },
                      pressedCategory === index && [
                        styles.categoryIconContainerPressed,
                        { backgroundColor: category.color + '40' }
                      ]
                    ]}>
                      <Feather
                        name={category.icon}
                        size={pressedCategory === index ? 26 : 24}
                        color={category.color}
                      />
                    </View>
                    <Text style={[
                      styles.categoryName,
                      pressedCategory === index && {
                        color: category.color,
                        fontSize: 15
                      }
                    ]}>
                      {category.name}
                    </Text>
                    <Text style={[
                      styles.categoryDescription,
                      pressedCategory === index && { color: '#555' }
                    ]}>
                      {category.description}
                    </Text>
                  </View>
                </Link>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Produtos Populares */}
        <Text style={styles.sectionTitle}>Produtos Populares</Text>
        <Text style={styles.sectionSubtitle}>
          Os produtos mais procurados da internet! Onde você encontra eles? Aqui mesmo.
        </Text>
        {popularProducts.map((produto, i) => (
          <View key={i} style={styles.productCard}>
            <Image
              source={{ uri: produto.imagem }}
              style={styles.productImage}
              resizeMode="cover"
            />
            <Text style={styles.productTitle}>{produto.titulo}</Text>
            <Text style={styles.productDescription}>{produto.descricao}</Text>
            <Text style={styles.productRating}>{produto.nota}</Text>
            <Text style={styles.productLink}>Get Started</Text>
          </View>
        ))}

        {/* Cards de tipos de pele */}
        <Text style={styles.sectionTitle}>Qual Seu Tipo De Pele?</Text>
        <View style={{ gap: 20 }}>
          <SkinTypeCard
            title="Produtos para pele"
            type="Mista"
            description={[
              "Oleosidade na zona T: testa, nariz e queixo.",
              "Extremidades do rosto secas.",
              "Acessível a todas as classes.",
            ]}
          />
          <SkinTypeCard
            title="Produtos para pele"
            type="Oleosa"
            highlight="RECOMENDADO"
            description={[
              "Poros dilatados e brilho em todo o rosto.",
              "Tendência à acne.",
            ]}
          />
          <SkinTypeCard
            title="Produtos para pele"
            type="Seca"
            description={[
              "Sensível e avermelhada com facilidade.",
              "Textura áspera e propensa à descamação.",
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  headerWrapper: { width: "100%", backgroundColor: "#FFB7C5" },
  scrollContent: { padding: 20, paddingBottom: 100 },
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
    gap: 12,
  },
  categoryCard: {
    flex: 1,
  },
  categoryLink: {
    textDecorationLine: "none",
  },
  categoryContent: {
    backgroundColor: "#FFF",
    borderTopWidth: 4,
    borderTopColor: "#CCC",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  categoryContentPressed: {
    backgroundColor: "#F3F3F3",
    transform: [{ scale: 1.05 }],
  },
  categoryIconContainer: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryIconContainerPressed: {
    transform: [{ scale: 1.05 }],
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
    color: "#333",
  },
  categoryDescription: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: "#FFF",
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  productRating: {
    fontSize: 13,
    color: "#999",
    marginTop: 6,
  },
  productLink: {
    marginTop: 10,
    color: "#F05080",
    fontWeight: "600",
    fontSize: 14,
  },
  skinCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  highlightText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F05080",
    marginBottom: 6,
  },
  skinTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  skinType: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 6,
  },
  skinSubtitle: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  skinItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  checkmark: {
    marginRight: 6,
    color: "#00DAC7",
    fontWeight: "bold",
  },
  skinItemText: {
    fontSize: 13,
    color: "#555",
  },
  skinButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  skinButtonText: {
    color: "#F05080",
    fontWeight: "600",
  },
  arrow: {
    marginLeft: 5,
    color: "#F05080",
  },
});
