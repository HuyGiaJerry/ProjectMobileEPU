// import React, { useEffect } from "react";
// import { View, Text } from "react-native";

// const LogoutScreen = ({ navigation }) => {
//   useEffect(() => {
//     const logout = async () => {
//       // Ví dụ: await AsyncStorage.removeItem('userToken');
//     //   navigation.reset({
//     //     index: 0,
//     //     routes: [{ name: 'Login' }],
//     //   });
//         navigation.navigate('Main', { screen: 'Login' });   
//     };

//     logout();
//   }, []);

//   return (
//     <View>
//       <Text>Logging out...</Text>
//     </View>
//   );
// };

// export default LogoutScreen;
// screens/Logout.js
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LogoutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Xoá token hoặc session nếu có
    // AsyncStorage.removeItem('token');

    // Reset toàn bộ navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }, []);

  return null; // Không cần UI
}
