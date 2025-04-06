import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { Animated } from "react-native";

const Header = ({ themeColor, activePage }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();

  const [sidebarAnimation] = useState(new Animated.Value(-300)); 

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
    Animated.timing(sidebarAnimation, {
      toValue: menuActive ? -300 : 0, 
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleCloseMenu = () => {
    setMenuActive(false);
  };

  return (
    <View style={{ zIndex: 999 }}>
      {/* Cabeçalho fixo */}
      <View style={[styles.header, { backgroundColor: themeColor }]}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Clean.</Text>
        </View>

        {width > 768 ? (
          <View style={styles.nav}>
            <TouchableOpacity>
              <Link
                href="/"
                style={[
                  styles.navText,
                  activePage === "Home" && styles.activeNavText,
                ]}
              >
                Home
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/produtos"
                style={[
                  styles.navText,
                  activePage === "Produtos" && styles.activeNavText,
                ]}
              >
                Produtos
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/blog"
                style={[
                  styles.navText,
                  activePage === "Blog" && styles.activeNavText,
                ]}
              >
                Blog
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/contato"
                style={[
                  styles.navText,
                  activePage === "Contato" && styles.activeNavText,
                ]}
              >
                Contato
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/conta"
                style={[
                  styles.navText,
                  activePage === "Minha Conta" && styles.activeNavText,
                ]}
              >
                Minha Conta
              </Link>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleMenuToggle}
            style={styles.hamburgerButton}
          >
            <Text style={styles.hamburger}>☰</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Overlay + Sidebar */}
      {menuActive && width <= 768 && (
        <View style={styles.absoluteFull}>
          <Pressable
            style={styles.transparentOverlay}
            onPress={handleCloseMenu}
          />

          <View style={[styles.sidebar, { backgroundColor: themeColor }]}>
            <TouchableOpacity>
              <Link
                href="/"
                style={[
                  styles.navText,
                  activePage === "Home" && styles.activeNavText,
                ]}
              >
                Home
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/produtos"
                style={[
                  styles.navText,
                  activePage === "Produtos" && styles.activeNavText,
                ]}
              >
                Produtos
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/blog"
                style={[
                  styles.navText,
                  activePage === "Blog" && styles.activeNavText,
                ]}
              >
                Blog
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/contato"
                style={[
                  styles.navText,
                  activePage === "Contato" && styles.activeNavText,
                ]}
              >
                Contato
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/conta"
                style={[
                  styles.navText,
                  activePage === "Minha Conta" && styles.activeNavText,
                ]}
              >
                Minha Conta
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap", // Permite que os itens se ajustem em telas menores
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Caveat",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Ajusta os links em telas menores
    width: "100%",
    marginTop: 10,
  },
  navText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
    marginLeft: 10,
    marginBottom: 10,
  },
  activeNavText: {
    color: "#ffffff",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    paddingBottom: 2,
  },
  hamburgerButton: {
    padding: 10,
  },
  hamburger: {
    fontSize: 30,
    color: "#ffffff",
  },
  absoluteFull: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 1000, // Garante que o overlay e a barra lateral fiquem acima de tudo
    flexDirection: "row",
  },
  transparentOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente para destacar a barra lateral
    zIndex: 999, // Certifica-se de que o overlay fique abaixo da barra lateral
  },
  sidebar: {
    position: "absolute", // Garante que a barra lateral fique sobreposta
    top: 0,
    right: 0, // Alinha a barra lateral à direita
    height: "100%", // Ocupa toda a altura da tela
    width: "70%", // Limita a largura da barra lateral a 70% da tela
    maxWidth: 300, // Define uma largura máxima para telas maiores
    backgroundColor: "#ffffff", // Fundo branco para contraste
    padding: 20,
    zIndex: 1001, // Garante que a barra lateral fique acima de todos os outros elementos
    overflow: "hidden", // Evita que o conteúdo da barra lateral quebre o layout
    shadowColor: "#000", // Adiciona uma sombra para destacar a barra lateral
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra para Android
  },
});

export default Header;
