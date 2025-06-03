import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

import InfoCard from "../components/InfoCard";
import OurMissionSection from "../components/OurMissionSection";
import SkinTypeGrid from "../components/SkinTypeGrid";
import AcessoriesSection from "../components/AcessoriesSection";

const CorpoScreen = () => {

  const infoCards = [
    {
      titulo: "Hidratação",
      descricao:
      "Manter a pele hidratada é essencial para evitar o ressecamento e a descamação. Cremes com ativos como ureia e ácido hialurônico ajudam a reter a umidade e proteger a pele.",
      imagem: "https://www.gioesteticaavancada.com.br/wp-content/uploads/2020/08/post_thumbnail-d9966bb36fc0dfe546bb23cfb5a2c9f9.jpeg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Nutrição",
      descricao:
        "A nutrição da pele ajuda a manter sua elasticidade e maciez. Produtos com vitaminas, óleos vegetais e manteigas naturais nutrem profundamente e restauram a barreira cutânea.",
      imagem: "https://nutrimaiaralima.com.br/wp-content/uploads/2020/09/nutricao-no-combate-as-doencas.jpeg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Rotina",
      descricao:
        "A consistência nos cuidados é chave para resultados duradouros. Estabelecer uma rotina com limpeza, esfoliação e hidratação melhora a saúde da pele ao longo do tempo.",
      imagem: "https://s2-marieclaire.glbimg.com/zBfNLrL4IMOYPkriNZnYiF85bHU=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2023/l/m/wOdWrASUOrkBLxQcBOPA/ativos-bodycare.jpg", // Coloque o link da imagem aqui
    },
    {
      titulo: "Proteção",
      descricao:
        "A exposição ao sol sem proteção pode causar manchas e envelhecimento precoce. Use protetor solar diariamente, mesmo em dias nublados, para manter sua pele protegida.",
      imagem: "https://www.maria.pt/wp-content/uploads/2019/06/1-59.jpg", // Coloque o link da imagem aqui
    },
    
  ];

  const tools = [
    {
      titulo: "Escova Corporal a Seco",
      descricao:
        "Estimula a circulação sanguínea, promove esfoliação suave e melhora a textura da pele antes do banho.",
      imagem:
        "https://soulbm.com.br/wp-content/uploads/2024/11/soulbm-produto-escova-seca-0-e1735928901607.png",
    },
    {
      titulo: "Massageador Corporal de Madeira",
      descricao:
        "Auxilia na redução da tensão muscular, ativa a circulação e pode ajudar no combate à celulite.",
      imagem:
        "https://mlrvosfzmdah.i.optimole.com/w:338/h:338/q:mauto/rt:fill/g:ce/f:avif/id:0bc607dcc5fb2ef9143cb1aad3bc7ee2/https://hakunamatatabrindes.com.br/Carrinho-de-Madeira-para-Massagem.jpg",
    },
    {
      titulo: "Luvas Esfoliantes",
      descricao:
        "Removem células mortas, desobstruem os poros e deixam a pele mais macia e pronta para hidratação.",
      imagem:
        "https://img.joomcdn.net/e6321fb0fa4e66b13f44c7ca77b8397cec18088d_original.jpeg",
    },
    {
      titulo: "Massageador de Silicone",
      descricao:
        "Ideal para aplicar cremes com movimentos circulares, melhora a absorção dos ativos e promove relaxamento.",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_2X_990510-MLA83238645725_032025-F.webp",
    },
    {
      titulo: "Bucha Vegetal Natural",
      descricao:
        "Feita de fibras naturais, promove esfoliação eficaz durante o banho, ajudando na renovação celular e deixando a pele mais macia.",
      imagem:
        "https://cdn.awsli.com.br/2500x2500/1994/1994328/produto/180911782/74487acd59.jpg",
    },
    {
      titulo: "Pedra-Pomes para Pés",
      descricao:
        "Ideal para remover calosidades e asperezas dos pés, deixando a pele mais lisa e suave ao toque.",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/159791/lixa_de_madeira_para_pes_mista_com_pedra_pomes_01_ou_12_unidades_4859_1_20240718174555.jpg",
    },
    {
      titulo: "Óleo Corporal Hidratante",
      descricao:
        "Rico em nutrientes e antioxidantes, hidrata profundamente, deixando a pele nutrida, luminosa e com toque sedoso.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B49418/NSPA-OL-DES-HID-CPO-QUIN-AMEN_V3_B49418.jpg",
    },
    {
      titulo: "Ventosas de Silicone",
      descricao:
        "Utilizadas para massagens com efeito de vácuo, ajudam a ativar a circulação, aliviar tensões e potencialmente reduzir celulites.",
      imagem:
        "https://m.media-amazon.com/images/I/51hRSfKXSBL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const cards = [
  {
    icone: "🧼",
    titulo: "Limpeza Corporal",
    descricao: "Remova impurezas com sabonetes específicos para seu tipo de pele",
  },
  {
    icone: "🧴",
    titulo: "Esfoliação",
    descricao: "Ajuda a renovar a pele e melhorar a absorção dos produtos",
  },
  {
    icone: "💧",
    titulo: "Hidratação",
    descricao: "Previne o ressecamento e mantém a pele suave e protegida",
  },
  {
    icone: "🧽",
    titulo: "Proteção Solar",
    descricao: "Protege contra os danos do sol e o envelhecimento precoce",
  },
];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header themeColor="#DBBD9C" activePage="Blog" />

      {/* Conteúdo principal */}
      
      <HeroSection
        corPrincipal="#DBBD9C"
        linkImage="https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"
        title="Seu corpo merece todo o cuidado e atenção para se sentir bem."
        text="Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
      />

      <InfoCard
        image="https://simoesfilhoonline.com.br/wp-content/uploads/2020/06/Veja-como-fazer-esfolia%C3%A7%C3%A3o-corporal-e-os-melhores-esfoliantes-caseiros.jpg"
        title="Mulher aplicando creme no corpo Transforme o cuidado com o corpo em um momento de bem-estar e autoestima."
        description="Cada parte do seu corpo merece atenção especial. Nesta página, você encontrará orientações, produtos e dicas para hidratação, esfoliação, massagens e muito mais. Crie uma rotina corporal que respeite as necessidades da sua pele, alivie o estresse do dia a dia e eleve sua autoestima. Porque cuidar do corpo é investir em saúde e amor-próprio."
        buttonText="Ler mais"
        buttonColor="#DBBD9C"
      />

      <SkinTypeGrid
        corPrincipal="#DBBD9C"
        infoCards={infoCards}
        categoria={"CORPO"}
        title="O que influencia na saúde e beleza da sua pele corporal?"
      />

      <OurMissionSection
        corPrincipal="#DBBD9C"
        gradientColors={["#d2ad84", "#FFf"]}
        subtitle="Skincare Diário"
        title="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        cards={cards}
      />

      <AcessoriesSection
        tools={tools}
        corPrincipal="#DBBD9C"
        gradientColors={["#fff", "#d2ad84"]}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
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

export default CorpoScreen;