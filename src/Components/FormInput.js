import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

export const FormInput = ({ label, value, style, onChangeText, ...rest }) =>
  <View style={{paddingVertical: 8}}>
    <Input {...rest} label={label} value={value} onChangeText={onChangeText} />
  </View>

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}
