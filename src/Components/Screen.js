import React from 'react'
import { View } from 'react-native'

const Screen = ({style = {}, ...props}) => (
  <View style={[style, {flex: 1}]} {...props} />
)

export default Screen
