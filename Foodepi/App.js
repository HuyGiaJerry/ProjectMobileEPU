import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screen
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import { ThemeProvider } from "./context/ThemeContext";
import Authencation from "./screens/Auth";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Auth" component={Authencation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}