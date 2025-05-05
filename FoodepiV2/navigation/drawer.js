import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './stack'; // import stack vừa tạo
import ProfileScreen from '../screens/Profile';
import CustomDrawerContent from '../components/CustomDrawerHeader'; // import custom drawer
import FavouritesScreen from '../screens/Favourites';
import AddressesScreen from '../screens/Addresses';
import OrderScreen from '../screens/Order';
import WalletScreen from '../screens/Wallet';
import PromotionScreen from '../screens/Promotion';
import ChallengeScreen from '../screens/Challenge';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import HelpScreen from '../screens/Help';
import SettingScreen from '../screens/Setting';
import TeamConditionScreen from '../screens/Team.Condition';
import LogoutScreen from '../screens/Logout';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/User.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Favourite"
                component={FavouritesScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Heart.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Address"
                component={AddressesScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Location.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Orders & Reordering"
                component={OrderScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Work.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Wallet.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Promotion"
                component={PromotionScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Home - 2.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Challenge & Vouchers"
                component={ChallengeScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../assets/Award.png')}
                            style={{ width: size, height: size, borderRadius: size / 2 }}
                            resizeMode="cover"
                        />
                    ),
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },

                    headerShown: false
                }}
            />
            <Drawer.Screen
                name='Help center'
                component={HelpScreen}
                options={{
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' }

                }}
            />
            <Drawer.Screen
                name='Settings'
                component={SettingScreen}
                options={{
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' }

                }}

            />
            <Drawer.Screen
                name='Terms & Condition/Privacy'
                component={TeamConditionScreen}
                options={{
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' }

                }}
            />
            <Drawer.Screen
                name='Logout'
                component={LogoutScreen}
                options={{
                    drawerLabelStyle: { fontWeight: '500', color: 'rgba(0, 0, 0, 1)' },
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}
