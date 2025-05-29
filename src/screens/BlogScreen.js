import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { Link } from "expo-router";

const BlogScreen = () => {
  const sections = [
    {
      title: "Skincare",
      description: "Cuidar da pele vai muito além da estética — é uma forma de manter-se saudável e protegida. O skincare ajuda a prevenir o envelhecimento precoce, controla a oleosidade, estimula o crescimento de fios e corrige agressões diárias.",
      image1: "https://blog.lojasrenner.com.br/wp-content/uploads/2022/07/01-foto-principal-3.jpg",
      image2: "https://oxioz.com.br/wp-content/uploads/2024/02/rotina-skincare-cuidados-com-a-pele.jpg",
      cards: [
        { title: "Hidratação com Argila", description: "A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTYOfm1ttWNqk6747v0_0KlHajbujmY8X9w&s" },
        { title: "Esfoliação", description: "A esfoliação facial tem vários benefícios, como a renovação celular, a redução de cravos e espinhas, e a preparação da pele para tratamentos.", image: "https://cdn.shopify.com/s/files/1/0592/2678/3899/files/FB-0611.jpg?v=1715686614" },
        { title: "Massagem", description: "ATras vários benefícios, a melhora da circulação, reduz inchaços, tonifica a pele, suaviza linhas de expressão, alivia o stress, melhora o sono, melhora a imunidade, rejuvenesce a pele.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyZNHBxnuOoDx2ZPN-arpGSVPXD01sBsTEg&s" },
        { title: "Tônico Facial", description: "A tonificação facial tem vários benefícios, como a limpeza profunda, o equilíbrio do pH, a redução da oleosidade e a desobstrução dos poros. ", image: "https://boxmagenta.com.br/blog/content/images/2021/04/tonico-facial-1.jpg" },
        { title: "Alimentação", description: "Uma alimentação equilibrada, rica em vitaminas, minerais e antioxidantes, pode ajudar a manter a pele saudável e bonita.", image: "https://www.assai.com.br/sites/default/files/styles/blog_destaque/public/blog/alimentacao_saudavel.jpg?itok=MN_S3u8-" },
        { title: "Proteção", description: " A proteção do rosto com protetor solar facial traz diversos benefícios, como prevenir manchas, queimaduras e câncer de pele e evitar o envelhecimento precoce.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySdad707O1V53Kb3--BxoLIq6eKzyF0t_FQ&s" },
      ],
    },
    {
      title: "Maquiagem",
      description: "A maquiagem realça a beleza e aumenta a autoestima, mas a escolha dos produtos certos faz toda a diferença. Usar maquiagens de qualidade evita irritações, alergias e até problemas mais sérios na pele. Além disso, produtos bem formulados garantem um acabamento mais bonito e duradouro, deixando sua make impecável sem prejudicar a saúde da pele.",
      image1: "https://media.istockphoto.com/id/1383008311/pt/foto/accenting-her-beauty.jpg?s=612x612&w=0&k=20&c=QfliiSiKJOUVxzTBbG383plr0NloLSkeiNL_tOXRU0Q=",
      image2: "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/7/2023/02/22084023/shutterstock_2140128415.jpg",
      cards: [
        { title: "Preparação de Pele", description: "Uma boa maquiagem começa com a pele preparada: primer, hidratação e proteção solar.", image: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2021/04/o-que-e-skincare.jpg" },
        { title: "Cobertura Perfeita", description: "Bases e corretivos de qualidade garantem um acabamento natural e uniforme.", image: "https://www.maybelline.com.br/dicas-de-maquiagem/rosto/-/media/project/loreal/brand-sites/mny/americas/br/artigos/2024/rosto/base/como-disfarcar-olheiras/mulher-branca-passando-corretivo-para-cobrir-olheiras.jpg?rev=1c0cfb451cdd4e11a8969bae4ef76465" },
        { title: "Olhos em Destaque", description: "Aprenda técnicas de sombra, delineado e máscara para realçar seu olhar.", image: "https://s2.glbimg.com/nyWKe7dBgHQqvbCbN6EAwqGzAj4=/e.glbimg.com/og/ed/f/original/2019/11/21/delineador_branco_adelabartak.jpg" },
        { title: "Lábios Impecáveis", description: "Saiba como escolher batons e lip tints que valorizem seu tom de pele e durem mais.", image: "https://blog.oceane.com.br/wp-content/uploads/2024/02/DESTAQUE_MAKE_2403.jpg" },
        { title: "Contorno e Iluminação", description: "Crie profundidade e brilho para um visual sofisticado e harmônico.", image: "https://blog.optemais.com.br/wp-content/uploads/2019/05/Como-usar-iluminador.jpg" },
        { title: "Fixação e Durabilidade", description: "Finalize sua make com sprays fixadores e truques para maior durabilidade ao longo do dia.", image: "https://s2-marieclaire.glbimg.com/TOYBns7eUT-WGJzwOgFiOBUds98=/0x0:1440x810/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2024/T/Y/L9p0ktTpSda0yzQCI1ZQ/clipdown.app-434150676-18426441856004344-3743900848806498386-n-1-1-.jpg" },
      ],
    },
    {
      title: "Corpo",
      description: "Hidratar, esfoliar e proteger a pele do corpo são hábitos fundamentais para mantê-la macia, firme e saudável. Produtos como hidratantes, óleos corporais e protetores solares ajudam a evitar o ressecamento, a flacidez e os danos causados pelo sol. Além da estética, cuidar da pele do corpo proporciona uma sensação de bem-estar e relaxamento no dia a dia. ",
      image1: "https://blog.adcosprofissional.com.br/wp-content/uploads/2020/10/Creme-de-massagem-corporal-saiba-qual-usar-em-cada-protocolo.jpg",
      image2: "https://qcenterbanheiras.com.br/wp-content/uploads/2019/07/spa-em-sao-paulo.jpg",
      cards: [
        { title: "Pele Seca?", description: "A pele seca pode causar desconforto, ressecamento e até descamação, principalmente em climas frios ou ambientes.", image: "https://http2.mlstatic.com/D_NQ_NP_859630-MLA72998106925_112023-B.webp" },
        { title: "Depilação", description: "Uma depilação mal feita ou inadequada pode causar dermatites alérgicas, queimaduras, manchas, sem falar nos possíveis riscos de transmissão de doenças e podendo causar alergia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9iWaHca3Qg_5735oNe00wvfBG11dXHHp-A&s" },
        { title: "Esfoliação", description: "A esfoliação corporal tem vários benefícios, como deixar a pele mais macia, uniformizar o tom, e estimular a produção de colágeno. É importante não exagerar, pois pode causar irritação.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W61mjIiR2st57I3uShp1b1VLsumyas-gRw&s" },
        { title: "Massagem", description: "A massagem corporal tem benefícios como por exemplo: aliviar dores, tensões musculares, melhora a circulação sanguínea, reduz inchaço e a recuperação muscular.", image: "https://img.freepik.com/fotos-gratis/mulher-passando-tempo-no-spa-e-recebendo-uma-massagem-relaxante_23-2149871869.jpg" },
        { title: "Sais de Banho", description: "Os sais de banho podem ser bons para o corpo, pois ajudam a relaxar, desintoxicar a pele, melhorar a circulação e a hidratação da pele.", image: "https://www.espacoprana.com.br/wp-content/uploads/2023/10/blog.jpg" },
        { title: "Sol", description: "Tomar sol pode fazer bem à saúde, mas é importante não exagerar. A exposição ao sol é fundamental para a produção de vitamina D, que é essencial para a saúde dos ossos e músculos.", image: "https://media.istockphoto.com/id/1211311866/pt/foto/stylish-casual-woman-enjoying-sun-at-tropical-beach.jpg?s=612x612&w=0&k=20&c=W52Cl-zvdNoAzPE65KtsXE4-9-bvP8cr6QQBssK6o_Q=" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header themeColor="#00DAC7" activePage="Blog" />

      <ScrollView style={styles.scroll}>
        {/* Título e Introdução */}
        <View style={styles.intro}>
          <Text style={styles.title}>Conheça e encontre dicas incríveis!!</Text>
          <Text style={styles.description}>
            Aqui, você encontrará dicas, tendências e informações sobre skincare, maquiagem, produtos de beleza e cuidados com o corpo.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Link href="/blog-artigo" style={styles.buttonText}>
                Dicas
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Link href="/blog-video" style={styles.buttonText}>
                Vídeos
              </Link>
            </TouchableOpacity>
          </View>

        </View>

        {/* Seções Dinâmicas */}
        {sections.map((section, index) => (
          <View key={index}>
            {renderSection(section)}
            {renderCards(section.cards)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const renderSection = ({ title, description, image1, image2 }) => (
  <View style={styles.sectionContainer}>
    <Image source={{ uri: image1 }} style={styles.sectionImage} />
    <Image source={{ uri: image2 }} style={styles.sectionImage} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const renderCards = (cards) => (
  <View style={styles.cardsContainer}>
    {cards.map((tip, index) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: tip.image }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{tip.title}</Text>
        <Text style={styles.cardDescription}>{tip.description}</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  scroll: { flex: 1 },
  intro: { padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", color: "#000", marginBottom: 8 },
  description: { fontSize: 14, color: "#555", marginBottom: 16 },
  buttonRow: { flexDirection: "row", gap: 10 },
  button: { backgroundColor: "#00DAC7", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" },

  sectionContainer: { padding: 16, alignItems: "center" },
  sectionImage: { width: 300, height: 150, marginBottom: 10, borderRadius: 10 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#00DAC7", marginVertical: 8 },
  sectionDescription: { fontSize: 14, color: "#333", textAlign: "center" },

  cardsContainer: { padding: 16 },
  card: { backgroundColor: "#fff", padding: 16, marginBottom: 16, borderRadius: 10, elevation: 2 },
  cardImage: { width: "100%", height: 100, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  cardDescription: { fontSize: 13, color: "#666", marginBottom: 10 },
  cardButton: { alignSelf: "flex-start", backgroundColor: "#00DAC7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  cardButtonText: { color: "#fff", fontSize: 12 },
});

export default BlogScreen;