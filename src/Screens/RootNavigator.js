import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { PublicNavigator } from "./PublicNavigator";
import { PrivateNavigator } from "./PrivateNavigator";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

/*
 Exercise 2
- Create a Switch Navigator called `MainNavigator` with a PRIVATE and a PUBLIC views
- This is the initial navigator for the App, so you need to wrap
  the entry point of your app with `createAppContainer`. You can check the documentation here https://reactnavigation.org/docs/en/app-containers.html
*/

const MainNavigator = createSwitchNavigator({
  [PUBLIC_SCREEN]: PublicNavigator,
  [PRIVATE_SCREEN]: PrivateNavigator
});

// Exercise 1.
export const RootNavigator = createAppContainer(PublicNavigator); // createAppContainer(MainNavigator);
