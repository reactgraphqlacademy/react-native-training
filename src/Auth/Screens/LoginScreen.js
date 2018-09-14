import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { setUser } from "react-native-authentication-helpers";
import { Constants } from "expo";
import { Button, HeadLine, Title, Screen, PRIVATE_SCREEN, Headline, FormInput } from "../../App";

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    this.props.navigation.navigate(PRIVATE_SCREEN);
  };

  handleFormChange = ({ key, text }) => this.setState({ [key]: text });

  render() {
    return (
      <Screen style={styles.container}>
        <View style={styles.header}>
          <Headline>Twitter Clone</Headline>
          <Title>@reactjsacademy</Title>
        </View>
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
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    backgroundColor: '#73CFEF'
  }
});

export default LoginScreen;
