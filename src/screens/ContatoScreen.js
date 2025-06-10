import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Feather, FontAwesome } from "@expo/vector-icons";

const ContatoScreen = () => {
  const [formData, setFormData] = useState({
    nome: "",
    assunto: "",
    email: "",
    mensagem: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.nome ||
      !formData.email ||
      !formData.assunto ||
      !formData.mensagem
    ) {
      setErrorMessage("Por favor, preencha todos os campos.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setSuccessMessage(
      "Mensagem enviada com sucesso! Entraremos em contato em breve."
    );
    setTimeout(() => setSuccessMessage(""), 4000);

    setFormData({
      nome: "",
      assunto: "",
      email: "",
      mensagem: "",
    });
  };

  return (
    <View style={styles.container}>
      <Header themeColor="#DBBD9C" activePage="Contato" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerSection}>
          <FontAwesome name="envelope" size={40} color="#DBBD9C" />
          <Text style={styles.headerTitle}>Entre em Contato</Text>
          <Text style={styles.headerSubtitle}>
            Estamos aqui para ajudar você. Envie sua mensagem!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Enviar Mensagem</Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <FontAwesome name="send" size={18} color="#FFF" />
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          {successMessage ? (
            <Text style={styles.successMessage}>{successMessage}</Text>
          ) : null}

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={formData.nome}
              onChangeText={(text) => handleInputChange("nome", text)}
              placeholder="Digite seu nome"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="Digite seu email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Assunto</Text>
            <TextInput
              style={styles.input}
              value={formData.assunto}
              onChangeText={(text) => handleInputChange("assunto", text)}
              placeholder="Digite o assunto"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Mensagem</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              value={formData.mensagem}
              onChangeText={(text) => handleInputChange("mensagem", text)}
              placeholder="Digite sua mensagem"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.miniFooter}>
          <View style={styles.miniFooterHeader}>
            <Text style={styles.miniFooterLogo}>Clean.</Text>
            <Text style={styles.miniFooterDescription}>
              Produtos de skincare, maquiagem e cuidados com a pele.
            </Text>
          </View>

          <View style={styles.miniFooterSeparator} />

          <View style={styles.miniFooterContent}>
            <View style={styles.miniFooterSection}>
              <Text style={styles.miniFooterTitle}>CONECTE-SE</Text>
              <View style={styles.socialItem}>
                <FontAwesome name="instagram" size={14} color="#FFF" />
                <Text style={styles.socialText}>Instagram</Text>
              </View>
              <View style={styles.socialItem}>
                <FontAwesome name="facebook" size={14} color="#FFF" />
                <Text style={styles.socialText}>Facebook</Text>
              </View>
              <View style={styles.socialItem}>
                <FontAwesome name="twitter" size={14} color="#FFF" />
                <Text style={styles.socialText}>Twitter</Text>
              </View>
            </View>

            <View style={styles.miniFooterSection}>
              <Text style={styles.miniFooterTitle}>RELEVANTES</Text>
              <Text style={styles.linkText}>Produtos</Text>
              <Text style={styles.linkText}>Skincare</Text>
              <Text style={styles.linkText}>Corpo</Text>
              <Text style={styles.linkText}>Make</Text>
              <Text style={styles.linkText}>Blog</Text>
            </View>
          </View>

          <View style={styles.newsletterSection}>
            <Text style={styles.miniFooterTitle}>NEWSLETTER</Text>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.newsletterInput}
                placeholder="Email"
                placeholderTextColor="#DBBD9C"
              />
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>ASSINAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  headerSection: {
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#DBBD9C",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#555",
    marginTop: 10,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DBBD9C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  submitButtonText: {
    color: "#FFF",
    marginLeft: 6,
    fontWeight: "500",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  textarea: {
    height: 100,
  },
  errorMessage: {
    backgroundColor: "#FFE0E0",
    color: "#D00000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  successMessage: {
    backgroundColor: "#E0FFE0",
    color: "#008000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  miniFooter: {
    backgroundColor: "#DBBD9C",
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
  },
  miniFooterHeader: {
    alignItems: "center",
    marginBottom: 15,
  },
  miniFooterLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  miniFooterDescription: {
    fontSize: 12,
    color: "#FFF",
    textAlign: "center",
    lineHeight: 16,
  },
  miniFooterSeparator: {
    height: 1,
    backgroundColor: "#FFF",
    opacity: 0.8,
    marginVertical: 15,
  },
  miniFooterContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  miniFooterSection: {
    flex: 1,
    alignItems: "center",
  },
  miniFooterTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  socialText: {
    color: "#FFF",
    fontSize: 12,
    marginLeft: 8,
    textDecorationLine: "underline",
  },
  linkText: {
    color: "#FFF",
    fontSize: 12,
    marginVertical: 2,
    textDecorationLine: "underline",
  },
  newsletterSection: {
    alignItems: "center",
    marginTop: 10,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    width: "100%",
    maxWidth: 280,
  },
  newsletterInput: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flex: 1,
    marginRight: 8,
    fontSize: 12,
    textAlign: "center",
  },
  subscribeButton: {
    backgroundColor: "#FF6E94",
    padding: 8,
    borderRadius: 5,
  },
  subscribeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ContatoScreen;