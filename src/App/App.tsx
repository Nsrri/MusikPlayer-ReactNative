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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused
          //       ? 'ios-information-circle'
          //       : 'ios-information-circle-outline';
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list' : 'ios-list-outline';
          //   }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeView} options={{
          tabBarIcon: () => (
            <TabIcon name="home" size={20}/>
          )
        }}
        />
        <Tab.Screen name="Your Library" component={YourLibrary} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
