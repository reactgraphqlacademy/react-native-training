import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import LoadingScreen from '../Loading'
import HomeScreen from '../Home'
import AuthScreen from '../Auth'

export const LOADING_SCREEN = 'LOADING_SCREEN'
export const HOME_SCREEN = 'HOME_SCREEN'
export const MAIN_SCREEN = 'MAIN_SCREEN'
export const AUTH_SCREEN = 'AUTH_SCREEN'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow'
  }
}

const MainNavigator = createStackNavigator({
  [HOME_SCREEN]: HomeScreen
})

const Navigator = createSwitchNavigator(
  {
    [LOADING_SCREEN]: {
      screen: LoadingScreen
    },
    [MAIN_SCREEN]: MainNavigator,
    [AUTH_SCREEN]: AuthScreen
  },
  {
    initialRouteName: LOADING_SCREEN
  }
)

//here is wher you usually add all or some of your providers
const Root = () => (
  <PaperProvider theme={theme}>
    <Navigator />
  </PaperProvider>
)

export default Root
