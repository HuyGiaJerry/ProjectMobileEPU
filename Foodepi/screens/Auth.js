import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import ButtonGoBack from '../components/GoBack';

const { width } = Dimensions.get("window");

export default function AuthScreen({ route }) {
  const { confirmation, phoneNumber } = route.params;
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigation = useNavigation();

  // Bộ đếm thời gian
  // useEffect(() => {
  //   const countdown = setInterval(() => {
  //     setTimer((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(countdown);
  //         setCanResend(true);
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(countdown);
  // }, []);

  // Xác thực OTP
  // const handleVerifyOTP = async () => {
  //   try {
  //     await confirmation.confirm(otp);
  //     alert('OTP verified successfully!');
  //     navigation.navigate('Home'); // Điều hướng đến màn hình chính
  //   } catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     alert('Invalid OTP. Please try again.');
  //   }
  // };

  // Gửi lại OTP
  // const handleResendOTP = async () => {
  //   try {
  //     const newConfirmation = await auth().signInWithPhoneNumber(phoneNumber, true); // true để buộc gửi lại OTP
  //     confirmation = newConfirmation;
  //     setTimer(60);
  //     setCanResend(false);
  //     alert('OTP resent successfully!');
  //   } catch (error) {
  //     console.error('Error resending OTP:', error);
  //     alert('Failed to resend OTP. Please try again.');
  //   }
  // };

  return (
    <View style={styles.container}>
        <ButtonGoBack/>
      <Text style={styles.label}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        placeholder="Enter the OTP"
        maxLength={6}
      />
      {/* <Text style={styles.timer}>Time remaining: {timer}s</Text> */}
      <TouchableOpacity
        style={styles.verifyButton}
        // onPress={handleVerifyOTP}
      >
        <Text style={styles.buttonText}>VERIFY OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.resendButton, { backgroundColor: canResend ? 'rgba(38, 161, 250, 1)' : '#ccc' }]}
        // onPress={handleResendOTP}
        // disabled={!canResend}
      >
        <Text style={styles.buttonText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    width: width * 0.7,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  timer: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  verifyButton: {
    width: width * 0.7,
    paddingVertical: 15,
    backgroundColor: 'rgba(38, 161, 250, 1)',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  resendButton: {
    width: width * 0.7,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
  },
});