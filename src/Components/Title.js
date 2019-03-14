import React from 'react'
import { Text } from 'react-native-elements'

export const Title = ({ style, ...rest }) => {
  const primary = rest.parentColor === 'primary'
  return (
    <Text
      h1
      style={[
        {
          fontSize: 20,
          fontWeight: '700',
        },
        style,
        { color: primary ? 'white' : 'black' },
      ]}
      {...rest}
    />
  )
}
