import React from 'react'
import { Button } from '../../App'
import { createStackNavigator } from 'react-navigation'

import UsersScreen from '../Screens/UsersScreen'
import Profile from '../Screens/ProfileScreen'

export const HOME_SCREEN = 'HOME_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'

const UserNavigator = createStackNavigator(
    {
        [HOME_SCREEN]: {
            screen: UsersScreen,
            navigationOptions: ({ navigation }) => ({
                headerRight: (
                    <Button
                        onPress={() => {
                            navigation.navigate(AUTH_SCREEN)
                        }}
                    >
                        SIGN OUT
                    </Button>
                )
            })
        },
        [PROFILE_SCREEN]: Profile
    },
    {}
)

export default UserNavigator
