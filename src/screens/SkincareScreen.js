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
      imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDgvlvTyk_JzmTiMvzmATKp1XNFPycj-LKsGsa07OlrUVxAhgq", // Coloque o link da imagem aqui
    },
    {
      titulo: "Seca",
      descricao:
      "Contém áreas ásperas e tensas, com linhas evidentes ou poros minúsculos, possui pele escamativa, que requer hidratação específica para cada região.",
      imagem: "https://escolabelezapura.com.br/wp-content/uploads/2024/06/1.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Mista",
      descricao:
        "Apresenta a espinhas, cravos e oleosidade em algumas áreas, combinada à ressecamento, vermelhidão e poros dilatados.",
      imagem: "https://static.stealthelook.com.br/wp-content/uploads/2024/06/bevurecosmetics-skincare.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Normal",
      descricao:
        "Possui os seus poros pequenos, com textura aveludada, sensação de relaxamento e tendência a estabilidade.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDrXqq2I1Ii8r1EEFvBCSg7nl-6VQm3a9lZ_9Oh4kojkS0eEe", // Coloque o link da imagem aqui
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
        "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/csm/csm27669/r/42.jpg",
    },
    {
      titulo: "Esponja Konjac",
      descricao:
        "Esfoliante natural que limpa suavemente, remove células mortas e equilibra o pH da pele, ideal para uso diário.",
      imagem:
        "https://ikesaki.vtexassets.com/arquivos/ids/269140-800-auto?v=637655991804530000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Máscara Facial de Argila Verde",
      descricao:
        "Controla a oleosidade, limpa profundamente os poros e ajuda na redução de cravos e espinhas.",
      imagem:
        "https://cdn.awsli.com.br/244/244021/produto/7132966/eb22370495.jpg",
    },
    {
      titulo: "Tônico Facial de Rosas",
      descricao:
        "Refresca, acalma a pele e equilibra o pH, preparando o rosto para melhor absorção dos cuidados seguintes.",
      imagem:
        "https://epocacosmeticos.vteximg.com.br/arquivos/ids/234001-800-800/7898587672146.jpg?v=636403098569100000",
    },
    {
      titulo: "Sérum de Vitamina C",
      descricao:
        "Ilumina a pele, uniformiza o tom e combate os radicais livres, promovendo firmeza e elasticidade.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/Z51364/aa7eb939-feed-4bc7-a53c-c8207c7939ec-51364-1.jpg",
    },
    {
      titulo: "Gel de Limpeza Facial",
      descricao:
        "Remove impurezas e excesso de oleosidade sem ressecar, deixando a pele fresca, limpa e equilibrada.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/Z51329/8e55915c-bbc7-48e7-9a29-5456fe6781a7-vult-51329-gel-limpeza-antioleosidade-frontal-01.jpg",
    }
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
        image="https://teiacosmeticos.com/cdn/shop/articles/skincare-para-estos-dias-en-casa-395165.jpg?v=1695166167"
        title="Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
        description="Sua pele é única e merece cuidados personalizados. Aqui, você encontra dicas, produtos e conselhos para criar um ritual de skincare personalizado que vai desde a limpeza diária até os tratamentos mais específicos. Saiba como produtos certos podem tratar suas preocupações específicas e transformar sua rotina em um momento para si em qualquer momento. Porque cuidar da pele é cuidar de você."
        buttonText="Ler mais"
        buttonColor="#5FCED4"
      />

      <SkinTypeGrid
        corPrincipal="#5FCED4"
        infoCards={infoCards}
        categoria={"Skincare"}
        title="Tipos de pele"
      />

      <OurMissionSection
        corPrincipal="#5FCED4"
        gradientColors={["#5FCED4", "#FFf"]}
        subtitle="Skincare Diário"
        title="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        cards={cards}
      />

      <AcessoriesSection
        tools={tools}
        corPrincipal="#5FCED4"
        gradientColors={["#fff", "#5FCED4"]}
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