import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native-elements'

export const SubHeading = ({ style, children, ...rest }) =>
  <Text
    style={[
      {
        fontSize: 14,
        opacity: 0.6,
      },
      style,
    ]}
    h4
    {...rest}
  >
    {children.toUpperCase()}
  </Text>

SubHeading.propTypes = {
  children: PropTypes.string.isRequired,
}
