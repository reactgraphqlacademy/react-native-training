import React from 'react'
import { View, StyleSheet } from 'react-native'

const Screen = ({style, ...rest}) => (
  <View style={[styles.screen, style]} {...rest} />
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Screen
