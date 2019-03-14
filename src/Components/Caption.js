import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Caption = ({ style, text, ...rest }) =>
  <Text style={[styles.caption, style]} {...rest}>
    {text.toUpperCase()}
  </Text>

const styles = StyleSheet.create({
  caption: {
    fontSize: 16,
    color: '#333',
  },
})
