import React from 'react';
import MyTabs from '../screens/MyTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/Login';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
