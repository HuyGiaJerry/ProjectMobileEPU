import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import ButtonGoBack from "../components/GoBack"; // Import nút GoBack

const ShopByCate = ({ route }) => {
    const { categoryId, categoryName, categoryImage } = route.params; // Nhận dữ liệu từ HomeScreen
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultImage = "https://res.cloudinary.com/dvxny7v0f/image/upload/v1746430501/all-shop_fjlh7d.png";

    useEffect(() => {
        // Gọi API để lấy dữ liệu shop theo categoryId
        fetch(`https://681832515a4b07b9d1ce2efa.mockapi.io/shop-by-cate?category-shopId=${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                setShops(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching shops:", error);
                setLoading(false);
            });
    }, [categoryId]);

    const renderShop = ({ item }) => (
        <View style={styles.shopCard}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: `https://res.cloudinary.com/dvxny7v0f/image/upload/v1746420784/${item.avatar}` }} style={styles.shopImage} />
                {item.discount && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{item.discount}%</Text>
                    </View>
                )}
            </View>
            <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{item.name}</Text>
                <Text style={styles.shopDetails}>
                    ⭐ {item.rating} ({item.review} reviews) • {item.away} m away
                </Text>
                <Text style={styles.shopDelivery}>Free ship</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Nút Back */}
            <View style={styles.header}>
                <ButtonGoBack />
            </View>

            {/* Nội dung */}
            <Image source={{ uri: categoryImage || defaultImage }} style={styles.headerImage} />
            <Text style={styles.title}>{categoryName}</Text>
            <Text style={styles.subtitle}>{shops.length} restaurants</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={shops}
                    keyExtractor={(item) => item.id}
                    renderItem={renderShop}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        position: "absolute",
        top: 40,
        left: 10,
        zIndex: 10,
    },
    headerImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginBottom: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    shopCard: {
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    imageContainer: {
        position: "relative",
    },
    shopImage: {
        width: 100,
        height: 100,
    },
    discountBadge: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "red",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    discountText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    shopInfo: {
        flex: 1,
        padding: 10,
    },
    shopName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    shopDetails: {
        fontSize: 14,
        color: "gray",
        marginVertical: 5,
    },
    shopDelivery: {
        fontSize: 14,
        color: "green",
        fontWeight: "bold",
    },
});

export default ShopByCate;