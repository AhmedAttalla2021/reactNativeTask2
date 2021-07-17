import React from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Login from '../components/Login';
import Home from '../components/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer initialRouteName={'Login'}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerTitle: 'Login screen'}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
