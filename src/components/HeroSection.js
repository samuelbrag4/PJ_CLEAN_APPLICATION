import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

const HeroSection = ({ linkImage, title, text, corPrincipal }) => {
    return (
        <View style={styles.container}>
            {/* Imagem de fundo */}
            <View style={styles.containerFundo}>
                <Image source={{ uri: linkImage }} style={styles.image} />
            </View>

            {/* Texto e botões */}
            <View style={styles.containerTexto}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", // Fundo branco
        alignSelf: "center",
        width: "100%",
        maxWidth: 500,
        marginVertical: 30,
        overflow: "hidden",
    },
    containerFundo: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.3, // Mais suave
        zIndex: 0,
    },
    image: {
        width: "100%",
        height: 280,
        resizeMode: "contain",
        backgroundColor: "transparent",
    },
    containerTexto: {
        padding: 20,
        zIndex: 1, // Para garantir que o texto fique acima da imagem
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    }
});

export default HeroSection;