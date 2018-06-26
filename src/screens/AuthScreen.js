import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { setUser } from 'react-native-authentication-helpers'
import { MAIN_SCREEN } from '../index'

class Auth extends React.Component {
  static navigationOptions = ({ navigation }) => ({})
  login = () => {
    this.props.navigation.navigate(MAIN_SCREEN)
  }
  render() {
    return (
      <View style={styles.container}>
        <Button primary raised onPress={this.login}>
          login
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Auth
