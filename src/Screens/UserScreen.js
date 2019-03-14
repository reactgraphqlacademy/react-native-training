import React from 'react'
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'

import { UsersScreen } from './UsersScreen'
import { Profile } from './ProfileScreen'

import { PUBLIC_SCREEN } from './RootNavigator'

export const HOME_SCREEN = 'HOME_SCREEN'
export const PROFILE_SCREEN = 'PROFILE_SCREEN'
export const USERS_SCREEN = 'USERS_SCREEN'

export const UserNavigator = createStackNavigator(
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
        ),
      }),
    },
    [PROFILE_SCREEN]: Profile,
  },
  {}
)
