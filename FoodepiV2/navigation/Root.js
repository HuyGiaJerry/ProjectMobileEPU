import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppDrawer from './drawer';
import LoginScreen from '../screens/Login';
import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
import MainStack from './stack';
import CartScreen from '../screens/Cart';
import ShopDetail from '../screens/ShopDetail';
import WelcomeScreen from '../screens/welcome';
const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Auth" component={AuthScreen} />
      <RootStack.Screen name="App" component={AppDrawer} />
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      {/* <RootStack.Screen name="MainStack" component={MainStack} /> */}
    </RootStack.Navigator>
  );
}
