import * as React from 'react'
import { Image } from 'react-native'
import { Subheading, ListItem, Title } from '../../App'

const UserItem = props => (
    <ListItem
        title={props.user.login}
        subtitle={props.user.score}
        roundAvatar
        avatar={{ uri: props.user.avatar_url }}
        onPress={props.handleItemPress}
    />
)

export default UserItem
