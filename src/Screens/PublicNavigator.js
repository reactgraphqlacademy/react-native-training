import { createStackNavigator } from 'react-navigation'

import { LoginScreen } from './LoginScreen'
import { TOCScreen } from './TOCScreen'

export const LOGIN_SCREEN = 'LOGIN_SCREEN'
export const TOC_SCREEN = 'TOC_SCREEN'

export const PublicNavigator = createStackNavigator(
  {
    [LOGIN_SCREEN]: LoginScreen,
    [TOC_SCREEN]: TOCScreen,
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: 'none',
    mode: 'modal',
  }
)
