import React from 'react'
import { Provider as PaperProvider, Button } from 'react-native-paper'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Loading from './screens/LoadingScreen'
import Home from './screens/HomeScreen'
import Auth from './screens/AuthScreen'
import Profile from './screens/ProfileScreen'

export const LOADING_SCREEN = 'LOADING_SCREEN'
export const MAIN_SCREEN = 'MAIN_SCREEN'
export const AUTH_SCREEN = 'AUTH_SCREEN'
export const HOME_SCREEN = 'HOME_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'

const MainNavigator = createStackNavigator(
  {
    [HOME_SCREEN]: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <Button
            onPress={() => {
              navigation.navigate(AUTH_SCREEN)
            }}
          >
            SIGN OUT
          </Button>
        )
      })
    },
    [PROFILE_SCREEN]: Profile
  },
  {}
)

const Navigator = createSwitchNavigator(
  {
    [LOADING_SCREEN]: Loading,
    [MAIN_SCREEN]: MainNavigator,
    [AUTH_SCREEN]: Auth
  },
  {
    initialRouteName: LOADING_SCREEN,
    headerMode: 'none'
  }
)

//here is wher you usually add all or some of your providers
const App = () => (
  <PaperProvider>
    <Navigator />
  </PaperProvider>
)

export default App
