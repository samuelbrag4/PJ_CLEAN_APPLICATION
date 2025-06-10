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
      titulo: "Oleosa",
      descricao:
        "Uma pele oleosa produz excesso de sebo, o que causa aparência brilhante e tendência a acne, especialmente no nariz T (testa, nariz e queixo).",
      imagem:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDgvlvTyk_JzmTiMvzmATKp1XNFPycj-LKsGsa07OlrUVxAhgq", // Coloque o link da imagem aqui
    },
    {
      titulo: "Seca",
      descricao:
        "Contém áreas ásperas e tensas, com linhas evidentes ou poros minúsculos, possui pele escamativa, que requer hidratação específica para cada região.",
      imagem:
        "https://escolabelezapura.com.br/wp-content/uploads/2024/06/1.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Mista",
      descricao:
        "Apresenta a espinhas, cravos e oleosidade em algumas áreas, combinada à ressecamento, vermelhidão e poros dilatados.",
      imagem:
        "https://static.stealthelook.com.br/wp-content/uploads/2024/06/bevurecosmetics-skincare.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Normal",
      descricao:
        "Possui os seus poros pequenos, com textura aveludada, sensação de relaxamento e tendência a estabilidade.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDrXqq2I1Ii8r1EEFvBCSg7nl-6VQm3a9lZ_9Oh4kojkS0eEe", // Coloque o link da imagem aqui
    },
  ];

  const tools = [
    {
      titulo: "Gua Sha de Quartzo Rosa",
      descricao:
        "Ferramenta de massagem facial que estimula a circulação sanguínea, reduz inchaços e promove relaxamento do rosto.",
      imagem:
        "https://glov.eu/cdn/shop/products/QuartzGuaSha_ef4b3c01-9fe4-4761-b21d-1097fe2307c6.png?v=1649078742",
    },
    {
      titulo: "Rolo de Jade",
      descricao:
        "Massageador que ajuda na absorção de produtos, reduz olheiras e linhas finas, além de aliviar a tensão facial.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/products/89926/89926.png",
    },
    {
      titulo: "Derma Roller",
      descricao:
        "Estimula a produção de colágeno, melhora a textura da pele e potencializa a penetração de ativos do skincare.",
      imagem:
        "https://www.swisscollc.com/cdn/shop/products/48009.png?v=1594308069",
    },
    {
      titulo: "Esponja Konjac",
      descricao:
        "Esfoliante natural que limpa suavemente, remove células mortas e equilibra o pH da pele, ideal para uso diário.",
      imagem:
        "https://ikesaki.vtexassets.com/arquivos/ids/269140-800-auto?v=637655991804530000&width=800&height=auto&aspect=true",
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
    <ScrollView>
      {/* Header */}
      <Header themeColor="#5FCED4" activePage="Skincare" />

      {/* Hero Section */}
      <HeroSection
        corPrincipal="#5FCED4"
        linkImage="https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"
        title="Beleza começa com uma pele bem cuidada."
        text="Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
      />

      {/* Info Card Section */}
      <InfoCard
        image="https://teiacosmeticos.com/cdn/shop/articles/skincare-para-estos-dias-en-casa-395165.jpg?v=1695166167"
        title="Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
        description="Sua pele é única e merece cuidados personalizados. Aqui, você encontra dicas, produtos e conselhos para criar um ritual de skincare personalizado que vai desde a limpeza diária até os tratamentos mais específicos. Saiba como produtos certos podem tratar suas preocupações específicas e transformar sua rotina em um momento para si em qualquer momento. Porque cuidar da pele é cuidar de você."
        buttonText="Ler mais"
        buttonColor="#5FCED4"
      />

      {/* Skin Type Grid */}
      <SkinTypeGrid
        corPrincipal="#5FCED4"
        infoCards={infoCards}
        categoria={"Skincare"}
        title="Tipos de pele"
      />

      {/* Our Mission Section */}
      <OurMissionSection
        corPrincipal="#5FCED4"
        gradientColors={["#5FCED4", "#FFf"]}
        subtitle="Skincare Diário"
        title="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        cards={cards}
      />

      {/* Accessories Section */}
      <AcessoriesSection
        tools={tools}
        corPrincipal="#5FCED4"
        gradientColors={["#fff", "#5FCED4"]}
      />

      {/* Footer Section */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SkincareScreen;
