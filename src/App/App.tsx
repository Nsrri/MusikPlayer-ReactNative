import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarNavigation } from '../BottomTabBarNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../Context-Store/Context';



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
    <ThemeProvider>
      <NavigationContainer>
        <BottomTabBarNavigation/>
      </NavigationContainer>
    </ThemeProvider>


  )
}
