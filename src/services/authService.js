import axios from "axios";

const API_URL = "http://localhost:4000"; // Troque para o endereço do seu backend se necessário

export async function getProfile(token) {
  try {
    const res = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: err.response?.data?.message || "Erro ao buscar perfil" };
  }
}

export async function updateProfile(token, data) {
  try {
    const res = await axios.put(`${API_URL}/profile`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: err.response?.data?.message || "Erro ao atualizar perfil" };
  }
}

export async function login(email, senha) {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, senha });
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: err.response?.data?.message || "Credenciais inválidas." };
  }
}

export async function register({ nome, email, senha }) {
  try {
    const res = await axios.post(`${API_URL}/register`, { nome, email, senha });
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, message: err.response?.data?.message || "Erro ao criar conta." };
  }
}