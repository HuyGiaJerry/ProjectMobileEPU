import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function AuthScreen({ route }) {
  const { phoneNumber } = route?.params || { phoneNumber: '+880 *******528' };
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(10);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigation = useNavigation();

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, idx) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[idx] = text;
      setOtp(newOtp);

      if (text && idx < 3) inputRefs[idx + 1].current.focus();
      if (!text && idx > 0) inputRefs[idx - 1].current.focus();

      // Nếu đã nhập đủ 4 số, chuyển sang Home
      if (newOtp.every(x => x.length === 1)) {
        navigation.navigate('App');
      }
    }
  };

  const handleResend = () => {
    setTimer(10);
    setOtp(['', '', '', '']);
    inputRefs[0].current.focus();
  };

  function maskPhone(phone) {
    if (!phone) return '';
    // Giữ đầu +84 hoặc 0, che phần giữa, giữ 3 số cuối
    const visibleStart = phone.startsWith('+') ? 3 : 1;
    const start = phone.slice(0, visibleStart);
    const end = phone.slice(-3);
    return start + ' ******' + end;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/otp-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Help us verify your login</Text>
      <Text style={styles.desc}>
        We have sent a verification code to the phone number registered in this account,please enter the code below :
      </Text>
      <Text style={styles.phone}>{maskPhone(phoneNumber)}</Text>
      <View style={styles.otpRow}>
        {otp.map((v, i) => (
          <TextInput
            key={i}
            ref={inputRefs[i]}
            style={[styles.otpInput, v === '' && i === otp.findIndex(x => x === '') ? styles.otpInputActive : null]}
            keyboardType="number-pad"
            maxLength={1}
            value={v}
            onChangeText={text => handleChange(text, i)}
            autoFocus={i === 0}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.resendBtn} disabled={timer > 0} onPress={handleResend}>
        <Text style={styles.resendText}>
          Send code again
        </Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>
        Try again in <Text style={{ fontWeight: 'bold' }}>{timer} seconds</Text>
      </Text>
      <Text style={styles.notReceive}>Not receiving a message ?</Text>
      <Text style={styles.callInstead}>Let us call you instead</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.08,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  desc: {
    color: '#222',
    fontSize: 15,
    marginBottom: 8,
  },
  phone: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    marginTop: 8,
  },
  otpInput: {
    width: width * 0.16,
    height: width * 0.16,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 12,
    fontSize: 28,
    textAlign: 'center',
    color: '#111',
    backgroundColor: '#fff',
  },
  otpInputActive: {
    borderColor: 'rgba(235, 82, 34, 1)',
  },
  resendBtn: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 18,
    marginTop: 2,
    alignItems: 'center',
  },
  resendText: {
    color: '#aaa',
    fontSize: 16,
  },
  timerText: {
    color: '#aaa',
    fontSize: 15,
    marginBottom: 8,
  },
  notReceive: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 6,
  },
  callInstead: {
    color: '#aaa',
    fontSize: 15,
  },
});
