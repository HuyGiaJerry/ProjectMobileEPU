import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ButtonGoBack from '../components/GoBack';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
const ShopDetail = ({ route }) => {
  const { theme } = useTheme();
  const { shopId } = route.params;
  const { addToCart } = useCart(); // Truy cập addToCart từ context
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('https://6818be0f5a4b07b9d1d09f95.mockapi.io/dish-by-shop')
      .then((response) => response.json())
      .then((data) => {
        const filteredItems = data.filter(
          (item) => String(item['dish-by-shopId']) === String(shopId)
        );
        setMenuItems(filteredItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy danh sách món ăn:', error);
        setLoading(false);
      });
  }, [shopId]);

  const openModal = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={[styles.menuItem, { backgroundColor: theme.background2 }]}>
        <Image source={{ uri: item.avatar }} style={styles.menuItemImage} />
        <View style={styles.menuItemInfo}>
          <Text style={[styles.menuItemName, { color: theme.text }]}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <View style={styles.menuItemFooter}>
            <Text style={styles.menuItemPrice}>${item.price}</Text>
            {item.isPopular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>🔥 Phổ biến</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <ButtonGoBack />
      </View>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dvxny7v0f/image/upload/v1746457991/shopDetail_dr4xwf.png',
        }}
        style={styles.headerImage}
      />
      <View style={styles.restaurantInfo}>
        <Text style={[styles.restaurantName, { color: theme.text }]}>
          Nhà hàng #{shopId}
        </Text>
        <Text style={styles.restaurantDetails}>
          Khám phá những món ăn ngon nhất từ nhà hàng này
        </Text>
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
              <Image source={{ uri: selectedItem.avatar }} style={styles.modalImage} />
              <Text style={[styles.modalTitle, { color: theme.text }]}>
                {selectedItem.name}
              </Text>
              <Text style={styles.modalDescription}>{selectedItem.description}</Text>
              <Text style={styles.modalPrice}>Giá: ${selectedItem.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.quantityText, { color: theme.text }]}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Quay lại</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonAdd]}
                  onPress={() => {
                    const newItem = {
                      id: selectedItem.id,
                      name: selectedItem.name,
                      desc: selectedItem.description,
                      price: selectedItem.price,
                      image: selectedItem.avatar,
                      qty: quantity,
                    };
                    addToCart(newItem);
                    closeModal();
                  }}
                >
                  <Text style={styles.modalButtonText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  restaurantDetails: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  menuList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  menuItemInfo: {
    flex: 1,
    padding: 10,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItemDescription: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  menuItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  popularBadge: {
    backgroundColor: '#ffe4e1',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  popularText: {
    fontSize: 12,
    color: '#ff6347',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonAdd: {
    backgroundColor: '#ff6347',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShopDetail;