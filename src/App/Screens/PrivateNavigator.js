import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { TimelineNavigator, ProfileScreen, MAIN_TIMELINE_SCREEN, PROFILE_SCREEN } from '../../Timeline'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../Utils'

const PrivateNavigator = createBottomTabNavigator({
  [MAIN_TIMELINE_SCREEN]: {
    screen: TimelineNavigator,
    // defaultNavigationOptions: () => ({
    //   title: "Timeline",
    //   tabBarIcon: ({focused, tintColor}) => <Feather name="home" size={24} color={focused ? tintColor : "lightgrey" } />
    // })
  },
  [PROFILE_SCREEN]: {
    screen: ProfileScreen,
    // defaultNavigationOptions: () => ({
    //   title: "Users",
    //   tabBarIcon: ({focused, tintColor}) => <Feather name="user" size={24} color={focused ? tintColor : "lightgrey" } />,
    //   tabBarOnPress: ({ navigation}) => navigation.navigate({ routeName: PROFILE_SCREEN, params: { userId: "778564054717726720", name: "LeanJS", noBack: true}})
    // })
  }
},
{
  initialRoute: MAIN_TIMELINE_SCREEN,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: 'red',
    }
  }
})

export default PrivateNavigator;
