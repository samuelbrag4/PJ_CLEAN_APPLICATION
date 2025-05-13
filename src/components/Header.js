import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { Animated } from "react-native";

const Header = ({ themeColor, activePage }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
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
                href="/produto"
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
                href="/blog-video"
                style={[
                  styles.navText,
                  activePage === "Blog Video" && styles.activeNavText,
                ]}
              >
                Blog Video
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/blog-artigo"
                style={[
                  styles.navText,
                  activePage === "Blog Artigo" && styles.activeNavText,
                ]}
              >
                Blog Artigo
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

      {/* Modal para o menu hamburguer */}
      <Modal
        visible={menuActive}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseMenu} // Fecha o menu ao pressionar "voltar" no Android
      >
        <View style={styles.absoluteFull}>
          {/* Overlay transparente para fechar o menu ao clicar fora */}
          <Pressable
            style={styles.transparentOverlay}
            onPress={handleCloseMenu} // Fecha o menu ao clicar no overlay
          />

          {/* Menu lateral */}
          <View style={[styles.sidebar, { backgroundColor: themeColor }]}>
            {/* Botão de fechar */}
            <TouchableOpacity
              onPress={handleCloseMenu}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Links do menu */}
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
                href="/produto"
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
                href="/blog-video"
                style={[
                  styles.navText,
                  activePage === "Blog Video" && styles.activeNavText,
                ]}
              >
                Blog Video
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link
                href="/blog-artigo"
                style={[
                  styles.navText,
                  activePage === "Blog Artigo" && styles.activeNavText,
                ]}
              >
                Blog Artigo
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
      </Modal>
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
    flexWrap: "wrap",
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
    flexWrap: "wrap",
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
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  transparentOverlay: {
    flex: 1,
  },
  sidebar: {
    height: "100%",
    width: "70%",
    maxWidth: 300,
    backgroundColor: "#ffffff",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Header;
