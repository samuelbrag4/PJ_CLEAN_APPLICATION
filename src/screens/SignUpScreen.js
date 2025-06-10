import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Para o gradiente
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


const SignUpScreen = () => {
  const [currentColor, setCurrentColor] = useState("#00DAC7");
  const animatedValue = useRef(new Animated.Value(0)).current;
  const colors = ["#00DAC7", "#F05080", "#DBBD9C", "#5FCED4"];
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [confirmSenha, setConfirmSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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

  const handleSignup = async () => {
    if (!form.nome || !form.email || !form.senha || !confirmSenha) {
      setError("Preencha todos os campos.");
      return;
    }
    if (form.senha !== confirmSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    const result = await registerService(form);
    setLoading(false);
    if (result.success) {
      setSuccess("Conta criada com sucesso! Você já pode fazer login.");
      setTimeout(() => router.replace("/login"), 1800);
    } else {
      setError(result.message || "Erro ao criar conta.");
    }
  };

  return (
    <Animated.View style={[styles.background, { backgroundColor: interpolatedColor }]}>
      <LinearGradient colors={[currentColor, "#FFFFFF"]} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Criar Conta</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#999"
            value={form.nome}
            onChangeText={(v) => handleChange("nome", v)}
            editable={!loading}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(v) => handleChange("email", v)}
            editable={!loading}
            autoCapitalize="none"
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
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 20, top: 18, zIndex: 2 }}
              onPress={() => setShowPassword((v) => !v)}
              disabled={loading}
            >
              <Text style={{ color: "#F05080", fontWeight: "bold" }}>
                {showPassword ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="Confirme a senha"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirm}
              value={confirmSenha}
              onChangeText={(v) => {
                setConfirmSenha(v);
                if (error) setError("");
                if (success) setSuccess("");
              }}
              editable={!loading}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 20, top: 18, zIndex: 2 }}
              onPress={() => setShowConfirm((v) => !v)}
              disabled={loading}
            >
              <Text style={{ color: "#F05080", fontWeight: "bold" }}>
                {showConfirm ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: currentColor }]}
            onPress={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Criar Conta</Text>
            )}
          </TouchableOpacity>
          {error ? (
            <Text style={[styles.errorMessage, { marginTop: 12 }]}>{error}</Text>
          ) : null}
          {success ? (
            <Text style={[styles.successMessage, { marginTop: 12 }]}>{success}</Text>
          ) : null}
          <Text style={styles.or}>Ou</Text>
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
            Já tem uma conta?{" "}
            <Link href="/login" style={[styles.linkText, { color: currentColor }]}>
              Entre
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

export default SignUpScreen;