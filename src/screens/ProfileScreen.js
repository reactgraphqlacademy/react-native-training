import * as React from 'react'
import * as api from '../config/api'
import { ViewLoading } from '../components'
import { View, Text, Image, StyleSheet, Linking } from 'react-native'
import {
  Paper,
  Button,
  Headline,
  Title,
  Subheading,
  Caption,
  Divider
} from 'react-native-paper'

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('username', 'User Profile')
  })

  state = null

  componentDidMount() {
    //how you can revceive parameters from the previous navigation screen?
    /*
      8. Read the Parameter sent from the previous Screen
    */
    this.fetch({ username: 'reactjsacademy' })
  }

  fetch = params => {
    api.fetchUserById(params).then(({ user }) => {
      this.setState({ ...user })
    })
  }
  /*
    9. Build the Layout for the Profile Page
    HINT:
    - you have the styles at the bottom and the preview
      in the README, do your best!
  */
  render() {
    return !this.state ? (
      <ViewLoading />
    ) : (
      <Text>{JSON.stringify(this.state, null, 4)}</Text>
    )
  }
}

export default ProfileScreen

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 340,
    backgroundColor: '#73CFEF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  lightLabel: {
    color: '#fff'
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 50,
    margin: 20
  },
  dataItemsContainer: {
    flexDirection: 'row',
    margin: 16
  },
  dataItem: {
    flex: 1,
    alignItems: 'center'
  },
  content: { margin: 16 },
  paper: {
    padding: 16,
    elevation: 6,
    marginTop: -56,
    borderRadius: 4,
    marginBottom: 24
  },
  link: {
    color: 'peru'
  },
  contentValue: {
    marginBottom: 20
  }
})
