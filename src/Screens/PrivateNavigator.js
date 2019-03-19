import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import {
  // TimelineNavigator,
  MAIN_TIMELINE_SCREEN,
  PROFILE_SCREEN,
  TimelineNavigator
} from "./TimelineNavigator";
import { ProfileScreen } from "./ProfileScreen";
import { Colors } from "../config/utils";
import { Feather } from "@expo/vector-icons";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const route = navigation.state.routeName
  let iconName;
  if (route === MAIN_TIMELINE_SCREEN) {
    iconName = 'home'
  } else if (route === PROFILE_SCREEN) {
    iconName = 'user'
  }

  return <Feather size={24} name={iconName} color={tintColor} />
};

export const PrivateNavigator = createBottomTabNavigator(
  {
    [MAIN_TIMELINE_SCREEN]: {
      // Render your TimelineNavigator here instead of the `TimelineScreen`
      screen: TimelineNavigator,
      navigationOptions: () => ({
        title: "Timeline"
      })
    },
    [PROFILE_SCREEN]: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: "Users",
        tabBarOnPress: ({ navigation }) =>
          navigation.navigate({
            routeName: PROFILE_SCREEN,
            params: {
              userId: "770259608669683712",
              name: "reactjsacademy",
              noBack: true
            }
          })
      })
    }
  },
  {
    // HINT: you should implement something here inside `defaultNavigationOptions`
    tabBarOptions: {
      activeTintColor: Colors.brand.primary,
      inactiveTintColor: Colors.lightgrey,
      showLabel: false
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    })
  }
);
