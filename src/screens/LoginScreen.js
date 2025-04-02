import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Para o gradiente
import { Link } from "expo-router";

const LoginScreen = () => {
  const [currentColor, setCurrentColor] = useState("#00DAC7"); // Cor inicial
  const animatedValue = useRef(new Animated.Value(0)).current;

  const colors = ["#00DAC7", "#F05080", "#DBBD9C", "#5FCED4"]; // Cores para o gradiente

  useEffect(() => {
    let index = 0;

    const animateGradient = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000, // Duração da transição (3 segundos)
        useNativeDriver: false,
      }).start(() => {
        // Atualiza a cor atual e reinicia a animação
        index = (index + 1) % colors.length;
        setCurrentColor(colors[index]);
        animatedValue.setValue(0); // Reinicia o valor animado
        animateGradient(); // Chama a animação novamente
      });
    };

    animateGradient(); // Inicia a animação

    return () => animatedValue.stopAnimation(); // Limpa a animação ao desmontar o componente
  }, []);

  // Interpola a cor do gradiente
  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColor, "#FFFFFF"], // Gradiente da cor atual para branco
  });

  return (
    <Animated.View style={[styles.background, { backgroundColor: interpolatedColor }]}>
      <LinearGradient colors={[currentColor, "#FFFFFF"]} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          {/* Inputs */}
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
          />

          {/* Botão de Entrar */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: currentColor }]} // Sincroniza a cor do botão
          >
            <Link href="/" style={{ textDecorationLine: "none" }}>
              <Text style={styles.buttonText}>Entrar</Text>
            </Link>
          </TouchableOpacity>

          <Text style={styles.or}>Ou</Text>

          {/* Botões decorativos */}
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Entrar com Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Link para cadastro */}
          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Link
              href="/signup"
              style={[styles.linkText, { color: currentColor }]} // Sincroniza a cor do texto "Cadastre-se"
            >
              Cadastre-se
            </Link>
          </Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  or: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    margin: 24,
  },
  socialButtons: {
    marginTop: 24,
    width: "80%",
  },
  socialButton: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  socialButtonText: {
    color: "#333",
    fontSize: 16,
  },
  footerText: {
    marginTop: 24,
    fontSize: 16,
    color: "#fff",
  },
  linkText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;