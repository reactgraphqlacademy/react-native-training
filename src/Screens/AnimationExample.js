import React from "react";
import { View, Animated } from "react-native";

export class AnimationExample extends React.Component {
  x = new Animated.Value(0);

  render() {
    return (
      <View
        style={{
          backgroundColor: "#6ECFF0",
          height: 100,
          width: 100,
          transform: [{ translateX: 100 }]
        }}
      />
    );
  }
}
