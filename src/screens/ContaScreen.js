import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Alert
} from "react-native";
import Header from "../components/Header.js";
import { FontAwesome } from '@expo/vector-icons';

const ContaScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idioma: "pt-BR"
  });

  const userId = "598c43a4-a082-41d2-9fb5-92375a46ed6b"; // Substituir pelo ID real do usuário

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Simulando uma chamada API
      // Na implementação real, usar fetch ou axios
      setTimeout(() => {
        const mockUser = {
          nome: "Maria Silva",
          email: "maria@exemplo.com",
          senha: "senha123",
          idioma: "pt-BR"
        };
        setUserData(mockUser);
        setFormData(mockUser);
      }, 1000);
    } catch (error) {
      setErrorMessage("Erro ao buscar dados do usuário");
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      // Simular salvamento
      setUserData(formData);
      setSuccessMessage("Dados atualizados com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const navigateTo = (screen) => {
    // Em uma implementação real, usaria navigation.navigate(screen)
    Alert.alert("Navegação", `Navegando para ${screen}`);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Saindo da conta...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Conta" />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {/* Foto e informações do usuário */}
          <View style={styles.userInfoContainer}>
            <Image 
              source={{uri: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg"}} 
              style={styles.userImage} 
            />
            <Text style={styles.userName}>{userData?.nome || "Carregando..."}</Text>
            
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <FontAwesome name="sign-out" size={18} color="#FFF" />
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>

          {/* Menu de navegação */}
          <View style={styles.navigationMenu}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigateTo("Conta")}
            >
              <FontAwesome name="user" size={18} color="#F05080" />
              <Text style={styles.navButtonText}>Meu Cadastro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigateTo("Favoritos")}
            >
              <FontAwesome name="heart" size={18} color="#F05080" />
              <Text style={styles.navButtonText}>Meus Favoritos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigateTo("Comentários")}
            >
              <FontAwesome name="comment" size={18} color="#F05080" />
              <Text style={styles.navButtonText}>Meus Comentários</Text>
            </TouchableOpacity>
          </View>

          {/* Formulário */}
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Minha Conta</Text>
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <FontAwesome name={isEditing ? "save" : "edit"} size={18} color="#FFF" />
                <Text style={styles.editButtonText}>{isEditing ? "Salvar" : "Editar"}</Text>
              </TouchableOpacity>
            </View>

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nome</Text>
              <TextInput 
                style={styles.input}
                value={formData.nome}
                onChangeText={(text) => handleInputChange("nome", text)}
                editable={isEditing}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput 
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleInputChange("email", text)}
                keyboardType="email-address"
                editable={isEditing}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput 
                  style={styles.passwordInput}
                  value={formData.senha}
                  onChangeText={(text) => handleInputChange("senha", text)}
                  secureTextEntry={!showPassword}
                  editable={isEditing}
                />
                {isEditing && (
                  <TouchableOpacity 
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="#888" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Idioma</Text>
              <View style={styles.languageSelector}>
                <TouchableOpacity
                  style={[
                    styles.languageOption,
                    formData.idioma === "pt-BR" && styles.languageOptionSelected
                  ]}
                  onPress={() => isEditing && handleInputChange("idioma", "pt-BR")}
                  disabled={!isEditing}
                >
                  <Text style={formData.idioma === "pt-BR" ? styles.languageTextSelected : styles.languageText}>
                    Português
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.languageOption,
                    formData.idioma === "en-US" && styles.languageOptionSelected
                  ]}
                  onPress={() => isEditing && handleInputChange("idioma", "en-US")}
                  disabled={!isEditing}
                >
                  <Text style={formData.idioma === "en-US" ? styles.languageTextSelected : styles.languageText}>
                    Inglês
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#F05080",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  userInfoContainer: {
    alignItems: "center",
    backgroundColor: "#F05080",
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  logoutText: {
    color: "#FFF",
    marginLeft: 6,
    fontWeight: "500",
  },
  navigationMenu: {
    marginBottom: 20,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  navButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  formContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F05080",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  editButtonText: {
    color: "#FFF",
    marginLeft: 6,
    fontWeight: "500",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 12,
  },
  errorMessage: {
    backgroundColor: "#FFE0E0",
    color: "#D00000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  successMessage: {
    backgroundColor: "#E0FFE0",
    color: "#008000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  languageSelector: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    overflow: "hidden",
  },
  languageOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  languageOptionSelected: {
    backgroundColor: "#F05080",
  },
  languageText: {
    fontSize: 16,
    color: "#666",
  },
  languageTextSelected: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  }
});

export default ContaScreen;