import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function AuthScreen({ route }) {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const handleVerifyOTP = () => {
    alert("OTP verified successfully!");
    // Điều hướng về trang Home hoặc màn hình chính
    // navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP for +84{phoneNumber.slice(1)}</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        placeholder="Enter the OTP"
        maxLength={6}
      />
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>VERIFY OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    width: width * 0.7,
    fontSize: 16,
    color: "#000",
  },
  verifyButton: {
    width: width * 0.7,
    paddingVertical: 15,
    backgroundColor: "rgba(38, 161, 250, 1)",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
