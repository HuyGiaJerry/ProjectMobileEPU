import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, subtitle, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    },
});

export default CategoryCard;