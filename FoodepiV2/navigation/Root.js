import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppDrawer from './drawer'; 
import LoginScreen from '../screens/Login'; 
import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
import MainStack from './stack';
import CartScreen from '../screens/Cart';
const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Auth" component={AuthScreen} />
      <RootStack.Screen name="App" component={AppDrawer} />
    </RootStack.Navigator>
  );
}
