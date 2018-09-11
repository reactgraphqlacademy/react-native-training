import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { Constants } from 'expo'

import { TIMELINE_SCREEN, TimelineScreen } from '../Timeline'
import { UserNavigator, USERS_SCREEN } from '../User'
import { Feather } from '@expo/vector-icons';

const PrivateNavigator = createBottomTabNavigator({
  [TIMELINE_SCREEN]: {
    screen: TimelineScreen,
    navigationOptions: {
      title: "Timeline",
      tabBarIcon: ({focused, tintColor}) => <Feather name="home" size={24} color={focused ? tintColor : "lightgrey" } />
    }
  },
  [USERS_SCREEN]: {
    screen: UserNavigator,
    navigationOptions: {
      title: "Users",
      tabBarIcon: ({focused, tintColor}) => <Feather name="user" size={24} color={focused ? tintColor : "lightgrey" } />
    }
  }
},
{
  initialRoute: TIMELINE_SCREEN,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: '#73CFEF',
    style: {
      backgroundColor: 'white',
    }
  }
})

export default PrivateNavigator;
