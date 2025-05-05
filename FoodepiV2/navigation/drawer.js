import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './stack'; // import stack vừa tạo
import ProfileScreen from '../screens/Profile';
import CustomDrawerContent from '../components/CustomDrawerContent'; // import custom drawer

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

      {/* Nếu muốn thêm các screen khác ngoài stack thì thêm ở đây */}
    </Drawer.Navigator>
  );
}
