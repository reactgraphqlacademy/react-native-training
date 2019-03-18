import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { PublicNavigator } from './PublicNavigator'
import { PrivateNavigator } from './PrivateNavigator'

export const PRIVATE_SCREEN = 'PRIVATE_SCREEN'
export const PUBLIC_SCREEN = 'PUBLIC_SCREEN'

/*
- create a Switch Navigator called `MainNavigator` with a PRIVATE and a PUBLIC views
- this navigator should not have a header (hint: `headerMode`)
- this is the initial navigator for the App, so you need to wrap
  the entry point of your app with `createAppContainer`
*/

const MainNavigator = "create a switch navigator here"

export const RootNavigator = "you should call a function here passing the `MainNavigator`"
