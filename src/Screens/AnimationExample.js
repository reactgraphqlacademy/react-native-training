import React from "react";
import { View, Animated } from "react-native";

export class AnimationExample extends React.Component {
  x = new Animated.Value(0);
  opacity = new Animated.Value(1);
  color = new Animated.Value(0);

  componentDidMount() {
    Animated.timing(this.x, {
      duration: 2000,
      toValue: 300
    }).start();

    Animated.timing(this.opacity, {
      duration: 2000,
      toValue: 0
    }).start();

    Animated.timing(this.color, {
      duration: 2000,
      toValue: 255
    }).start();
  }

  render() {
    // if you read the docs and you found multiply
    let y = Animated.multiply(this.x, 2);
    /*
    hacky (and worse) solution using interpolation if you don't read the docs xD
    let y = this.x.interpolate({
      inputRange: [0,300],
      outputRange: [0,600]
    })
    */

    // you can create a new animation for the opacity or interpolate the values
    let { opacity } = this;
    // or we can interpolate it, just for fun :D
    // let opacity = this.x.interpolate({
    //   inputRange: [0, 300],
    //   outputRange: [1, 0]
    // });

    // animating the color
    let color = this.color.interpolate({
      inputRange: [0, 255],
      outputRange: [`rgba(255,0,0,1)`, `rgba(0,255,0,1)`]
    });

    return (
      <Animated.View
        style={{
          backgroundColor: color,
          height: 100,
          width: 100,
          opacity,
          transform: [{ translateX: this.x }, { translateY: y }]
        }}
      />
    );
  }
}
