import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../HomeView';
import { SearchView } from '../SearchView';
import { YourLibrary } from '../YourLibrary';



const Tab = createBottomTabNavigator();
export const BottomTabBarNavigation  = () => {
    return (
            <Tab.Navigator
             screenOptions={{
              tabBarActiveTintColor: '#E60000',
              tabBarInactiveTintColor: '#1C1C1C',
              tabBarIconStyle:{display: 'none'},
              }}
            
            
            >
              <Tab.Group>
              <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Search" component={SearchView} />
                <Tab.Screen name="Your Library" component={YourLibrary} />
              </Tab.Group>
             
            </Tab.Navigator>
   
    )
}



