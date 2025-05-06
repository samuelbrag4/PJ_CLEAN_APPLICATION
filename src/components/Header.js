import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Header = ({ themeColor, activePage }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();
  // Verificar se navigation foi definido corretamente
  const navigation = useNavigation();

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleCloseMenu = () => {
    setMenuActive(false);
  };

  // Função simplificada para navegação direta
  const navigateTo = (screen) => {
    handleCloseMenu(); // Fecha o menu se estiver aberto
    
    try {
      console.log(`Navegando para: ${screen}`);
      
      // Usar uma implementação mais direta para navegação
      if (navigation && navigation.navigate) {
        navigation.navigate(screen);
        console.log(`Navegação para ${screen} bem-sucedida!`);
      } else {
        console.warn("Objeto navigation não está disponível ou não tem método navigate");
        Alert.alert("Erro de navegação", "Sistema de navegação não está disponível.");
      }
    } catch (error) {
      console.error(`Erro ao navegar para ${screen}:`, error);
      Alert.alert("Erro", `Não foi possível navegar para ${screen}`);
    }
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
            <TouchableOpacity onPress={() => navigateTo("Home")}>
              <Text style={styles.navText}>
                Home
              </Text>
            </TouchableOpacity>
            
            {/* Produtos com submenu */}
            <View style={styles.dropdownContainer}>
              <TouchableOpacity>
                <Text style={styles.navText}>
                  Produtos
                </Text>
              </TouchableOpacity>
              <View style={styles.dropdown}>
                <TouchableOpacity 
                  style={styles.dropdownButton}
                  onPress={() => navigateTo("SkincareScreen")}
                >
                  <Text style={styles.dropdownItem}>Skincare</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.dropdownButton}
                  onPress={() => navigateTo("MakeScreen")}
                >
                  <Text style={styles.dropdownItem}>Maquiagem</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.dropdownButton}
                  onPress={() => navigateTo("CorpoScreen")}
                >
                  <Text style={styles.dropdownItem}>Corpo</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity onPress={() => navigateTo("BlogScreen")}>
              <Text style={styles.navText}>
                Blog
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigateTo("SobreScreen")}>
              <Text style={styles.navText}>
                Sobre Nós
              </Text>
            </TouchableOpacity>
            
            {/* Conta com submenu */}
            <View style={styles.dropdownContainer}>
              <TouchableOpacity onPress={() => navigateTo("Conta")}>
                <Text style={styles.navText}>
                  Minha Conta
                </Text>
              </TouchableOpacity>
              <View style={styles.dropdown}>
                <TouchableOpacity 
                  style={styles.dropdownButton}
                  onPress={() => navigateTo("FavsScreen")}
                >
                  <Text style={styles.dropdownItem}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.dropdownButton}
                  onPress={() => navigateTo("ComentScreen")}
                >
                  <Text style={styles.dropdownItem}>Comentários</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity onPress={() => navigateTo("LoginScreen")}>
              <Text style={styles.navText}>
                Login
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

      {/* Modal para o menu hamburguer */}
      <Modal
        visible={menuActive}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseMenu}
      >
        <View style={styles.absoluteFull}>
          <Pressable
            style={styles.transparentOverlay}
            onPress={handleCloseMenu}
          />

          <View style={[styles.sidebar, { backgroundColor: themeColor }]}>
            <TouchableOpacity
              onPress={handleCloseMenu}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Links do menu mobile */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigateTo("Home")}
            >
              <Text style={styles.sidebarText}>
                Home
              </Text>
            </TouchableOpacity>
            
            {/* Cabeçalho produtos */}
            <Text style={styles.sidebarHeader}>Produtos</Text>
            <TouchableOpacity 
              style={styles.menuSubItem}
              onPress={() => navigateTo("SkincareScreen")}
            >
              <Text style={styles.sidebarSubItem}>
                Skincare
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuSubItem}
              onPress={() => navigateTo("MakeScreen")}
            >
              <Text style={styles.sidebarSubItem}>
                Maquiagem
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuSubItem}
              onPress={() => navigateTo("CorpoScreen")}
            >
              <Text style={styles.sidebarSubItem}>
                Corpo
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigateTo("BlogScreen")}
            >
              <Text style={styles.sidebarText}>
                Blog
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigateTo("SobreScreen")}
            >
              <Text style={styles.sidebarText}>
                Sobre Nós
              </Text>
            </TouchableOpacity>
            
            {/* Conta */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigateTo("Conta")}
            >
              <Text style={styles.sidebarText}>
                Minha Conta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuSubItem}
              onPress={() => navigateTo("FavsScreen")}
            >
              <Text style={styles.sidebarSubItem}>
                Favoritos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuSubItem}
              onPress={() => navigateTo("ComentScreen")}
            >
              <Text style={styles.sidebarSubItem}>
                Comentários
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigateTo("LoginScreen")}
            >
              <Text style={styles.sidebarText}>
                Login/Cadastro
              </Text>
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
    color: "#FFFFFF",
    fontFamily: "Caveat",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 10,
  },
  navText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFFFFF",
    marginLeft: 20,
    marginBottom: 10,
    paddingVertical: 5,
  },
  activeNavText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    paddingBottom: 2,
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 30,
    left: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    display: "none", // Inicialmente oculto
    width: 140, // Largura fixa para dropdown
  },
  dropdownButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  dropdownItem: {
    color: "#333333",
    fontSize: 14,
    paddingVertical: 2,
  },
  hamburgerButton: {
    padding: 10,
  },
  hamburger: {
    fontSize: 30,
    color: "#FFFFFF",
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
    backgroundColor: "#F05080",
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
    color: "#FFFFFF",
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 2,
  },
  menuSubItem: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    paddingLeft: 20,
    borderRadius: 5,
    marginVertical: 1,
  },
  sidebarText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  sidebarHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.3)",
    paddingBottom: 4,
  },
  sidebarSubItem: {
    fontSize: 14,
    color: "#FFFFFF",
    paddingLeft: 6,
  }
});

export default Header;