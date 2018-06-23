import { KeepAwake, registerRootComponent } from 'expo'
import App from './App/App'

if (__DEV__) {
  KeepAwake.activate()
}

registerRootComponent(App)
