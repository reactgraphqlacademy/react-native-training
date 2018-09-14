import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const Title = ({children, style, ...rest}) => (
  <Text style={[styles.title, style]} {...rest}>{children}</Text>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700'
  }
})

export default Title;
