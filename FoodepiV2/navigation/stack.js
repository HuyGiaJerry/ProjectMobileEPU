import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FavouritesScreen from '../screens/Favourites';
import CartScreen from '../screens/Cart';
import LoginScreen from '../screens/Login';
import AuthScreen from '../screens/Auth';
import ShopByCate from '../screens/ShopByCate';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ShopByCate" component={ShopByCate} />
    </Stack.Navigator>
  );
}
