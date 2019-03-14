import React from 'react'
import { Text } from 'react-native-elements'

export const Headline = ({ parentColor = 'primary', children, ...rest }) => {
  const primary = parentColor === 'primary'
  return (
    <Text style={{ color: primary ? 'white' : 'black' }} {...rest}>
      {children}
    </Text>
  )
}
