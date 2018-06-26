import React from 'react'
import * as api from '../config/api'
import { View, FlatList, Text, ScrollView } from 'react-native'
import { UserItem, ViewLoading } from '../components'
import { Divider, Searchbar, Button } from 'react-native-paper'
import { PROFILE_SCREEN } from '../index'

class UsersList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  })

  state = {
    users: [],
    nextUrl: null
  }

  componentDidMount() {
    this.fetch({ query: 'javascript' })
  }

  fetchNextPage = () => {
    this.fetch({ nextUrl: this.state.nextUrl })
  }

  fetch = params => {
    api.fetchUsers(params).then(({ users, nextUrl }) => {
      this.setState({ users, nextUrl })
    })
  }

  renderItem = ({ item }) => (
    /*
      7. Finish the implementation of the handlePress of
      the `UserLItem`.
      Hint:
      - you need to pass a parameter to the next screen
    */

    <UserItem
      user={item}
      handleItemPress={() =>
        this.props.navigation.navigate(PROFILE_SCREEN, {
          /* Something must be here... */
        })
      }
    />
  )

  keyExtractor = (item, index) => item.node_id

  render() {
    return !this.state.users.items ? (
      <ViewLoading />
    ) : (
      // you need to change this with a FlatList to render all the users that you requests from the API
      /*
        6. Create a `FlatList` and show all the users
          from the API
      */
      <Text>{JSON.stringify(this.state.users, null, 4)}</Text>
    )
  }
}

export default UsersList
