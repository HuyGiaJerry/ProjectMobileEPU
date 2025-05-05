import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useRoute } from '@react-navigation/native';
import ButtonGoBack from '../components/GoBack';

export default function PaymentScreen({ navigation }) {
  const { theme } = useTheme();
  const route = useRoute();
  const total = route.params?.total || 0;

  const cards = [
    {
      id: '1',
      number: '**** **** **** 5421',
      expiry: '05/2023',
      name: 'Rownok Mahbub',
      backgroundColor: '#FFB074',
    },
    {
      id: '2',
      number: '**** **** **** 8294',
      expiry: '12/2024',
      name: 'Jane Doe',
      backgroundColor: 'rgba(141, 220, 187, 1)',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ButtonGoBack />
        <Text style={styles.headerText}>Payment Methods</Text>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>
        <Text style={styles.greetingBold}>Good Morning,</Text> Don't{'\n'}
        Forget To Have <Text style={styles.greetingBold}>Breakfast</Text>
      </Text>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.balanceLabel}>My Balance</Text>
          <Image source={require('../assets/Vector.png')} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={styles.totalBalance}>Total Balance</Text>
        <Text style={styles.balanceValue}>${parseFloat(total).toFixed(2)}</Text>

        <View style={styles.balanceActions}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#2D2D2D' }]}>
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FFE4B5' }]}>
            <Text style={[styles.actionText, { color: '#000' }]}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Saved Cards */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Saved Cards</Text>
        <TouchableOpacity>
          <Text style={styles.addCardText}>Add Cards</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList rendering cards */}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.cardNumber}>{item.number}</Text>
            <View style={styles.cardInfoRow}>
              <Text style={styles.cardInfo}>Expiry Date{'\n'}{item.expiry}</Text>
              <Text style={styles.cardInfo}>Card Holder name{'\n'}{item.name}</Text>
            </View>
          </View>
        )}
      />
      {/* Other Payment Methods */}
      <View style={styles.paymentContainer}>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Bank Transfer</Text>
          <Image source={require('../assets/arrow.png')} style={styles.paymentIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Paypal</Text>
          <Image source={require('../assets/arrow.png')} style={styles.paymentIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 16,
    marginBottom: 20,
    color: '#888',
  },
  greetingBold: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22
  },
  balanceCard: {
    backgroundColor: '#E5FFF3',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
  },
  balanceLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    color: '#555',
  },
  totalBalance: {
    fontSize: 14,
    color: '#888',
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  actionBtn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addCardText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: Dimensions.get('window').width * 0.7,
    height: 100,
    justifyContent: 'center',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 12,
    letterSpacing: 2,
  },
  cardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfo: {
    color: '#fff',
    fontSize: 12,
  },
  paymentContainer: { marginTop: 16 },
  paymentOption: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  paymentOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  paymentIcon: { 
    width: 24, 
    height: 24, 
    marginLeft: 8 
  },
  confirmBtn: {
    backgroundColor: '#A259FF',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  confirmText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
