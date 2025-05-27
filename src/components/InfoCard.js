import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const InfoCard = ({
  image,
  title,
  description,
  buttonText = "Ler mais",
  onPress,
  cardColor = "#fff",
  buttonColor = "#5FCED4",
  titleColor = "#222",
  descriptionColor = "#555",
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 20,
    gap: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 18,
    lineHeight: 18,
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default InfoCard;