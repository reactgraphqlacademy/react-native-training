import React from 'react'
import { View, FlatList, Text, Image, ActivityIndicator } from 'react-native'
import { ListItem, Divider, Searchbar } from 'react-native-paper'
import * as api from '../config/api'

const UserItem = props => (
  <ListItem
    title={
      <Text style={{ fontSize: 18, lineHeight: 24, fontWeight: '800' }}>
        {props.user.login}
      </Text>
    }
    description={`${props.user.score}`}
    avatar={
      <Image
        style={{ width: 44, height: 44, borderRadius: 22 }}
        source={{ uri: props.user.avatar_url }}
      />
    }
    onPress={() => console.log(props.user)}
  />
)

class UsersList extends React.Component {
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

  renderItem = ({ item }) => <UserItem user={item} />

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
