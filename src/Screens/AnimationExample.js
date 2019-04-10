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
          width: 100
          //,transform: [{ translateX: 100 }]
        }}
      />
    );
  }
}

export class AnimationExample extends React.Component {
  x = new Animated.Value(0);
  opacity = new Animated.Value(1);

  componentDidMount() {
    Animated.timing(this.x, {
      duration: 3000,
      toValue: 300
    }).start();

    Animated.timing(this.opacity, {
      duration: 4000,
      toValue: 0
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: "#6ECFF0",
          height: 100,
          width: 100,
          opacity: this.opacity,
          transform: [{ translateX: this.x }, { translateY: this.x }]
        }}
      />
    );
  }
}

// import * as React from "react";
// import { Text, View, StyleSheet, Animated } from "react-native";

// export class AnimationExample extends React.Component {
//   state = {
//     opacity: new Animated.Value(0),
//     color: new Animated.Value(0)
//   };

//   componentDidMount() {
//     Animated.timing(this.state.opacity, {
//       toValue: 1,
//       duration: 2000
//     }).start();
//     Animated.timing(this.state.color, {
//       toValue: 255,
//       duration: 2000
//     }).start();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           style={{
//             opacity: this.state.opacity,
//             backgroundColor: this.state.color.interpolate({
//               inputRange: [0, 255],
//               outputRange: ["rgba(0,0,255,1)", "rgba(255,0,0,1)"]
//             })
//           }}
//         >
//           <Text style={styles.paragraph}>
//             Change code!! in the editor and watch it change on your phone! Save
//             to get a shareable url. 123
//           </Text>
//         </Animated.View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1"
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#34495e"
//   }
// });
