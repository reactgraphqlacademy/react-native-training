import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormLabel, FormInput as BaseFormInput } from 'react-native-elements'

export const FormInput = ({ label, value, style, onChangeText, ...rest }) =>
  <View>
    <FormLabel>
      {label}
    </FormLabel>
    <BaseFormInput {...rest} value={value} onChangeText={onChangeText} />
  </View>

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}
