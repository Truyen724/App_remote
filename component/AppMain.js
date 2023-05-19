import 'react-native-gesture-handler';
import React from 'react';

import LoginScreen from './Login';
import SignupScreen from './Signup';
import MainScreen  from './Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function AppMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown : false}} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default AppMain;