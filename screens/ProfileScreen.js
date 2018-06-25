import * as React from 'react'
import { View, Text } from 'react-native'

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user.login || 'User Profile'
  })

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props.navigation.state.params.user, null, 4)}
        </Text>
      </View>
    )
  }
}

export default ProfileScreen
