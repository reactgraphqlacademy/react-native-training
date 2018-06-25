import { KeepAwake, registerRootComponent } from 'expo'
import Root from './App/Root'

if (__DEV__) {
  KeepAwake.activate()
}

registerRootComponent(Root)
