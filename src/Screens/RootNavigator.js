import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { PublicNavigator } from './PublicNavigator'
import { PrivateNavigator } from './PrivateNavigator'

export const PRIVATE_SCREEN = 'PRIVATE_SCREEN'
export const PUBLIC_SCREEN = 'PUBLIC_SCREEN'

/*
- create a Switch Navigator called `MainNavigator` with a PRIVATE and a PUBLIC views
- this is the initial navigator for the App, so you need to wrap
  the entry point of your app with `createAppContainer`
*/

const MainNavigator = createSwitchNavigator({
  [PUBLIC_SCREEN]: PublicNavigator,
  [PRIVATE_SCREEN]: PrivateNavigator
})

export const RootNavigator = createAppContainer(MainNavigator)
