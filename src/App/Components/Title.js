import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const Title = ({ style, ...rest }) => {
  const primary = rest.parentColor === "primary";
  return (
    <Text
      style={[
        styles.title,
        style,
        { color: primary ? "white" : "black" }
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700"
  }
});

export default Title;
