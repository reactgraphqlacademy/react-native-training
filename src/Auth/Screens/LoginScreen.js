import React from 'react'
import { StyleSheet, View } from 'react-native'
import { setUser } from 'react-native-authentication-helpers'
import { Button, TextInput, Title, Screen, PRIVATE_SCREEN } from '../../App'

class Auth extends React.Component {
  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN)
  }
  render() {
    return (
      <Screen style={styles.container}>
        <Title>Auth Screen</Title>
        <View>
          <TextInput />
        </View>
        <Button primary raised onPress={this.login}>
          login
        </Button>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Auth
