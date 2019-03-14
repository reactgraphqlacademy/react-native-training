import * as React from 'react'
import { ListItem } from 'react-native-elements'

export const UserItem = props =>
  <ListItem
    title={props.user.login}
    subtitle={props.user.score}
    roundAvatar
    avatar={{ uri: props.user.avatar_url }}
    onPress={props.handleItemPress}
  />
