import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
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
          <Text style={styles.link}>Skincare</Text>
          <Text style={styles.link}>Maquiagem</Text>
          <Text style={styles.link}>Corpo</Text>
          <Text style={styles.link}>Blog</Text>
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
    padding: 8,
  },
  topSection: {
    marginBottom: 8,
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Caveat",
    color: "white",
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    lineHeight: 14,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginVertical: 8,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  connect: {
    flex: 1,
    marginRight: 8,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  link: {
    color: "white",
    fontSize: 10,
    marginLeft: 4,
    textDecorationLine: "underline",
  },
  links: {
    flex: 1,
    marginRight: 8,
  },
  newsletter: {
    flex: 1,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 6,
    textAlign: "center",
    flex: 1,
    marginRight: 4,
    fontSize: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default Footer;