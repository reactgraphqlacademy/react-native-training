import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { setUser } from 'react-native-authentication-helpers'
import { PRIVATE_SCREEN } from '../..'

class Auth extends React.Component {
  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN)
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
