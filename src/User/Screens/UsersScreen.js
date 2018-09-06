import React from 'react'
import * as api from '../Api'
import { FlatList } from 'react-native'
import UserItem from '../Components/UserItem'
import { ViewLoading } from '../../App'
import { Divider } from 'react-native-paper'
import { PROFILE_SCREEN } from '../index'

class UsersScreen extends React.Component {
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
                this.props.navigation.navigate(PROFILE_SCREEN, { username: item.login })
            }
        />
    )

    keyExtractor = (item, index) => item.node_id

    render() {
        return !this.state.users.items ? (
            <ViewLoading />
        ) : (
                <FlatList
                    data={this.state.users.items}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={Divider}
                />
            )
    }
}

export default UsersScreen
