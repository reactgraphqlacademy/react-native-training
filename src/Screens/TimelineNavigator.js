import { createStackNavigator } from "react-navigation";
import { Colors } from "../config/utils";
import { TimelineScreen } from "./TimelineScreen";

export const MAIN_TIMELINE_SCREEN = "MAIN_TIMELINE_SCREEN";
export const TIMELINE_FEED_SCREEN = "TIMELINE_FEED_SCREEN";
export const TWEET_DETAIL_SCREEN = "TWEET_DETAIL_SCREEN";
export const PROFILE_SCREEN = "PROFILE_SCREEN";
export const USER_PROFILE = "USER_PROFILE";

/*
1. In `src/Screens/TimelineNavigator.js` create a stack Navigator
  (https://reactnavigation.org/docs/en/stack-navigator.html)
  for the TimeLine using the following screens:

```js
  [TIMELINE_FEED_SCREEN]: TimelineScreen,
  [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
  [USER_PROFILE]: ProfileScreen,

```

2. Let's style our Navigator! We need to pass an extra parameter
  to change the configuration as follows.
  2.1. The header backgroundColor for this navigator should be `Colors.brand.primary`.
  Hint use the `headerStyle` in `defaultNavigationOptions`
  (https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig)

  2.2. The headerTintColor (https://reactnavigation.org/docs/en/stack-navigator.html#headertintcolor)
  should be `Colors.light` (check the imports for the colors).
*/

export const TimelineNavigator = TimelineScreen;
