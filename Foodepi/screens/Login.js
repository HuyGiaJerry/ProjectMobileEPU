import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';

const { height, width } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(null);

  const handlePhoneChange = (text) => {
    setPhoneNumber(text);
    const phoneRegex = /^(03|05|07|08|09)[0-9]{8}$/;
    !phoneRegex.test(text) ? setError("Invalid phone number") : setError("");
  };
  // const handleSendOTP = () => {
  //   navigation.navigate("Auth", phoneNumber);
  // };
  const handleSendOTP = async () => {
    try {
      // Thêm mã quốc gia +84 nếu chưa có
      const formattedPhoneNumber = phoneNumber.startsWith('+84')
        ? phoneNumber
        : `+84${phoneNumber.slice(1)}`;

      // Gửi OTP bằng Firebase Authentication
      const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
      setConfirm(confirmation);

      // Điều hướng đến màn hình nhập OTP (Auth)
      navigation.navigate("Auth", { 
        confirmation, 
        phoneNumber: formattedPhoneNumber 
      });
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Failed to send OTP. Please try again.');
    }
  };

  const isDisable = !!error || !phoneNumber;
  const bgColor = isDisable ? '#ccc' : 'rgba(38, 161, 250, 1)';

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Foodepi.</Text>
      <Text style={styles.subText}>
        Please Enter your Mobile Number to{'\n'}Sign In/Sign Up
      </Text>
      <View style={styles.phoneContainer}>
        <Text style={{ left: 5 }}>+84</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter phone your number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          maxLength={11}
        />
      </View>
      {/* Display error message */}
      {error ? <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text> : null}
      <TouchableOpacity
        style={[styles.continue, { backgroundColor: bgColor }]}
        disabled={isDisable}
        onPress={handleSendOTP}
      >
        <Text style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 1)' }}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height * 0.25,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  subText: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  phoneContainer: {
    flexDirection: "row",
    width: width * 0.7,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  phoneInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
  },
  continue: {
    width: width * 0.7,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'rgba(38, 161, 250, 1)',
    borderRadius: 10
  }
});

export default LoginScreen;