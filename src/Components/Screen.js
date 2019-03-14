import React from "react";
import { SafeAreaView, View } from "react-native";
import { Colors } from "../utils";

const Screen = ({ style = {}, children, ...props }) => (
  <SafeAreaView
    forceInset={{ top: "always" }}
    style={[style, { flex: 1, backgroundColor: Colors.brand.primary }]}
    {...props}
  >
  <View style={{flex: 1, backgroundColor: "#fff"}}>{children}</View>
  </SafeAreaView>
);

export default Screen;
