import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { TimelineNavigator, ProfileScreen, MAIN_TIMELINE_SCREEN, PROFILE_SCREEN } from '../../Timeline'
import { UserNavigator, USERS_SCREEN } from '../../User'
import { Feather } from '@expo/vector-icons';

const PrivateNavigator = createBottomTabNavigator({
  [MAIN_TIMELINE_SCREEN]: {
    screen: TimelineNavigator,
    navigationOptions: {
      title: "Timeline",
      tabBarIcon: ({focused, tintColor}) => <Feather name="home" size={24} color={focused ? tintColor : "lightgrey" } />
    }
  },
  [PROFILE_SCREEN]: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Users",
      tabBarIcon: ({focused, tintColor}) => <Feather name="user" size={24} color={focused ? tintColor : "lightgrey" } />,
      tabBarOnPress: ({ navigation}) => navigation.navigate({ routeName: PROFILE_SCREEN, params: { userId: "778564054717726720", noBack: true}})
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
