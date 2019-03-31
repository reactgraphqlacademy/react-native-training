import { createStackNavigator } from "react-navigation";
import { Colors } from "../config/utils";
import { TimelineScreen } from "./TimelineScreen";
import { TweetDetailScreen } from "./TweetDetailScreen";
import { ProfileScreen } from "./ProfileScreen";

export const MAIN_TIMELINE_SCREEN = "MAIN_TIMELINE_SCREEN";
export const TIMELINE_FEED_SCREEN = "TIMELINE_FEED_SCREEN";
export const TWEET_DETAIL_SCREEN = "TWEET_DETAIL_SCREEN";
export const PROFILE_SCREEN = "PROFILE_SCREEN";
export const USER_PROFILE = "USER_PROFILE";

export const TimelineNavigator = createStackNavigator(
  {
    [TIMELINE_FEED_SCREEN]: TimelineScreen,
    [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
    [USER_PROFILE]: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brand.primary
      },
      headerTintColor: Colors.light
    }
  }
);
