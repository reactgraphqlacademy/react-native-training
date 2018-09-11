import React from 'react'
import { createStackNavigator } from 'react-navigation'
import TimelineScreen from '../Screens/TimelineScreen';
import TweetDetailScreen from '../Screens/TweetDetailScreen'

export const MAIN_TIMELINE_SCREEN = 'MAIN_TIMELINE_SCREEN'
export const TIMELINE_FEED_SCREEN = 'TIMELINE_FEED_SCREEN'
export const TWEET_DETAIL_SCREEN = 'TWEET_DETAIL_SCREEN'



const TimelineNavigator = createStackNavigator({
  [TIMELINE_FEED_SCREEN]: TimelineScreen,
  [TWEET_DETAIL_SCREEN]: TweetDetailScreen
}, {
  initialRouteName: TIMELINE_FEED_SCREEN
})

export default TimelineNavigator;



