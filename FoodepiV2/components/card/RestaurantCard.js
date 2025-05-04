import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'; // Adjust the import path as necessary
const RestaurantCard = ({ image, discount, title, price, discountPrice, rating, reviews, distance, onPress }) => {
    const { theme } = useTheme(); // Get the current theme from context
    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.background }]} onPress={onPress}>
            {/* Image Section */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                {discount && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{discount}</Text>
                    </View>
                )}
            </View>
            {/* Info Section */}
            <View style={styles.infoContainer}>
                <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>{title}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.discountPrice}>${discountPrice}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={14} color="orange" />
                        <Text style={styles.rating}>{rating}</Text>
                        <Text style={styles.reviews}>({reviews})</Text>
                    </View>
                    <Text style={styles.distance}>{distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        borderRadius: 10,
        marginRight: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
        marginRight: 5,
    },
    discountPrice: {
        fontSize: 12,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 12,
        marginLeft: 3,
        color: 'black',
    },
    reviews: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 3,
    },
    distance: {
        fontSize: 12,
        color: 'gray',
    },
});

export default RestaurantCard;