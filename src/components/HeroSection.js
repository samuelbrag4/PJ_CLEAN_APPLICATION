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

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.buttonFilled, { backgroundColor: corPrincipal }]} >
                        <Text style={styles.buttonTextFilled}>Ler mais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonOutlined, { borderColor: corPrincipal }]}>
                        <Text style={[styles.buttonTextOutlined, { color: corPrincipal }]}>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        justifyContent: "center",
        alignItems: "center",
    },
    containerFundo: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.4, // Opacidade da imagem de fundo
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
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
    },
    buttons: {
        flexDirection: "row",
        gap: 10
    },
    buttonFilled: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonTextFilled: {
        color: "#fff",
        fontWeight: "bold",
    },
    buttonOutlined: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonTextOutlined: {
        fontWeight: "bold",
    },
});

export default HeroSection;