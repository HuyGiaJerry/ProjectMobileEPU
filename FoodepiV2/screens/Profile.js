import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../context/ThemeContext';
import ButtonGoBack from '../components/GoBack';

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ route }) => {
  const { user } = route.params || {};
  const { theme } = useTheme();

  // Xử lý trường hợp user không có các trường cần thiết
  const displayName = (user?.firstname || '') + ' ' + (user?.lastname || '') || 'New User';
  const firstName = user?.firstname || 'New';
  const lastName = user?.lastname || 'User';
  const phoneNumber = user?.phone || 'N/A';
  const email = user?.email || 'email@example.com';
  const avatar = user?.avatar || 'https://i.pravatar.cc/150';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: width * 0.05,
      paddingTop: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 8,
    },
    avatar: {
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: (width * 0.18) / 2,
      borderWidth: 3,
      borderColor: '#FF6B6B',
      marginRight: 40,
    },
    divider: {
      width: 1,
      height: 50,
      backgroundColor: 'rgba(238, 238, 243, 1)',
      marginLeft: 10,
    },
    joinedBox: {
      justifyContent: 'center',
    },
    joinedText: {
      color: theme.subText || '#888',
      fontSize: 14,
    },
    joinedTime: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 15,
    },
    name: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginTop: 8,
    },
    lastname: {
      fontSize: 22,
      color: theme.subText || '#bbb',
      marginBottom: 16,
    },
    card: {
      backgroundColor: theme.background1 || '#fafafa',
      borderRadius: 16,
      padding: 12,
      marginBottom: 10,
      elevation: 1,
      height: height * 0.11,
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardContent: {
      flex: 1,
      marginLeft: 12,
      paddingVertical: 10,
    },
    cardLabel: {
      color: theme.subText || '#bbb',
      fontSize: 13,
    },
    cardValue: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 15,
    },
    socialTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 18,
      marginBottom: 8,
      color: theme.text,
    },
    socialCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background1 || '#fafafa',
      borderRadius: 16,
      paddingVertical: 30,
      paddingHorizontal: 12,
      marginBottom: 10,
    },
    socialText: {
      fontSize: 15,
      color: theme.text,
      textAlign: 'center',
      flex: 1,
    },
    connectText: {
      color: 'rgba(254, 85, 42, 1)',
      fontWeight: 'bold',
    },
    connectedText: {
      color: 'rgba(96, 199, 162, 1)',
      fontWeight: 'bold',
      marginRight: 8,
    },
  });

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ButtonGoBack />
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar & Info */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
        <View style={styles.divider} />
        <View style={styles.joinedBox}>
          <Text style={styles.joinedText}>Joined</Text>
          <Text style={styles.joinedTime}>9 mon ago</Text>
        </View>
      </View>
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.lastname}>{lastName}</Text>

      {/* Info Cards */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Icon name="user" size={20} color="#333" />
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>Name</Text>
            <Text style={styles.cardValue}>{displayName}</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../assets/edit.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <MaterialIcon name="email" size={20} color="#333" />
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>Email</Text>
            <Text style={styles.cardValue}>{email}</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../assets/edit.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Icon name="phone" size={20} color="#333" />
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>Mobile Number</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.cardValue}>{phoneNumber}</Text>
              <Image source={require('../assets/check.png')} style={{ width: 18, height: 18, marginLeft: 10 }} />
            </View>
          </View>
          <TouchableOpacity>
            <Image source={require('../assets/edit.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Social Accounts */}
      <Text style={styles.socialTitle}>Social Accounts</Text>
      <View style={styles.socialCard}>
        <FontAwesome name="facebook" size={24} color="#000" style={{ marginLeft: 15 }} />
        <Text style={styles.socialText}>Facebook</Text>
        <TouchableOpacity>
          <Text style={styles.connectText}>Connect</Text>
        </TouchableOpacity>
        <View style={{ width: 24, height: 24 }} />
      </View>
      <View style={styles.socialCard}>
        <FontAwesome name="google" size={24} color="#000" style={{ marginLeft: 15 }} />
        <Text style={styles.socialText}>Google</Text>
        <Text style={styles.connectedText}>Connected</Text>
        <TouchableOpacity>
          <MaterialIcon name="close" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;