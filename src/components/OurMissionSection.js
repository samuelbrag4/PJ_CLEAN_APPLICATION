import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const { width } = Dimensions.get("window");

const OurMissionSection = ({corPrincipal, gradientColors, subtitle, title, descricao, cards }) => (
  <LinearGradient
    colors={gradientColors}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={styles.gradient}
  >
  <View style={styles.container}>
    <View style={styles.topo}>
      <Text style={[styles.label, { color: corPrincipal }]}>{subtitle}</Text>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <TouchableOpacity style={[styles.botao, { backgroundColor: corPrincipal }]}>
        <Text style={styles.textoBotao}>Ler Mais</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.beneficiosContainer}>
      {cards.map((item, idx) => (
        <View key={idx} style={styles.beneficio}>
          <View style={[styles.iconeContainer, { backgroundColor: corPrincipal }]}>
            <Text style={styles.icone}>{item.icone}</Text>
          </View>
          <Text style={styles.beneficioTitulo}>{item.titulo}</Text>
          <Text style={styles.beneficioDescricao}>{item.descricao}</Text>
        </View>
      ))}
    </View>
  </View>
  </LinearGradient>
);

export default OurMissionSection;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingVertical: 0,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  topo: {
    marginBottom: 32,
    alignItems: "flex-start",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
  },
  descricao: {
    color: "#555",
    fontSize: 15,
    marginBottom: 16,
  },
  botao: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  beneficiosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  beneficio: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: (width - 32) / 2 - 12,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#eafafd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  iconeContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  icone: {
    fontSize: 28,
    color: "#fff",
  },
  beneficioTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
    textAlign: "center",
  },
  beneficioDescricao: {
    color: "#555",
    fontSize: 12,
    textAlign: "center",
  },
});
