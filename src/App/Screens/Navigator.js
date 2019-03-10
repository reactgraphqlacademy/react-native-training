import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AuthNavigator } from "../../Auth";
import PrivateNavigator from "./PrivateNavigator";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

const Navigator = createSwitchNavigator(
  {
    [PUBLIC_SCREEN]: AuthNavigator,
    [PRIVATE_SCREEN]: PrivateNavigator
  },
  {
    initialRouteName: PUBLIC_SCREEN,
    headerMode: "none"
  }
);

export default createAppContainer(Navigator);
