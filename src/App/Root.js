import React from 'react'
import { Provider as ThemeProvider } from 'react-native-paper'
import Navigator from './Navigator'

const Root = () => (
    <ThemeProvider>
        <Navigator />
    </ThemeProvider>
)

export default Root
