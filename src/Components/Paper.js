import React from 'react'
import { View, StyleSheet } from 'react-native'


const Paper = ({style, ...rest}) => (
  <View {...rest} style={[styles.paper, style]} />
)

const styles = StyleSheet.create({
  paper: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
    marginBottom: 24
  }
})

export default Paper
