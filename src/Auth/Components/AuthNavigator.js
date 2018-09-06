import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

import LoginScreen from '../Screens/LoginScreen'
// import SignUpScreen from '../Screens/SignUpScreen'

export const LOGIN_SCREEN = 'LOGIN_SCREEN'
export const SINGUP_SCREEN = 'SIGNUP_SCREEN'

const AuthNavigator = createSwitchNavigator(
    {
        [LOGIN_SCREEN]: LoginScreen,
        //[SINGUP_SCREEN]: SignUpScreen,
    },
    {
        initialRouteName: LOGIN_SCREEN,
        headerMode: 'none'
    },
)

export default AuthNavigator