import React from 'react'
import { createStackNavigator } from 'react-navigation'
import TimelineScreen from '../Screens/TimelineScreen';
import TweetDetailScreen from '../Screens/TweetDetailScreen'
import ProfileScreen from '../Screens/ProfileScreen';
import { Header } from '../../App'

export const MAIN_TIMELINE_SCREEN = 'MAIN_TIMELINE_SCREEN'
export const TIMELINE_FEED_SCREEN = 'TIMELINE_FEED_SCREEN'
export const TWEET_DETAIL_SCREEN = 'TWEET_DETAIL_SCREEN'
export const PROFILE_SCREEN = "PROFILE_SCREEN"
export const OTHER_USER_PROFILE = "OTHER_USER_PROFILE"


const TimelineNavigator = createStackNavigator({
  [TIMELINE_FEED_SCREEN]: TimelineScreen,
  [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
  [OTHER_USER_PROFILE]: {
    screen: ProfileScreen,
  }
}, {
  initialRouteName: TIMELINE_FEED_SCREEN,
})

export default TimelineNavigator;



