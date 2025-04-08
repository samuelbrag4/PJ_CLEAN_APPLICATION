import React from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = ({ themeColor }) => {
  return (
    <View style={[styles.footerContainer, { backgroundColor: themeColor }]}>
      <View style={styles.topSection}>
        <Text style={styles.logo}>Clean.</Text>
        <Text style={styles.description}>
          Produtos de skincare, maquiagem e cuidados com a pele.
        </Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.bottomSection}>
        <View style={styles.connect}>
          <Text style={styles.title}>CONECTE-SE</Text>
          <View style={styles.iconRow}>
            <Icon name="instagram" size={14} color="white" />
            <Text style={styles.link}> Instagram</Text>
          </View>
          <View style={styles.iconRow}>
            <Icon name="facebook" size={14} color="white" />
            <Text style={styles.link}> Facebook</Text>
          </View>
          <View style={styles.iconRow}>
            <Icon name="twitter" size={14} color="white" />
            <Text style={styles.link}> Twitter</Text>
          </View>
        </View>

        <View style={styles.links}>
          <Text style={styles.title}>RELEVANTES</Text>
          <Link href="/produtos" style={styles.link}>
            Produtos
          </Link>
          <Link href="/skincare" style={styles.link}>
            Skincare
          </Link>
          <Link href="/corpo" style={styles.link}>
            Corpo
          </Link>
          <Link href="/make" style={styles.link}>
            Make
          </Link>
          <Link href="/blog" style={styles.link}>
            Blog
          </Link>
        </View>

        <View style={styles.newsletter}>
          <Text style={styles.title}>NEWSLETTER</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={themeColor}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ASSINAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#333",
  },
  topSection: {
    marginBottom: 10,
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Caveat",
    color: "white",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    lineHeight: 16,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
  },
  bottomSection: {
    flexDirection: "column", // Ajusta para coluna em telas menores
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  connect: {
    marginBottom: 10,
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  link: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  links: {
    marginBottom: 10,
    alignItems: "center",
  },
  newsletter: {
    marginBottom: 10,
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    textAlign: "center",
    flex: 1,
    marginRight: 5,
    fontSize: 12,
  },
  button: {
    backgroundColor: "rgb(27, 175, 168)",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default Footer;
