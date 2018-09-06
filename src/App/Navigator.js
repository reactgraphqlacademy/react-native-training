import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { AuthNavigator } from '../Auth'
import { UsersNavigator } from '../Users'

export const PRIVATE_SCREEN = 'PRIVATE_SCREEN'
export const PUBLIC_SCREEN = 'PUBLIC_SCREEN'

const Navigator = createSwitchNavigator(
    {
        [PRIVATE_SCREEN]: UsersNavigator,
        [PUBLIC_SCREEN]: AuthNavigator
    },
    {
        initialRouteName: PUBLIC_SCREEN,
        headerMode: 'none'
    }
)

export default Navigator