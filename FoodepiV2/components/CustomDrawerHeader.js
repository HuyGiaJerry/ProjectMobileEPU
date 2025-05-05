import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../assets/circle-cropped.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Rownok Mahbub</Text>
        <Text style={styles.city}>Dhaka</Text>
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
