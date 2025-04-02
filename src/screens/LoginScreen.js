import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Para o gradiente
import { Link } from "expo-router";

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#F05080", "#FAFAFA"]} style={styles.background}>
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
        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
          <Link href="/signup" style={styles.linkText}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#F05080",
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
  buttonLink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  socialButtons: {
    marginTop: 24,
    width: "80%",
  },
  or: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    margin: 24,
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
    color: "#F05080",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
