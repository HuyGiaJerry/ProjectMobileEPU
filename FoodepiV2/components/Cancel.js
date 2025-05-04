import React from "react";
import { TouchableOpacity, StyleSheet,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Iconicons, Ionicons } from '@expo/vector-icons';

const ButtonCancel = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name="close-circle-outline" style={styles.icon}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    icon: {
        size: 30,
        color: 'rgba(209, 7, 39, 1)'
    }
})

export default ButtonCancel;