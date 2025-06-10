import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login as loginService } from "../services/authService";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  const [currentColor, setCurrentColor] = useState("#00DAC7");
  const animatedValue = useRef(new Animated.Value(0)).current;
  const colors = ["#00DAC7", "#F05080", "#DBBD9C", "#5FCED4"];
  const [form, setForm] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let index = 0;
    const animateGradient = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start(() => {
        index = (index + 1) % colors.length;
        setCurrentColor(colors[index]);
        animatedValue.setValue(0);
        animateGradient();
      });
    };
    animateGradient();
    return () => animatedValue.stopAnimation();
  }, []);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColor, "#FFFFFF"],
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleLogin = async () => {
    if (!form.email || !form.senha) {
      setError("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    const result = await loginService(form.email, form.senha);
    setLoading(false);
    if (!result.success) {
      setError(result.message || "Credenciais inválidas.");
    } else {
      setSuccess("Login realizado com sucesso! Redirecionando...");
      await AsyncStorage.setItem("token", result.data.token);
      setTimeout(() => {
        router.replace("/"); // Tela principal
      }, 1200);
    }
  };

  return (
    <Animated.View style={[styles.background, { backgroundColor: interpolatedColor }]}>
      <LinearGradient colors={[currentColor, "#FFFFFF"]} style={styles.background}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={(v) => handleChange("email", v)}
              editable={!loading}
              autoComplete="email"
            />
            <View style={{ width: "80%", position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                value={form.senha}
                onChangeText={(v) => handleChange("senha", v)}
                editable={!loading}
                autoComplete="current-password"
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 20,
                  top: 18,
                  zIndex: 2,
                }}
                onPress={() => setShowPassword((v) => !v)}
                disabled={loading}
              >
                <Text style={{ color: "#F05080", fontWeight: "bold" }}>
                  {showPassword ? "🙈" : "👁️"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: currentColor }]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            {error ? (
              <Text style={[styles.errorMessage, { marginTop: 12 }]}>{error}</Text>
            ) : null}
            {success ? (
              <Text style={[styles.successMessage, { marginTop: 12 }]}>{success}</Text>
            ) : null}

            <Text style={styles.or}>Ou</Text>

            {/* Botões decorativos */}
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome
                  name="google"
                  size={20}
                  color="#DB4437"
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>Entrar com Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome
                  name="facebook"
                  size={20}
                  color="#4267B2"
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Não tem uma conta?{" "}
              <Link href="/signup" style={[styles.linkText, { color: currentColor }]}>
                Cadastre-se
              </Link>
            </Text>
          </View>
        </KeyboardAvoidingView>
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
    flexDirection: "row",
  },
  socialIcon: {
    marginRight: 10,
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
  errorMessage: {
    color: "#ff4d4f",
    backgroundColor: "#fff0f0",
    borderRadius: 8,
    padding: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  successMessage: {
    color: "#2ecc71",
    backgroundColor: "#eafaf1",
    borderRadius: 8,
    padding: 10,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default LoginScreen;