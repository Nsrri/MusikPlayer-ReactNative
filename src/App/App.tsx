import React from 'react';
import { AppProps } from './App.interface';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarNavigation } from '../BottomTabBarNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../HomeView';
import { SearchView } from '../SearchView';
import { YourLibrary } from '../YourLibrary';
import TabIcon from 'react-native-vector-icons/FontAwesome'


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
export const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTabBarNavigation />
    </NavigationContainer>

  )
}
