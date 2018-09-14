import React from 'react'
import { StyleSheet, View } from 'react-native'
import { setUser } from 'react-native-authentication-helpers'
import { Constants } from 'expo'
import { Button, TextInput, Title, Screen, PRIVATE_SCREEN } from '../../App'

class Auth extends React.Component {
  state = {
    email: "",
    password: ''
  }

  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN)
  }

  handleFormChange = (key, text) => this.setState({[key]: text})

  render() {
    return (
      <Screen style={styles.container}>
        <Title>APP NAME</Title>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={(email) => this.handleFormChange("email", email)}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={(password) => this.handleFormChange("password", password)}
        />
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: Constants.statusBarHeight
  }
})

export default Auth
