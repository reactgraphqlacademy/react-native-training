import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Font, Icon } from 'expo'
import {
  clearUser,
  withUser,
  loadUserAsync
} from 'react-native-authentication-helpers'
import { MAIN_SCREEN, AUTH_SCREEN } from '../App'

export default class LoadingScreen extends React.Component {
  async componentDidMount() {
    //clearUser()
    await this.loadAssetsAsync()
    await this.loadUserAsync()
  }

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      ...Icon.Ionicons.font
      //any custom font here
      //Wellfleet: require('../assets/Wellfleet-Regular.ttf')
    })
  }

  loadUserAsync = async () => {
    let user

    try {
      user = await loadUserAsync()
    } catch (e) {}

    if (user) {
      //send the User to the main screen
      this.props.navigation.navigate(MAIN_SCREEN)
    } else {
      //send the User to the login page
      this.props.navigation.navigate(AUTH_SCREEN)
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }
}
