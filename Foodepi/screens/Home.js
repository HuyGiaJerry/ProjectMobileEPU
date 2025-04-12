import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from '../context/ThemeContext';
import ButtonGoBack from "../components/GoBack";
import ButtonCancel from "../components/Cancel";

const HomeScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 40,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
        },
        cart: {
            backgroundColor: 'rgba(254, 85, 42, 1)',
            borderRadius: 5,
            alignItems: 'center',
            width: 33,
            height: 33,
            marginLeft: 10
        },
        search: {
            flexDirection: 'row',
            backgroundColor: theme.background,
            width: '75%',
            alignItems: 'center',
            borderRadius: 10,
            borderColor: 'rgba(198, 200, 205, 1)',
            overflow: 'hidden',
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            margin: 10,
        },
        text: {
            flex: 1,
            fontSize: 14,
            color: theme.text
        }
    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={{ color: theme.text }}>Dhaka {'\n'}Pick-Up</Text>
                    <View style={{ flexDirection: 'row' }}>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.text}
                            placeholder="Search for restaurant,cuisiness...."
                            placeholderTextColor={'rgba(133, 137, 150, 1)'}
                            padding={10}
                            backgroundColor={'transparent'}
                            underlineColorAndroid={'transparent'}
                        />
                        <Ionicons name="search-outline" size={22} color={'rgba(133, 137, 150, 1)'} style={{ padding: 10 }} />
                    </View>
                    <TouchableOpacity style={{marginLeft: 10}}>
                        <Ionicons name="grid" size={35} color={'rgba(254, 85, 42, 1)'}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default HomeScreen;