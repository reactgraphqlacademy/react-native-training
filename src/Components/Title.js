import React from 'react'
import { Text } from 'react-native-elements'

export const Title = ({ style, ...rest }) => {
  const primary = rest.parentColor === 'primary'
  return (
    <Text
      h4
      style={[
        style,
        { color: primary ? 'white' : 'black' },
      ]}
      {...rest}
    />
  )
}
