import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FavouritesScreen from '../screens/Favourites';
import CartScreen from '../screens/Cart';
import ShopByCate from '../screens/ShopByCate';
// import các screen khác...

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ShopByCate" component={ShopByCate} />
      {/* Thêm các screen khác vào đây */}
    </Stack.Navigator>
  );
}
