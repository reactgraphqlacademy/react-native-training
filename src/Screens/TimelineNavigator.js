import { createStackNavigator } from "react-navigation";
import { Colors } from "../config/utils";
import { TimelineScreen } from "./TimelineScreen";

export const MAIN_TIMELINE_SCREEN = "MAIN_TIMELINE_SCREEN";
export const TIMELINE_FEED_SCREEN = "TIMELINE_FEED_SCREEN";
export const TWEET_DETAIL_SCREEN = "TWEET_DETAIL_SCREEN";
export const PROFILE_SCREEN = "PROFILE_SCREEN";
export const OTHER_USER_PROFILE = "OTHER_USER_PROFILE";

/*
- create a stach Navigator for the TimeLine tab.

```
  [TIMELINE_FEED_SCREEN]: TimelineScreen,
  [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
  [OTHER_USER_PROFILE]: ProfileScreen,

```
- the `header backgroundColor for this navigator should be `Colors.brand.primary`
  and the header content is white.
*/

export const TimelineNavigator = TimelineScreen;
