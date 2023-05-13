import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../HomeView';
import { SearchView } from '../SearchView';
import { YourLibrary } from '../YourLibrary';
import { Icon } from '../components/icon';
import { styles } from './BottomTabBarNavigation.styles';



const Tab = createBottomTabNavigator();
export const BottomTabBarNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E60000',
        tabBarInactiveTintColor: '#1C1C1C',
        tabBarIconStyle: { display: 'flex' },
      }}
    >
      <Tab.Group>
        <Tab.Screen name="Home" component={HomeView}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Nunito-Regular',
            },
            tabBarIcon: ({ color }) => (
              <Icon name='home' size='medium' color={color} />
            )
          }}

        />
        <Tab.Screen name="Search" component={SearchView}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Nunito-Regular',
            },
            tabBarIcon: ({ color }) => (
              <Icon name='search' size='medium' color={color} />
            )
          }} />
        <Tab.Screen name="Your Library" component={YourLibrary}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Nunito-Regular',
            },
            tabBarIcon: ({ color }) => (
              <Icon name='list' size='medium' color={color} />
            )
          }}
          />
      </Tab.Group>

    </Tab.Navigator>

  )
}



