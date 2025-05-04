import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screen
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import { ThemeProvider } from "./context/ThemeContext";
import Authencation from "./screens/Auth";
import ProfileScreen from "./screens/Profile";
import CartScreen from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
<<<<<<< HEAD
          <Stack.Screen name="Auth" component={Authencation}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Cart" component={CartScreen}/>
=======
          <Stack.Screen name="Auth" component={Authencation} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
>>>>>>> 33e35ac2ee497953c8582930a23dc249086f1bb0
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}