import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation(); // Get navigation object

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Login");
        }, 2000); // Navigate to Login after 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [navigation]); 

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                source={require("../assets/image.png")} // Replace with your logo image
                style={{ width: 140, height: 140 }} // Adjust the size as needed
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30, fontWeight: "600" }}>Foodepi.</Text>
        </View>
    );
};

export default WelcomeScreen;
