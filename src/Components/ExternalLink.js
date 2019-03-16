import React from "react";
import { TouchableOpacity, Linking, Text } from 'react-native'

export const ExternalLink = ({
  style,
  url,
  title = "External Link"
}) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={style}>{title}</Text>
  </TouchableOpacity>
);
