import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/Header";

const ProdutosScreen = () => {
  // Dados dos produtos
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Creme Hidratante Facial',
      brand: 'Nivea',
      price: 39.90,
      rating: 4.7,
      image: 'https://images.tcdn.com.br/img/img_prod/926373/creme_hidratante_facial_lata_nivea_56g_33_4_fda70b6f889ac923fda5246eeec97507_20220825113147.jpeg',
      category: 'skincare'
    },

    {
      id: '2',
      name: 'Loção Corporal',
      brand: 'Natura',
      price: 45.90,
      rating: 4.5,
      image: 'https://farmadelivery.fbitsstatic.net/img/p/hidratante-corporal-natura-tododia-ameixa-e-flor-de-cerejeira-400ml-208915/395467.jpg?w=596&h=596&v=no-value',
      category: 'body'
    },
    {
      id: '3',
      name: 'Batom Matte Vermelho',
      brand: 'Ruby Rose',
      price: 49.90,
      rating: 4.8,
      image: 'https://tfczxi.vtexassets.com/arquivos/ids/179536/batom-liquido-matte-melu-by-rubyrose-cor-red-velvet-cm06-01.jpg?v=638169260293400000',
      category: 'makeup'
    },
    {
      id: '4',
      name: 'Protetor Solar FPS 50',
      brand: 'La Roche-Posay',
      price: 89.90,
      rating: 4.8,
      image: 'https://product-data.raiadrogasil.io/images/3467041.webp',
      category: 'skincare'
    },
    {
      id: '5',
      name: 'Sabonete Líquido Corporal',
      brand: 'Dove',
      price: 22.90,
      rating: 4.6,
      image: 'https://drogal.vtexassets.com/arquivos/ids/249421/130570.jpg?v=638763419134230000',
      category: 'body'
    },
    {
      id: '6',
      name: 'Paleta de Sombras',
      brand: 'Vult',
      price: 59.90,
      rating: 4.7,
      image: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/523106-800-800/paleta-de-sombras-vult-essentials-rose--2-.jpg?v=638054266813530000',
      category: 'makeup'
    },

    {
      id: '7',
      name: 'Base Líquida Skin',
      brand: 'Bruna Tavares',
      price: 89.90,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/31dFE5nhetS._SS200_.jpg',
      category: 'makeup'
    },

    {
      id: '7',
      name: 'Hidratante Facial - Pele mista e Oleosa',
      brand: 'Natura',
      price: 89.90,
      rating: 4.8,
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwefd00299/NATBRA-91821_2.jpg',
      category: 'skincare'
    },

    {
      id: '7',
      name: 'Esfoliante Corporal Pitaya',
      brand: 'Labotrat',
      price: 89.90,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/61OT3D332nL._AC_SX679_.jpg',
      category: 'body'
    },

    {
      id: '7',
      name: 'Máscara de Cílios',
      brand: 'O Boticário',
      price: 89.90,
      rating: 4.8,
      image: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B50756/50756_MAKE-B_MASCARA-DE-CILIOS_CILIOS-POSTICOS_FRONTAL_1.jpg',
      category: 'makeup'
    },



  ]);

  // Estados para filtros
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categorias disponíveis (apenas as solicitadas)
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'skincare', name: 'Skincare' },
    { id: 'body', name: 'Corpo' },
    { id: 'makeup', name: 'Maquiagem' },
  ];

  // Função para filtrar produtos
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  // Renderizar cada item do produto
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.brandText}>{item.brand}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>R$ {item.price.toFixed(2)}</Text>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#F05080" activePage="Produtos" />

      {/* Filtros por categoria */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de produtos */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        columnWrapperStyle={styles.productsRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  categoryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F0F0F0',
  },
  selectedCategoryButton: {
    backgroundColor: '#F05080',
  },
  categoryText: {
    color: '#666',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  productsList: {
    padding: 8,
  },
  productsRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 12,
  },
  brandText: {
    fontSize: 12,
    color: '#F05080',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F05080',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProdutosScreen;