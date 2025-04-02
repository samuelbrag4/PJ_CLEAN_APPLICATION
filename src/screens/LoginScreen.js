import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Entrar" onPress={() => { /* lógica para entrar */ }} />

      <Text style={styles.orText}>ou</Text>

      <TouchableOpacity style={styles.socialButton} onPress={() => { /* lógica para entrar com Google */ }}>
        <Text>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={() => { /* lógica para entrar com Facebook */ }}>
        <Text>Entrar com Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Não tem uma conta?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
          Crie uma
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
  orText: {
    marginVertical: 16,
    fontSize: 18,
  },
  socialButton: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 5,
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

export default LoginScreen;