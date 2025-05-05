import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import Icon from 'react-native-vector-icons/Feather';
import ButtonGoBack from '../components/GoBack';

const { width } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
  const { theme } = useTheme();
  const { cart, setCart } = useCart();

  // Tăng/giảm số lượng
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Xử lý nhập số lượng
  const handleQtyInput = (id, text) => {
    if (/^\d*$/.test(text)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, qty: text } : item
        )
      );
    }
  };

  // Xử lý khi input mất focus để xác thực số lượng
  const handleQtyBlur = (id, text) => {
    let num = parseInt(text, 10);
    if (isNaN(num) || num < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, qty: num } : item
        )
      );
    }
  };

  // Tính tổng
  const orderAmount = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const tax = 3;
  const discount = 0;
  const total = orderAmount + tax - discount;

  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: width * 0.05,
      paddingTop: 30,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.text,
      flex: 1,
      textAlign: 'center',
    },
    cartItem: {
      backgroundColor: theme.card || '#fafafa',
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 18,
      padding: 12,
      shadowColor: 'rgba(235, 82, 34, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 2,
    },
    itemImg: {
      width: width * 0.18,
      height: width * 0.18,
      borderRadius: width * 0.045,
      marginRight: width * 0.04,
    },
    itemInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.text,
    },
    itemDesc: {
      color: theme.subText || '#888',
      fontSize: 13,
      marginBottom: 4,
    },
    itemPrice: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 15,
      marginBottom: 2,
    },
    qtyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6,
    },
    qtyBtn: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: 'rgba(254, 85, 42, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 8,
    },
    qtyText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.text,
      minWidth: 22,
      textAlign: 'center',
    },
    summary: {
      marginTop: 10,
      marginBottom: 18,
      backgroundColor: theme.card || '#fafafa',
      borderRadius: 16,
      padding: 16,
      shadowColor: 'rgba(235, 82, 34, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 1,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    summaryLabel: {
      color: theme.subText || '#888',
      fontSize: 15,
    },
    summaryValue: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 15,
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 10,
    },
    totalLabel: {
      fontWeight: 'bold',
      fontSize: 17,
      color: theme.text,
    },
    totalValue: {
      fontWeight: 'bold',
      fontSize: 17,
      color: 'rgba(254, 85, 42, 1)',
    },
    checkoutBtn: {
      backgroundColor: '#A259FF',
      borderRadius: 14,
      paddingVertical: 16,
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    checkoutText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    itemQtyBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    qtyInput: {
      width: 40,
      height: 32,
      borderWidth: 1,
      borderColor: 'rgba(254, 85, 42, 0.2)',
      borderRadius: 8,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.text,
      backgroundColor: theme.background,
      marginHorizontal: 8,
      padding: 0,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonGoBack />
        <Text style={styles.headerText}>Giỏ hàng</Text>
        <View style={{ width: 32 }} />
      </View>
      <Text style={{ color: theme.text, fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        {cart.length} Món
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.map((item) => (
          <View style={styles.cartItem} key={item.id}>
            <Image
              source={{ uri: item.image || 'https://via.placeholder.com/150' }}
              style={styles.itemImg}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDesc}>{item.desc || 'Không có mô tả'}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <View style={styles.itemQtyBox}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQty(item.id, -1)}>
                  <Icon name="minus" size={18} color="rgba(254, 85, 42, 1)" />
                </TouchableOpacity>
                <TextInput
                  style={styles.qtyInput}
                  value={item.qty === undefined ? '' : item.qty.toString()}
                  keyboardType="number-pad"
                  onChangeText={(text) => handleQtyInput(item.id, text)}
                  onBlur={() => handleQtyBlur(item.id, item.qty)}
                />
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQty(item.id, 1)}>
                  <Icon name="plus" size={18} color="rgba(254, 85, 42, 1)" />
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tổng đơn hàng</Text>
            <Text style={styles.summaryValue}>${orderAmount.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Thuế</Text>
            <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Giảm giá</Text>
            <Text style={styles.summaryValue}>${discount.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tổng cộng</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('Payment', { total })}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}