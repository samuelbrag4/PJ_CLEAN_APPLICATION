import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import InfoCard from "../components/InfoCard";
import OurMissionSection from "../components/OurMissionSection";
import SkinTypeGrid from "../components/SkinTypeGrid";
import AcessoriesSection from "../components/AcessoriesSection";

const SkincareScreen = () => {

  const infoCards = [
    {
      titulo: "Hidratação",
      descricao:
        "Manter a pele hidratada é essencial para evitar o ressecamento e a descamação. Cremes com ativos como ureia e ácido hialurônico ajudam a reter a umidade e proteger a pele.",
      imagem: "https://topview.com.br/wp-content/uploads/2024/01/retrato-de-mulher-jovem-e-bonita-com-um-produto-de-maquiagem.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Nutrição",
      descricao:
"A nutrição da pele ajuda a manter sua elasticidade e maciez. Produtos com vitaminas, óleos vegetais e manteigas naturais nutrem profundamente e restauram a barreira cutânea.",
      imagem: "https://www.fashionbubbles.com/wp-content/uploads/2024/11/make-azul-bebe-tendencia-2.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Textura",
      descricao:
        "A textura dos produtos influencia diretamente na aplicação e no acabamento. Texturas leves e uniformes proporcionam um visual mais natural e confortável.",
      imagem: "https://24698e6a.delivery.rocketcdn.me/wp-content/uploads/2022/03/makes-de-euphoria-ideias-de-maquiagens-inspiradas-na-serie-de-sucesso-63.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Segurança",
      descricao:
        "A segurança dos produtos é fundamental. Escolha maquiagens dermatologicamente testadas e livres de substâncias nocivas para evitar irritações e alergias.",
      imagem: "https://nomoremag.com/wp-content/uploads/2023/04/young-female-model-portrait-10x8-1.jpg", // Coloque o link da imagem aqui
    },
  ];

  const tools = [
    {
      titulo: "Esponja de Maquiagem",
      descricao:
        "Ideal para aplicar base e corretivo com acabamento natural e sem marcas. Pode ser usada seca ou úmida.",
      imagem:
        "https://cdn-cosmos.bluesoft.com.br/products/731509637076/2018-07-27-15-24-37-0300",
    },
    {
      titulo: "Pincel Kabuki",
      descricao:
        "Perfeito para aplicar base líquida ou em pó de maneira uniforme e com alta cobertura.",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/615021/pincel_kabuki_maquiagem_rosa_popular_cerda_macia_kit_10un_8295_1_d15c5d9a7a907391b476c2be3c2acbb4.jpg",
    },
    {
      titulo: "Curvador de Cílios",
      descricao:
        "Realça o olhar curvando os cílios antes da aplicação da máscara, para um efeito mais expressivo.",
      imagem:
        "https://acdn-us.mitiendanube.com/stores/001/999/459/products/curvex-0b3aa53aa970ea36cd17066257581618-1024-1024.png",
    },
    {
      titulo: "Organizador de Maquiagem",
      descricao:
        "Facilita o armazenamento e acesso rápido aos seus produtos favoritos, mantendo tudo em ordem.",
      imagem:
        "https://acrilicostore.fbitsstatic.net/img/p/organizador-de-maquiagem-4-gavetas-com-bandeja-para-batom-70136/256618-5.jpg?w=1000&h=1000&v=no-change&qs=ignore",
    },
  ];

  const cards = [
  {
    icone: "🧼",
    titulo: "Limpeza Facial",
    descricao: "Elimine impurezas e prepare sua pele para os próximos passos",
  },
  {
    icone: "🧴",
    titulo: "Esfoliação",
    descricao: "Use 2-3 vezes por semana para renovação celular",
  },
  {
    icone: "💧",
    titulo: "Hidratação",
    descricao: "Mantenha sua pele nutrida e protegida diariamente",
  },
  {
    icone: "🧽",
    titulo: "Proteção Solar",
    descricao: "Essencial para prevenir o envelhecimento precoce",
  },
];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header themeColor="#5FCED4" activePage="Skincare" />

      <HeroSection
        corPrincipal="#5FCED4"
        linkImage="https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"
        title="Beleza começa com uma pele bem cuidada."
        text="Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
      />

      <InfoCard
        image="https://cdn.dooca.store/140109/files/img-9426.jpeg?v=1693943921"
        title="Descubra o poder transformador da maquiagem em sua rotina diária."
        description="A maquiagem é uma forma de arte e expressão. Aqui, você encontra dicas, produtos e conselhos para criar looks incríveis, desde o básico até os mais elaborados. Aprenda como realçar sua beleza natural, experimentar novas tendências e transformar sua rotina de maquiagem em um momento de criatividade e autoconfiança. Porque maquiar-se é celebrar quem você é."
        buttonText="Ler mais"
        buttonColor="#F05080"
      />

      <SkinTypeGrid
        corPrincipal="#F05080"
        infoCards={infoCards}
        categoria={"MAKEUP"}
        title="O que influencia na qualidade da sua maquiagem?"
      />

      <OurMissionSection
        corPrincipal="#F05080"
        gradientColors={["#f89fba", "#FFf"]}
        subtitle="Skincare Diário"
        title="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        cards={cards}
      />

      <AcessoriesSection
        tools={tools}
        corPrincipal="#F05080"
        gradientColors={["#fff", "#f89fba"]}
      />

      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#333" },
});

export default SkincareScreen;