import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarNavigation } from '../BottomTabBarNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../Context-Store/Context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlayView } from '../components/PlayView';
import { QueryClientProvider, QueryClient } from 'react-query';
import { MainStack } from '../BottomTabBarNavigation/BottomTabBarNavigation';

export const App = () => {
  const stack = createNativeStackNavigator();
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <ThemeProvider>
           <MainStack />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  )
}
