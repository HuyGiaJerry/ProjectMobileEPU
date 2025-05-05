import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CustomDrawerContent(props) {
  const { user } = props;
  // Giá trị mặc định nếu user không tồn tại
  const displayName = (user?.firstname || '') + ' ' + (user?.lastname || '') || 'New User';
  const city = user?.city || 'Unknown City';
  const avatar = user?.avatar || 'https://i.pravatar.cc/150'; // URL mặc định cho avatar

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  city: {
    color: 'gray',
    fontSize: 14,
  },
});