import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Teste de renderização</Text>

      <Text style={styles.title}>Criar uma conta</Text>
      {/* Adicione aqui os campos de entrada para a criação de conta */}
      <Button
        title="Criar Conta"
        onPress={() => {
          /* lógica para criar conta */
        }}
      />
      <Text style={styles.footerText}>
        Já tem uma conta?{" "}
        <Link href="/login" style={styles.linkText}>
          Entre
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;