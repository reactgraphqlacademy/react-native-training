import React from 'react'
import * as api from '../config/api'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { UserItem } from '../components'
import { Divider, Searchbar, Button } from 'react-native-paper'
import { clearUser } from 'react-native-authentication-helpers'
import { PROFILE_SCREEN } from '../App'

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
    <UserItem
      user={item}
      handleItemPress={() =>
        this.props.navigation.navigate(PROFILE_SCREEN, { user: item })
      }
    />
  )

  keyExtractor = (item, index) => item.node_id

  render() {
    return this.state.users.items ? (
      <FlatList
        data={this.state.users.items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={Divider}
      />
    ) : (
      <View style={{ padding: 24 }}>
        <ActivityIndicator color="#000" />
      </View>
    )
  }
}

export default UsersList
