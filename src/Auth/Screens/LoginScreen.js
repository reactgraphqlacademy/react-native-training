import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { setUser } from "react-native-authentication-helpers";
import { Constants } from "expo";
import { Button } from 'react-native-elements'
import { Title, Screen, PRIVATE_SCREEN, Headline, FormInput } from "../../App";
import LoginHeader from '../Components/LoginHeader'

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN);
  };

  handleFormChange = ({ key, value }) => this.setState({ [key]: value });

  render() {
    return (
      <Screen style={styles.container}>
        <LoginHeader>
          <Headline>Twitter Clone</Headline>
          <Title>@reactjsacademy</Title>
        </LoginHeader>
        <FormInput
          label="Email"
          value={this.state.email}
          onChangeText={value => this.handleFormChange({ key: "email", value })}
        />
        <FormInput
          label="Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={value =>
            this.handleFormChange({ key: "password", value })
          }
        />
        <Button onPress={this.login} style={styles.submitButton} backgroundColor="#73CFEF" title="Login" />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    marginVertical: 24,
    backgroundColor: "red"
  }
});

export default LoginScreen;
