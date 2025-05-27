import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const beneficios = [
  {
    icone: "🧼",
    titulo: "Limpeza",
    descricao: "Remova impurezas e prepare sua pele para os próximos cuidados.",
  },
  {
    icone: "🧴",
    titulo: "Esfoliação",
    descricao: "Elimine células mortas e renove a vitalidade da sua pele.",
  },
  {
    icone: "💧",
    titulo: "Tonificação",
    descricao: "Equilibre o pH e potencialize a absorção dos produtos.",
  },
  {
    icone: "🥛",
    titulo: "Hidratação",
    descricao: "Mantenha sua pele macia, protegida e radiante todos os dias.",
  },
];

const OurMissionSection = ({corPrincipal }) => (
  <View style={styles.container}>
    <View style={styles.topo}>
      <Text style={[styles.label, { color: corPrincipal }]}>Nossa Missão</Text>
      <Text style={styles.titulo}>
        Cuide de sua Pele da{"\n"}Forma que ela{"\n"}Merece
      </Text>
      <Text style={styles.descricao}>
        Sua pele merece atenção especial. Com uma rotina de skincare simples e eficaz, você pode manter sua pele saudável e radiante.
      </Text>
      <TouchableOpacity style={[styles.botao, { backgroundColor: corPrincipal }]}>
        <Text style={styles.textoBotao}>Ler Mais</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.beneficiosContainer}>
      {beneficios.map((item, idx) => (
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
);

export default OurMissionSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 48,
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
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
    width: (width - 32) / 2 - 12, // Ajuste para caber dois itens lado a lado
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
