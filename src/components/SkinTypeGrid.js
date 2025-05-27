import { View, Text, Image, StyleSheet } from "react-native";


const SkinTypeGrid = ({corPrincipal, infoCards = []}) => (
  <View style={styles.container}>
    <Text style={[styles.label, {color: corPrincipal}]}>Skincare</Text>
    <Text style={styles.title}>Tipos de pele</Text>
    {infoCards.map((item, idx) => (
      <View key={idx} style={styles.card}>
        <Image
          source={item.imagem ? { uri: item.imagem } : null}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardDesc}>{item.descricao}</Text>
        </View>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 13,
    marginBottom: 2,
    marginLeft: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 18,
    marginLeft: 6,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 20,
    padding: 10,
    alignItems: "flex-start",
    shadowColor: "#eafafd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
    backgroundColor: "#eee",
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: "#555",
  },
});

export default SkinTypeGrid;