import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { PublicNavigator } from "./PublicNavigator";
import { TimelineNavigator } from "./TimelineNavigator";
import { AnimationExample } from "./AnimationExample";

export const PRIVATE_SCREEN = "PRIVATE_SCREEN";
export const PUBLIC_SCREEN = "PUBLIC_SCREEN";

const MainNavigator = createSwitchNavigator({
  [PUBLIC_SCREEN]: PublicNavigator,
  [PRIVATE_SCREEN]: TimelineNavigator
});

export const RootNavigator = AnimationExample; // createAppContainer(MainNavigator);
