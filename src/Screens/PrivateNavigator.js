import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import {
  // TimelineNavigator,
  MAIN_TIMELINE_SCREEN,
  PROFILE_SCREEN
} from "./TimelineNavigator";
import { ProfileScreen } from "./ProfileScreen";
import { Colors } from "../config/utils";
import { Feather } from "@expo/vector-icons";

import { TimelineScreen } from "./TimelineScreen";

const getTabBarIcon = (navigation, focused, tintColor) => {
  /*
  - Define getTabBarIcon and use if to assign Icons to both Views
  */
};

export const PrivateNavigator = createBottomTabNavigator(
  {
    [MAIN_TIMELINE_SCREEN]: {
      // Render your TimelineNavigator here instead of the `TimelineScreen`
      screen: TimelineScreen,
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
    }
  }
);
