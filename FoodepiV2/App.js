import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawer from './navigation/drawer';
import { ThemeProvider } from "./context/ThemeContext";
import RootNavigator from "./navigation/Root";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* <AppDrawer /> */}
        <RootNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}