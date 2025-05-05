import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonGoBack = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="rgba(54, 56, 83, 1)" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(217, 239, 255, 1)",
        borderRadius: 10,
        padding: 8,
    },
});

export default ButtonGoBack;
