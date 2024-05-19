import React from 'react';
import MyTabs from '../screens/MyTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen, {LoginScreen} from '../screens/Login';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
