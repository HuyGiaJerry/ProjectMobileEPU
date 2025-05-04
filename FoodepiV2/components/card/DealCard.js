import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext'; // Adjust the import path as necessary

const DealCard = ({ title, image1, image2, onPress }) => {
    const { theme } = useTheme();
    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.background1 }]} onPress={onPress}>
            <Text style={[styles.title, { color: theme.text1 }]}>{title}</Text>
            <View style={styles.imageContainer}>
                <Image source={image1} style={styles.imageLeft} />
                <Image source={image2} style={styles.imageRight} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 160,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    imageLeft: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    imageRight: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 30,
    },
});

export default DealCard;