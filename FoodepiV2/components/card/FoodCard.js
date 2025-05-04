import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext'; // Adjust the import path as necessary
const FoodCard = ({ title, image, onPress }) => {
    const { theme } = useTheme(); // Get the current theme from context
    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.background1 }]} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <Text style={[styles.title, { color: theme.text1 }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '30%', // Adjust to fit 3 cards per row
        aspectRatio: 1, // Maintain square shape
        borderRadius: 10,
        margin: '1.5%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        position: 'relative',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default FoodCard;