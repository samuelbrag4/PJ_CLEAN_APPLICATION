import { View, Image, TouchableOpacity } from "react-native";

const HeroSection = ({ linkImage, title, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerFundo}>
                <Image source={{linkImage}} />
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.title}>{title}</Text>
                <Text styles={styles.text}>{text}</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ler mais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HeroSection;