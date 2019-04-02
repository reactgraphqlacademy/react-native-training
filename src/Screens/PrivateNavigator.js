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
  /*
   you need here to check what route name is being passed in order to render the appropiate iconName.
  */

  return <Feather size={24} name={iconName} color={tintColor} />
};

// create me from scratch! GOOD LUCK :P
export const PrivateNavigator = TimelineNavigator
