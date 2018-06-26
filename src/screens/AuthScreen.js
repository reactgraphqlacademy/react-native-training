import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { HOME_SCREEN } from '../index'

class Auth extends React.Component {
  /*
    4. Set the title for this navigation view
        (add whatever you want)
  */

  login = () => {
    /*
      5. navigate to the HOME_SCREEN
      Hints:
        - you have a exported string that is the name
          of the screen that you have to go
        - you have access to `this.props.navigation.navigate()` method
    */
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
