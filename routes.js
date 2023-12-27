import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homescreen';
import NewScreen from './src/screens/newscreen';
import App from './App';
import JobSearch from './components/search/[id]';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="app">
      <Stack.Screen name="app" component={App} />
      <Stack.Screen name="search" component={JobSearch} />
    </Stack.Navigator>
  );
};

export default StackNav;
