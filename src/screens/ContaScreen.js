import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header.js";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile, updateProfile } from "../services/authService";

const ContaScreen = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idioma: "pt-BR",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        setErrorMessage("Usuário não autenticado.");
        setIsLoading(false);
        return;
      }
      const result = await getProfile(token);
      if (result.success) {
        setUserData(result.data);
        setFormData({
          nome: result.data.nome || "",
          email: result.data.email || "",
          senha: "",
          idioma: result.data.idioma || "pt-BR",
        });
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage("Erro ao buscar dados do usuário. Verifique sua conexão.");
    }
    setIsLoading(false);
  };

  const handleEdit = async () => {
    if (isEditing) {
      // Salvar alterações
      setErrorMessage("");
      setSuccessMessage("");
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          setErrorMessage("Usuário não autenticado.");
          setIsLoading(false);
          return;
        }
        const dataToSend = {
          nome: formData.nome,
          idioma: formData.idioma,
        };
        if (formData.senha) dataToSend.senha = formData.senha;
        const result = await updateProfile(token, dataToSend);
        if (result.success) {
          setUserData(result.data);
          setSuccessMessage("Dados atualizados com sucesso!");
          setTimeout(() => setSuccessMessage(""), 3000);
          setFormData({
            ...formData,
            senha: "",
          });
        } else {
          setErrorMessage(result.message);
        }
      } catch (error) {
        setErrorMessage("Erro ao atualizar dados.");
      }
      setIsLoading(false);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const navigateTo = (screen, params) => {
    if (navigation && navigation.navigate) {
      navigation.navigate(screen, params);
    } else {
      Alert.alert("Navegação", `Navegando para ${screen}`);
    }
  };

  const handleLogout = () => {
    Alert.alert("Sair da conta", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("token");
          navigation.reset({
            index: 0,
            routes: [{ name: "LoginScreen" }],
          });
        },
      },
    ]);
  };

  const sections = [
    {
      title: "Meu Cadastro",
      icon: "user",
      items: [
        {
          name: "Cadastro",
          onPress: () => navigateTo("CorpoScreen"),
        },
      ],
    },
    {
      title: "Meus Favoritos",
      icon: "heart",
      items: [
        {
          name: "Produtos salvos (12)",
          onPress: () => navigateTo("FavsScreen"),
        },
        {
          name: "Lojas favoritas (3)",
          onPress: () => navigateTo("FavsScreen", { tab: "stores" }),
        },
      ],
    },
    {
      title: "Meus Comentários",
      icon: "message-square",
      items: [
        {
          name: "Avaliações (5)",
          onPress: () => navigateTo("ComentScreen"),
        },
        {
          name: "Comentários (8)",
          onPress: () => navigateTo("ComentScreen", { tab: "comments" }),
        },
      ],
    },
  ];

  if (isLoading && !userData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F05080" />
        <Text style={styles.loadingText}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header themeColor="#F05080" activePage="Conta" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Perfil */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri:
                userData?.fotoPerfil ||
                userData?.avatar ||
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{userData?.nome || "Carregando..."}</Text>
          <Text style={styles.userEmail}>{userData?.email || ""}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <FontAwesome name="sign-out" size={18} color="#FFF" />
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>

        {/* Menu de navegação */}
        <View style={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Feather name={section.icon} size={20} color="#FF7EB9" />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.itemButton}
                  onPress={item.onPress}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Feather name="chevron-right" size={18} color="#CCC" />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Formulário de edição */}
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
              editable={false}
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
                placeholder="Nova senha"
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
                  formData.idioma === "pt-BR" && styles.languageOptionSelected,
                ]}
                onPress={() => isEditing && handleInputChange("idioma", "pt-BR")}
                disabled={!isEditing}
              >
                <Text
                  style={
                    formData.idioma === "pt-BR"
                      ? styles.languageTextSelected
                      : styles.languageText
                  }
                >
                  Português
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.languageOption,
                  formData.idioma === "en-US" && styles.languageOptionSelected,
                ]}
                onPress={() => isEditing && handleInputChange("idioma", "en-US")}
                disabled={!isEditing}
              >
                <Text
                  style={
                    formData.idioma === "en-US"
                      ? styles.languageTextSelected
                      : styles.languageText
                  }
                >
                  Inglês
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountInfoText}>
                Conta criada em:{" "}
                {userData?.createdAt
                  ? new Date(userData.createdAt).toLocaleDateString("pt-BR")
                  : ""}
              </Text>
              <Text style={styles.accountInfoText}>
                Status: {userData?.verificado ? "Verificado" : "Não verificado"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (os mesmos estilos que você já tem)
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#FF7EB9",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#FF7EB9",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#FF7EB9",
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F05080",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 10,
  },
  logoutText: {
    color: "#FFF",
    marginLeft: 6,
    fontWeight: "500",
  },
  sectionsContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF7EB9",
    marginLeft: 8,
  },
  itemButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  itemText: {
    fontSize: 15,
    color: "#555",
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
    marginHorizontal: 15,
    marginBottom: 20,
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
  },
  accountInfo: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  accountInfoText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
});

export default ContaScreen;