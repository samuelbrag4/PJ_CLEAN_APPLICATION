import { ScrollView, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfoCard from "../components/InfoCard";
import OurMissionSection from "../components/OurMissionSection";
import SkinTypeGrid from "../components/SkinTypeGrid";

const MakeScreen = () => {

  const infoCards = [
  {
    titulo: "Oleosa",
    descricao:
      "Uma pele oleosa produz excesso de sebo, com poros dilatados e tendência a brilho, especialmente na zona T (testa, nariz e queixo).",
    imagem: "https://topview.com.br/wp-content/uploads/2024/01/retrato-de-mulher-jovem-e-bonita-com-um-produto-de-maquiagem.jpg", // Coloque o link da imagem aqui
  },
  {
    titulo: "Seca",
    descricao:
      "Combina áreas oleosas (zona T) com áreas normais ou secas (bochechas), exigindo cuidados específicos para cada região.",
    imagem: "https://www.fashionbubbles.com/wp-content/uploads/2024/11/make-azul-bebe-tendencia-2.jpg", // Coloque o link da imagem aqui
  },
  {
    titulo: "Mista",
    descricao:
      "Propensa a espinhas, cravos e inflamações, geralmente associada à oleosidade excessiva e poros obstruídos.",
    imagem: "https://24698e6a.delivery.rocketcdn.me/wp-content/uploads/2022/03/makes-de-euphoria-ideias-de-maquiagens-inspiradas-na-serie-de-sucesso-63.jpg", // Coloque o link da imagem aqui
  },
  {
    titulo: "Normal",
    descricao:
      "Falta de hidratação natural, com textura áspera, sensação de repuxamento e tendência à descamação.",
    imagem: "https://nomoremag.com/wp-content/uploads/2023/04/young-female-model-portrait-10x8-1.jpg", // Coloque o link da imagem aqui
  },
];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header themeColor="#F05080" activePage="Blog" />

      {/* Conteúdo principal */}

      <HeroSection
        corPrincipal="#F05080"
        linkImage="https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
        title="A arte de se maquiar!"
        text="Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"
      />

      <InfoCard
        image="https://cdn.dooca.store/140109/files/img-9426.jpeg?v=1693943921"
        title="Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
        description="Cuide da sua pele com dicas, produtos e orientações para uma rotina de skincare personalizada. Pequenos gestos podem deixar sua pele saudável, radiante e pronta para brilhar, pois cuidar da pele é cuidar de si mesma."
        buttonText="Ler mais"
        buttonColor="#F05080" 
      />

      <SkinTypeGrid
        corPrincipal="#F05080"
        infoCards={infoCards}
      />

      <OurMissionSection
        corPrincipal="#F05080"
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MakeScreen;