import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

 const SubHeading = ({style, children, ...rest}) => (
  <Text style={[styles.subHeading, style]} h4 {...rest}>
    {children.toUpperCase()}
  </Text>
);

SubHeading.propTypes = {
  children: PropTypes.string.isRequired
};

export default SubHeading;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 14,
    opacity: 0.6,
  }
})
