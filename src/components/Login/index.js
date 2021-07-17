import React, {useState} from 'react';
import {styles} from './styles';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Login(props) {
  const navigation = props.navigation;
  const [text, setText] = useState(null);
  const [number, setPassword] = useState(null);
  const handleSubmit = () => {
    Alert.alert('successful');
  };
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/3.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 10,
          }}>
          sign up
        </Text>
        <Text
          style={{
            color: '#DDD',
            marginVertical: 30,
            fontSize: 16,
            textAlign: 'center',
          }}>
          Sign up with one of the following options
        </Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#DDDDDD',
              padding: 10,
              width: 100,
              borderRadius: 15,
            }}
            onPress={handleSubmit}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                borderRadius: 15,
                color: 'blue',
              }}>
              <Icon name="facebook-square" size={30} color="blue" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DDDDDD',
              padding: 10,
              width: 100,
              borderRadius: 15,
            }}
            onPress={handleSubmit}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                borderRadius: 15,
                color: 'red',
              }}>
              <Icon name="google" size={30} color="red" />
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.emailAndPasswordInput}
          placeholder="email"
          onChangeText={setText}
          keyboardType="email-address"
        />
        <View>
          <TextInput
            style={styles.emailAndPasswordInput}
            placeholder="password"
            onChangeText={setPassword}
            keyboardType="numeric"
            secureTextEntry={true}
          />
          <View style={{position: 'absolute', right: 15, top: 55}}>
            <Icon name="eye" size={30} color="white" />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#DDDDDD',
            paddingVertical: 20,
            marginVertical: 45,
            borderRadius: 15,
          }}
          onPress={navigateToHome}>
          <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
            login
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
          already have an account?
        </Text>
      </ImageBackground>
    </View>
  );
}
