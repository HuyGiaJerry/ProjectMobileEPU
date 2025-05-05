
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Modal, Button, Image } from "react-native";
import { useTheme } from '../context/ThemeContext';
import DealCard from "../components/card/DealCard";
import FoodCard from "../components/card/FoodCard";
import RestaurantCard from "../components/card/RestaurantCard";

import { deals, restaurantItems } from "../data/shopData";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme();
    const [isModalVisible, setModalVisible] = useState(false);
    const [category, setCategory] = useState([]);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useEffect(() => {
        axios.get("https://681832515a4b07b9d1ce2efa.mockapi.io/category")
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error("Error fetching food items:", error);
            });
    }, []);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
            marginBottom: 20,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        titleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            color: theme.text,
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        cart: {
            backgroundColor: 'rgba(254, 85, 42, 1)',
            borderRadius: 5,
            alignItems: 'center',
            width: 33,
            height: 33,
            marginLeft: 10,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
        },
        search: {
            flexDirection: 'row',
            backgroundColor: theme.background,
            width: '90%',
            alignItems: 'center',
            borderRadius: 10,
            borderColor: 'rgba(198, 200, 205, 1)',
            overflow: 'hidden',
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
        },
        text: {
            flex: 1,
            fontSize: 14,
            color: theme.text,
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            width: '80%',
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
        },
        closeButton: {
            marginTop: 10,
        },
        section: {
            marginVertical: 10,
            paddingHorizontal: 10,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: theme.text,
        },
        categoriesContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        leftColumn: {
            flex: 1,
            marginRight: 10,
        },
        rightColumn: {
            flex: 1,
            justifyContent: 'space-between',
        },
        categoryCard: {
            backgroundColor: theme.background2,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            alignItems: 'center',
            borderBlockColor: 'rgb(0, 0, 0)',
            borderWidth: 1,
        },
        categoryTitle: {
            fontSize: 22,
            fontWeight: '900',
            marginBottom: 5,
            textAlign: 'center',
            color: theme.text
        },
        categorySubtitle: {
            fontSize: 12,
            color: 'gray',
            textAlign: 'center',
            marginBottom: 10,
        },
        categoryImage: {
            width: 60,
            height: 60,
            resizeMode: 'contain',
        },
        largeCategoryImage: {
            width: 180,
            height: 180,
            resizeMode: 'contain',
        },
        foodCardContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    {/* Left Header */}
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="menu-outline" size={28} color={theme.text} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Dhaka {'\n'}Pick-Up</Text>
                    </View>
                    {/* Right Header */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={toggleTheme}>
                            <Ionicons
                                name={theme.icon}
                                size={32}
                                color={theme.text}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cart} onPress={() => navigation.navigate('Cart')}>
                            <Ionicons name="bag-handle-outline" size={20} color={'rgba(255, 255, 255, 1)'} style={{ padding: 5 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.text}
                            placeholder="Search for restaurant, cuisines..."
                            placeholderTextColor={'rgba(133, 137, 150, 1)'}
                            padding={10}
                            backgroundColor={'transparent'}
                            underlineColorAndroid={'transparent'}
                        />
                        <Ionicons name="search-outline" size={22} color={'rgba(133, 137, 150, 1)'} style={{ padding: 10 }} />
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <View style={styles.categoriesContainer}>
                        <View style={styles.leftColumn}>
                            <TouchableOpacity style={styles.categoryCard}>
                                <Text style={styles.categoryTitle}>Food delivery</Text>
                                <Text style={styles.categorySubtitle}>Best deals on your favourites!</Text>
                                <Image source={require('../assets/food.png')} style={styles.largeCategoryImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryCard}>
                                <Text style={styles.categoryTitle}>Dine-in</Text>
                                <Text style={styles.categorySubtitle}>Exclusive offers at port</Text>
                                <Image source={require('../assets/dinein.png')} style={styles.categoryImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightColumn}>
                            <TouchableOpacity style={styles.categoryCard}>
                                <Text style={styles.categoryTitle}>Datamart</Text>
                                <Text style={styles.categorySubtitle}>Grocery delivered in 30 mins!</Text>
                                <Image source={require('../assets/datamart.png')} style={styles.categoryImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryCard}>
                                <Text style={styles.categoryTitle}>Shops</Text>
                                <Text style={styles.categorySubtitle}>Grocery and more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryCard}>
                                <Text style={styles.categoryTitle}>Pick-up</Text>
                                <Text style={styles.categorySubtitle}>Takeaway in 15 mins</Text>
                                <Image source={require('../assets/pickup.png')} style={styles.categoryImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Deals */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Your daily deals</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {deals.map((deal, index) => (
                            <DealCard
                                key={index}
                                title={deal.title}
                                image1={deal.image1}
                                image2={deal.image2}
                                onPress={() => console.log(`${deal.title} pressed`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Chiness</Text>
                    <View style={styles.foodCardContainer}>
                        {category.map((item, index) => (
                            <FoodCard
                                key={index}
                                title={item.name}
                                image={{ uri: `https://res.cloudinary.com/dvxny7v0f/image/upload/v1746420784/${item.avatar}` }} // Sử dụng URL từ Cloudinary
                                onPress={
                                    () =>
                                        navigation.navigate("ShopByCate", {
                                            categoryId: item.id, // Truyền id của danh mục
                                            categoryName: item.name, // Truyền tên danh mục
                                            // categoryImage: `https://res.cloudinary.com/dvxny7v0f/image/upload/v1746420784/${item.avatar}`, // Truyền ảnh danh mục
                                        })

                                }
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Popular Restaurants</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {restaurantItems.map((item, index) => (
                            <RestaurantCard
                                key={index}
                                image={item.image}
                                discount={item.discount}
                                title={item.title}
                                price={item.price}
                                discountPrice={item.discountPrice}
                                rating={item.rating}
                                reviews={item.reviews}
                                distance={item.distance}
                                onPress={() => console.log(`${item.title} pressed`)}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;