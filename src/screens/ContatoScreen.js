import React from "react";
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

const ContatoScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#DBBD9C" activePage="Contato" />

      {/* Conteúdo principal com rolagem */}
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>Entre em Contato</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#8C7A65"
            />
            <TextInput
              style={styles.input}
              placeholder="Assunto"
              placeholderTextColor="#8C7A65"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#8C7A65"
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Mensagem"
              placeholderTextColor="#8C7A65"
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer themeColor="#DBBD9C" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF", // Substituí o linear-gradient inválido por cor sólida
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#DBBD9C",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8C7A65",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#F0E1D1",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DBBD9C",
    fontSize: 14,
    color: "#8C7A65",
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#DBBD9C",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ContatoScreen;
