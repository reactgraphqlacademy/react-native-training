import React from "react";
import { Text } from "react-native-elements";

export default props => {
  const primary = props.parentColor === "primary";
  return (
    <Text {...props} h3 style={{ color: primary ? "white" : "black" }}>
      {props.children}
    </Text>
  );
};
