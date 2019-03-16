import React from "react";
import { ScrollView, Text } from "react-native";
import PropTypes from 'prop-types'

export const Debug = ({ value }) => (
  <ScrollView>
    <Text>{JSON.stringify(value, null, 4)}</Text>
  </ScrollView>
);

Debug.propTypes = {
  value: PropTypes.object.isRequired
}
