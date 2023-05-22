import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarNavigation } from '../BottomTabBarNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../Context-Store/Context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.styles';



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
      <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <BottomTabBarNavigation/>
      </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>


  )
}
