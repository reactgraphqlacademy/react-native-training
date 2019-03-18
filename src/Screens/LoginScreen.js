import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Constants } from 'expo'
import { Button } from 'react-native-elements'
import { Title, Screen, Headline, FormInput } from '../Components'
import { Colors } from '../config/utils'
import { TOC_SCREEN } from './PublicNavigator'
import { PRIVATE_SCREEN } from './RootNavigator'

export class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN)
  }

  handleFormChange = ({ key, value }) => this.setState({ [key]: value })

  render() {
    return (
      <Screen style={styles.container}>
        <LoginHeader>
          <Headline>Twitter Clone</Headline>
          <Title>@reactjsacademy</Title>
        </LoginHeader>
        <View style={styles.content}>
          <FormInput
            label="Email"
            value={this.state.email}
            onChangeText={value => this.handleFormChange({ key: 'email', value })}
          />
          <FormInput
            label="Password"
            value={this.state.password}
            secureTextEntry
            onChangeText={value =>
              this.handleFormChange({ key: 'password', value })}
          />
          <Button
            onPress={this.login}
            style={styles.submitButton}
            backgroundColor={Colors.brand.primary}
            title="Login"
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate({ routeName: TOC_SCREEN })}
          >
            <Text style={styles.tocText}>
              by login you accept the Terms and Conditions.
            </Text>
          </TouchableOpacity>
        </View>
      </Screen>
    )
  }
}

const LoginHeader = ({ children }) => {
  const compoundedChildren = React.Children.map(children, child =>
    React.cloneElement(child, {
      parentColor: 'primary',
    })
  )

  return (
    <View style={styles.header}>
      {compoundedChildren}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  content: {
    padding: 16
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    height: 140,
    backgroundColor: Colors.brand.primary,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 8
  },
  tocText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.lightgrey,
  },
})
