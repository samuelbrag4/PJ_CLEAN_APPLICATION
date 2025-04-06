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

const Header = ({ themeColor, activePage }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { width, height } = useWindowDimensions();

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
              <Text
                style={[
                  styles.navText,
                  activePage === "Home" && styles.activeNavText,
                ]}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Sobre" && styles.activeNavText,
                ]}
              >
                Sobre
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Produtos" && styles.activeNavText,
                ]}
              >
                Produtos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Blog" && styles.activeNavText,
                ]}
              >
                Blog
              </Text>
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
          {/* Fundo transparente (sem sombra preta) */}
          <Pressable
            style={styles.transparentOverlay}
            onPress={handleCloseMenu}
          />

          <View style={[styles.sidebar, { backgroundColor: themeColor }]}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Home" && styles.activeNavText,
                ]}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Sobre" && styles.activeNavText,
                ]}
              >
                Sobre
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Produtos" && styles.activeNavText,
                ]}
              >
                Produtos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.navText,
                  activePage === "Blog" && styles.activeNavText,
                ]}
              >
                Blog
              </Text>
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
    paddingVertical: 30, // <-- aumenta o espaço interno
    minHeight: 80,        // <-- altura mínima pra garantir que não fique esmagado
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
    width: "60%",
  },
  navText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    marginLeft: 20,
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
    zIndex: 999,
    flexDirection: "row",
  },
  // Overlay totalmente transparente (sem sombra)
  transparentOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  sidebar: {
    width: "70%",
    padding: 20,
    justifyContent: "flex-start",
  },
});

export default Header;
