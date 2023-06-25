import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../HomeView';
import { RecentView } from '../RecentView';
import { YourLibrary } from '../YourLibrary';
import { Icon } from '../components/icon';
import { ThemeContext } from '../../Context-Store/Context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlayView } from '../components/PlayView';



const stack = createNativeStackNavigator();
export const MainStack = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === 'dark' ? '#13131A' : '#EBEBFO';
  const activeColor = theme === 'dark' ? '#f5f5f5' : '#E60000'
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: activeColor,

        },
        headerTintColor: activeColor,
      }}
    >
      <stack.Screen name='Home' component={BottomTabBarNavigation} options={{ headerShown: false }} />
      <stack.Screen name='PlayView' component={PlayView} />
    </stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
export const BottomTabBarNavigation = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === 'dark' ? '#13131A' : '#EBEBFO'
  const fontName = 'Nunito-Regular'
  const activeColor = theme === 'dark' ? '#F9F4F4' : '#E60000'
  const inActiveColor = theme === 'dark' ? '#707070' : '#1C1C1C'
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inActiveColor,
        tabBarIconStyle: { display: 'flex' },
        tabBarStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: activeColor
        },
        headerStyle: {
          backgroundColor: backgroundColor,
        },

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



