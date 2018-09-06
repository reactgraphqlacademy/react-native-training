import React from 'react'
import { StyleSheet, View } from 'react-native'
import { setUser } from 'react-native-authentication-helpers'
import { Button, PRIVATE_SCREEN } from '../../App'

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
