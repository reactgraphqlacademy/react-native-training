import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import {
  TimelineNavigator,
  MAIN_TIMELINE_SCREEN,
  PROFILE_SCREEN
} from "./TimelineNavigator";
import { ProfileScreen } from "./ProfileScreen";
import { Colors } from "../config/utils";
import { Feather } from "@expo/vector-icons";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Feather;
  let iconName;
  if (routeName === MAIN_TIMELINE_SCREEN) {
    iconName = `home`;
  } else if (routeName === PROFILE_SCREEN) {
    iconName = `user`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export const PrivateNavigator = createBottomTabNavigator(
  {
    [MAIN_TIMELINE_SCREEN]: {
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
    initialRoute: MAIN_TIMELINE_SCREEN,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: Colors.brand.primary,
      inactiveTintColor: Colors.lightgrey,
      showLabel: false
    }
  }
);
