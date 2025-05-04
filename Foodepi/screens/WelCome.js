import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const WelComeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Foodepi.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: width * 0.05,
    },
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        marginBottom: height * 0.02,
    },
    text: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default WelComeScreen;