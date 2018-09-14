import React from "react";
import { createSwitchNavigator } from "react-navigation";
import LoginScreen from "../Auth/Screens/LoginScreen";
import PrivateNavigator from "./PrivateNavigator";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

const Navigator = createSwitchNavigator(
  {
    [PUBLIC_SCREEN]: LoginScreen,
    [PRIVATE_SCREEN]: PrivateNavigator
  },
  {
    initialRouteName: PUBLIC_SCREEN,
    // initialRouteName: PRIVATE_SCREEN,
    headerMode: "none"
  }
);

export default Navigator;
