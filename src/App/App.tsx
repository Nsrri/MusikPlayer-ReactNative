import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarNavigation } from '../BottomTabBarNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '../../Context-Store/Context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlayView } from '../components/PlayView';
import { QueryClientProvider, QueryClient } from 'react-query';

export const App = () => {
  const stack = createNativeStackNavigator();
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
      <ThemeProvider>
        <stack.Navigator  >
          <stack.Screen name='Home' component={BottomTabBarNavigation} options={{ headerShown: false }}/>
          <stack.Screen name='PlayView' component={PlayView} 
        //   options={{
        //   title: 'Music List',
        //   headerStyle: {
        //     backgroundColor: 'black',
        //   },
        //   headerTintColor: 'white',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }} 
         />
        </stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
      </SafeAreaView>
      </QueryClientProvider>
  )
}
