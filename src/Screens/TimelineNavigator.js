import { createStackNavigator } from 'react-navigation'
import { TimelineScreen } from './TimelineScreen'
import { TweetDetailScreen } from './TweetDetailScreen'
import { ProfileScreen } from './ProfileScreen'
import { Colors } from '../config/utils'

export const MAIN_TIMELINE_SCREEN = 'MAIN_TIMELINE_SCREEN'
export const TIMELINE_FEED_SCREEN = 'TIMELINE_FEED_SCREEN'
export const TWEET_DETAIL_SCREEN = 'TWEET_DETAIL_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'
export const OTHER_USER_PROFILE = 'OTHER_USER_PROFILE'

export const TimelineNavigator = createStackNavigator(
  {
    [TIMELINE_FEED_SCREEN]: TimelineScreen,
    [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
    [OTHER_USER_PROFILE]: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: TIMELINE_FEED_SCREEN,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brand.primary,
      },
      headerTintColor: '#fff',
    },
  }
)
