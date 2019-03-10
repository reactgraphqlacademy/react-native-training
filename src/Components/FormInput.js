import React from 'react'
import { View } from "react-native";
import {
  FormLabel,
  FormInput as BaseFormInput,
} from "react-native-elements";
import PropTypes from 'prop-types'

const FormInput = ({ label, value, style, onChangeText, ...rest}) => {

  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <BaseFormInput {...rest} value={value} onChangeText={onChangeText}/>
    </View>
  )
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default FormInput
