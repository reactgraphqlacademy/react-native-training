import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Caption = ({style, text, ...rest}) => (
  <Text style={[styles.caption, style]} {...rest}>
    {text.toUpperCase()}
  </Text>
)

const styles = StyleSheet.create({
  caption: {
    fontSize: 16,
    color: "#333"
  }
})

export default Caption
