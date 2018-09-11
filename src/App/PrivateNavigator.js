import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { MAIN_TIMELINE_SCREEN, TimelineNavigator } from '../Timeline'
import { UserNavigator, USERS_SCREEN } from '../User'
import { Feather } from '@expo/vector-icons';

const PrivateNavigator = createBottomTabNavigator({
  [MAIN_TIMELINE_SCREEN]: {
    screen: TimelineNavigator,
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
  initialRoute: MAIN_TIMELINE_SCREEN,
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
