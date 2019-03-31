import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { PublicNavigator } from "./PublicNavigator";
import { PrivateNavigator } from "./PrivateNavigator";
import { LoginScreen } from "./LoginScreen";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

/*
EXERCISE PART 1 
- This is the initial navigator for the App, so you need to wrap
  the entry point of your app with `createAppContainer` using the PublicNavigator

EXERCISE PART 2 (HEADS UP! DON'T DO THIS UNTIL PART 2)
- create a Switch Navigator called `MainNavigator` with a PRIVATE and a PUBLIC views
- this navigator should not have a header (hint: `headerMode`)
*/

export const RootNavigator = LoginScreen;
