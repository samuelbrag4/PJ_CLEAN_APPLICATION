import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AcessoriesSection = ({ tools = [], corPrincipal, gradientColors }) => (
    <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
    >
        <View style={styles.container}>
            <Text style={[styles.label, { color: corPrincipal }]}>Ferramentas de Beleza</Text>
            <Text style={styles.title}>Acessórios de Massagem Facial</Text>
            {tools.map((item, idx) => (
                <View key={idx} style={styles.card}>
                    <Text style={styles.cardTitle}>{item.titulo}</Text>
                    <Text style={styles.cardDesc}>{item.descricao}</Text>
                    <Image
                        source={item.imagem ? { uri: item.imagem } : null}
                        style={styles.image}
                    />
                </View>
            ))}
        </View>
    </LinearGradient>
);

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        paddingVertical: 0,
    },
    container: {
        paddingVertical: 24,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 14,
        marginBottom: 2,
        marginLeft: 6,
        fontWeight: "500",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 22,
        marginLeft: 6,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 18,
        marginBottom: 24,
        marginHorizontal: 10,
        alignItems: "center",
        shadowColor: "#444",
        shadowOffset: { width: 0, height: 1.3 },
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 8,
        textAlign: "center",
    },
    cardDesc: {
        fontSize: 14,
        color: "#444",
        marginBottom: 14,
        textAlign: "center",
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginBottom: 4,
    },
});

export default AcessoriesSection;