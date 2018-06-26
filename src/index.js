import React from 'react'
import { Provider as PaperProvider, Button } from 'react-native-paper'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Home from './screens/HomeScreen'
import Auth from './screens/AuthScreen'
import Profile from './screens/ProfileScreen'

export const MAIN_SCREEN = 'MAIN_SCREEN'
export const AUTH_SCREEN = 'AUTH_SCREEN'
export const HOME_SCREEN = 'HOME_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'

/*
  1. Create a Stack Navigator (MainNavigator) with two screens: Home & Profile
  - the initialRouteName for this navigator should be the Home screen
  - ONLY the Home screen should display in the headerRight component a button si logout from the app.
    (use the navigationOptions attr to setup this button)
    - this button for this workshop only needs to navigate to the AUTH_SCREEN
*/

/*
  2. Create a Switch Navigator (Navigator)with two screens: Auth & the MainNavigator
  - the initialRouteName for this navigator should be the Auth screen
*/

/*
  3. the App component should return the entryPoint of our app.
  - the Navigator that we need to return is the Switch Navigator (Navigator)
  - Wrap `<Navigator/>` with `<PaperProvider>` in order to setup
    correctly the UI Library
*/
//here is wher you usually add all or some of your providers
const App = () => <Auth />

export default App
