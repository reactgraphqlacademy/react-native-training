import React from 'react'
import { View } from "react-native";
import {
  FormLabel,
  FormInput as BaseFormInput,
  FormValidationMessage
} from "react-native-elements";
import PropTypes from 'prop-types'

const FormInput = ({ label, value, style, ...rest}) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <BaseFormInput {...rest} value={value} />
    {/* <FormValidationMessage>Error message</FormValidationMessage> */}
  </View>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default FormInput
