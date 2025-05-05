import React, { useRef, useState, useEffect } from 'react';
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

  // Countdown timer
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Trigger verification when OTP is fully entered
  useEffect(() => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      console.log('All OTP digits entered:', enteredOtp);
      verifyOtpAndLogin();
    }
  }, [otp]);

  const handleChange = (text, idx) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[idx] = text;
      setOtp(newOtp);

      console.log('Updated OTP:', newOtp.join(''));

      if (text && idx < 3) inputRefs[idx + 1].current.focus();
      if (!text && idx > 0) inputRefs[idx - 1].current.focus();
    }
  };

  const handleResend = () => {
    setTimer(10);
    setOtp(['', '', '', '']);
    inputRefs[0].current.focus();
  };

  const verifyOtpAndLogin = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 4) {
      alert('Vui lòng nhập mã OTP 4 chữ số hợp lệ.');
      return;
    }

    try {
      // Kiểm tra người dùng hiện có
      console.log('Fetching user with phone:', phoneNumber);
      const res = await fetch(`https://681829955a4b07b9d1ce1539.mockapi.io/User?phone=${phoneNumber}`);
      console.log('GET Response Status:', res.status);
      const users = await res.json();
      console.log('Fetched users:', users);

      let user;
      if (Array.isArray(users) && users.length > 0) {
        user = users[0];
        console.log('Found user:', user);
      } else {
        // Tạo người dùng mới
        console.log('No users found, creating new user...');
        const createRes = await fetch(`https://681829955a4b07b9d1ce1539.mockapi.io/User`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: phoneNumber,
            firstname: 'New',
            lastName: 'User',
            email: '',
            city: '',
            avatar: 'https://i.pravatar.cc/150?u=' + phoneNumber,
          }),
        });
        console.log('POST Response Status:', createRes.status);
        if (!createRes.ok) {
          console.error('POST Error:', await createRes.text());
          throw new Error('Failed to create user');
        }
        user = await createRes.json();
        console.log('Created user:', user);
      }
      // 📝 Store User ID
      // await AsyncStorage.setItem('userId', user.id);
      navigation.navigate('App', { user });
    } catch (err) {
      console.error('Lỗi đăng nhập:', err);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  function maskPhone(phone) {
    if (!phone) return '';
    const visibleStart = phone.startsWith('+') ? 3 : 1;
    const start = phone.slice(0, visibleStart);
    const end = phone.slice(-3);
    return start + ' ******' + end;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/otp-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Giúp chúng tôi xác minh đăng nhập của bạn</Text>
      <Text style={styles.desc}>
        Chúng tôi đã gửi mã xác minh đến số điện thoại đăng ký trong tài khoản này, vui lòng nhập mã dưới đây:
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
        <Text style={styles.resendText}>Gửi lại mã</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>
        Thử lại sau <Text style={{ fontWeight: 'bold' }}>{timer} giây</Text>
      </Text>
      <Text style={styles.notReceive}>Không nhận được tin nhắn?</Text>
      <Text style={styles.callInstead}>Hãy để chúng tôi gọi cho bạn</Text>
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