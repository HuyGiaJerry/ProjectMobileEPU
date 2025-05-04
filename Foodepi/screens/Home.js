import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from '../context/ThemeContext';
import CategoryCard from "../components/card/CategoryCard";
import DealCard from "../components/card/DealCard";

const HomeScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const handleMenuPress = () => {
        // Xử lý khi bấm vào nút menu
        console.log("Menu button pressed");
    };

    const categories = [
        { title: "Food delivery", subtitle: "Best deals on your favourites!", image: require('../assets/food.png') },
        { title: "Datamart", subtitle: "Grocery in 30 mins", image: require('../assets/datamart.png') },
        { title: "Shops", subtitle: "Grocery and more", image: require('../assets/shops.png') },
        { title: "Dine-in", subtitle: "Exclusive offers at port", image: require('../assets/dinein.png') },
        { title: "Pick-up", subtitle: "Takeaway in 15 mins", image: require('../assets/pickup.png') },
    ];

    const deals = [
        { title: "Sweet Donuts", image: require('../assets/donuts.png') },
        { title: "$2 off", image: require('../assets/discount.png') },
        { title: "Chiness", image: require('../assets/chinese.png') },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 40,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 20,
            width: '90%',
        },
        leftHeader: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            color: theme.text,
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        rightHeader: {
            flexDirection: 'row',
            alignItems: 'center',
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
            justifyContent: 'center',
            marginVertical: 10,
        },
        search: {
            flexDirection: 'row',
            backgroundColor: theme.background,
            width: '90%', // Chiếm 90% chiều ngang màn hình
            alignItems: 'center',
            borderRadius: 20,
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
        section: {
            marginVertical: 20,
            paddingHorizontal: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    {/* Left Header */}
                    <View style={styles.leftHeader}>
                        <TouchableOpacity onPress={handleMenuPress}>
                            <Ionicons name="menu-outline" size={32} color={theme.text} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Dhaka {'\n'}Pick-Up</Text>
                    </View>
                    {/* Right Header */}
                    <View style={styles.rightHeader}>
                        <TouchableOpacity onPress={toggleTheme}>
                            <Ionicons
                                name={theme.icon}
                                size={32}
                                color={theme.text}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cart}>
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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((item, index) => (
                            <CategoryCard
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                onPress={() => console.log(`${item.title} pressed`)}
                            />
                        ))}
                    </ScrollView>
                </View>
                {/* Deals */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Your daily deals</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {deals.map((item, index) => (
                            <DealCard
                                key={index}
                                title={item.title}
                                image={item.image}
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