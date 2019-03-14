import React from 'react'
import { View } from 'react-native'

export const Paper = ({ style, ...rest }) =>
  <View
    {...rest}
    style={[
      {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 4,
        marginBottom: 24,
      },
      style,
    ]}
  />
