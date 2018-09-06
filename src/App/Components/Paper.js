import React from 'react'
import { StyleSheet } from 'react-native'
import { Paper as BasePaper } from 'react-native-paper'


const Paper = ({style, ...rest}) => (
  <BasePaper {...rest} style={[styles.paper, style]} />
)

const styles = StyleSheet.create({
  paper: {
    padding: 16,
    elevation: 6,
    marginTop: -56,
    borderRadius: 4,
    marginBottom: 24
  }
})

export default Paper
