import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma conta</Text>
      {/* Adicione aqui os campos de entrada para a criação de conta */}
      <Button title="Criar Conta" onPress={() => { /* lógica para criar conta */ }} />
      <Text style={styles.footerText}>
        Já tem uma conta?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          Entre
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;