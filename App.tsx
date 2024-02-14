import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username.length > 0 && password.length > 0) {
      Alert.alert(`Signed in with username: ${username}`);
    } else {
      Alert.alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.normalText}>please input your username and password 🌵</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan username anda"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'left',
    alignItems: 'left',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 49,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 20,
    marginTop: 20, 
  },
  normalText: {
    fontSize: 15, // Ukuran teks menjadi 10
    marginBottom: 10,
    color: 'black', // Warna teks menjadi hitam
    fontFamily: 'Arial', // Mengubah jenis font
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    color: 'black', 
    marginBottom: 10,
    fontWeight: 'bold', 
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFA500', // Ubah warna menjadi orange tua
    paddingVertical: 10,
    paddingHorizontal: 145,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});

export default WelcomePage;
