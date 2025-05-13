import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import ContaScreen from "../screens/ContaScreen";
import CorpoScreen from "../screens/CorpoScreen";
import FavsScreen from "../screens/FavsScreen";
import ComentScreen from "../screens/ComentScreen";
import BlogVideoScreen from "./screens/BlogVideoScreen";

const Stack = createStackNavigator();

export default function App() {
  // Carregando a fonte Pacifico
  const [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#F05080" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* Adicione estas novas telas */}
        <Stack.Screen
          name="Conta"
          component={ContaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CorpoScreen"
          component={CorpoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavsScreen"
          component={FavsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComentScreen"
          component={ComentScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="BlogVideoScreen"
          component={BlogBideoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}