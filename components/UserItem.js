import * as React from 'react'
import { Text, Image } from 'react-native'
import { ListItem } from 'react-native-paper'

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
    onPress={props.handleItemPress}
  />
)

export default UserItem
