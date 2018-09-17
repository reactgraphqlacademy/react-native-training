import { createStackNavigator } from "react-navigation";

import LoginScreen from "../Screens/LoginScreen";
import TOCScreen from "../Screens/TOCScreen";

export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const TOC_SCREEN = "TOC_SCREEN";

const AuthNavigator = createStackNavigator(
  {
    [LOGIN_SCREEN]: LoginScreen,
    [TOC_SCREEN]: TOCScreen
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: "none",
    mode: "modal"
  }
);

export default AuthNavigator;
