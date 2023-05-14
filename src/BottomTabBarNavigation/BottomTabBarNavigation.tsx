import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../HomeView';
import { RecentView } from '../RecentView';
import { YourLibrary } from '../YourLibrary';
import { Icon } from '../components/icon';
import { ThemeContext } from '../../Context-Store/Context';

const Tab = createBottomTabNavigator();
export const BottomTabBarNavigation = () => {
  const {theme} = useContext(ThemeContext);
  const backgroundColors =  theme === 'dark' ? '#000000'  : '#ffffff'
  const fontName = 'Nunito-Regular'
  const activeColor = theme === 'dark' ?  	'#f5f5f5' : '#E60000'
  const inActiveColor = theme === 'dark' ? '#707070' : '#1C1C1C'
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inActiveColor ,
        tabBarIconStyle: { display: 'flex' },
        tabBarStyle: {
          backgroundColor:  backgroundColors,
        },
        headerTitleStyle: {
          color: activeColor
        },
        headerStyle: {
          backgroundColor:  backgroundColors
          
        }
      }}
    >
      <Tab.Group>
        <Tab.Screen name="Home" component={HomeView}
          options={{
            tabBarLabelStyle: {
              fontFamily: fontName,
            },
            tabBarIcon: ({ color }) => (
              <Icon name='home' size='medium' color={color} />
            )
            
          }}

        />
        <Tab.Screen name="Your Library" component={YourLibrary}
          options={{
            tabBarLabelStyle: {
              fontFamily: fontName,
            },
            tabBarIcon: ({ color }) => (
              <Icon name='list' size='medium' color={color} />
            )
          }}
          />
             <Tab.Screen name="Recent" component={RecentView}
          options={{
            tabBarLabelStyle: {
              fontFamily: fontName,
            },
            tabBarIcon: ({ color }) => (
              <Icon name='clock-o' size='medium' color={color} />
            )
          }} />
      </Tab.Group>

    </Tab.Navigator>

  )
}



