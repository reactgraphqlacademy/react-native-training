import React from 'react'
import { Button } from '../../App'
import { createStackNavigator } from 'react-navigation'

import UsersScreen from '../Screens/UsersScreen'
import Profile from '../Screens/ProfileScreen'

import { PUBLIC_SCREEN } from '../../App'

export const HOME_SCREEN = 'HOME_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'
export const USERS_SCREEN = 'USERS_SCREEN'

const UserNavigator = createStackNavigator(
    {
        [HOME_SCREEN]: {
            screen: UsersScreen,
            defaultNavigationOptions: ({ navigation }) => ({
                headerRight: (
                    <Button
                        onPress={() => {
                            navigation.navigate(PUBLIC_SCREEN)
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
