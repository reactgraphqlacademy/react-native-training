import * as React from 'react'
import { Image } from 'react-native'
import { Subheading, ListItem, Title } from '../../App'

const UserItem = props => (
    <ListItem
        title={<Title>{props.user.login}</Title>}
        description={<Subheading>{props.user.score}</Subheading>}
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
