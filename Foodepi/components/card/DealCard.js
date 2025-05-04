import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DealCard = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 120,
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
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

export default DealCard;