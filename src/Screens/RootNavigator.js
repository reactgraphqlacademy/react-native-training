import { createSwitchNavigator, createAppContainer } from "react-navigation";
import PublicNavigator from "./PublicNavigator";
import PrivateNavigator from "./PrivateNavigator";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

const MainNavigator = createSwitchNavigator(
  {
    [PUBLIC_SCREEN]: PublicNavigator,
    [PRIVATE_SCREEN]: PrivateNavigator
  },
  {
    initialRouteName: PUBLIC_SCREEN,
    headerMode: "none"
  }
);

export default createAppContainer(MainNavigator);
