import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function CustomDrawerContent(props) {
  const { user } = props;
  const { theme } = useTheme();

  const displayName =
    (user?.firstname || '') + ' ' + (user?.lastname || '') || 'New User';
  const city = user?.city || 'Unknown City';
  const avatar = user?.avatar || 'https://i.pravatar.cc/150';

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: theme.background }}
    >
      <View style={[styles.header]}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={[styles.name, { color: theme.text }]}>{displayName}</Text>
        <Text style={[styles.city, { color: theme.text }]}>{city}</Text>
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
    fontSize: 14,
  },
});
