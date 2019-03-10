import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => (
  <View style={{ padding: 24 }}>
    <ActivityIndicator color="#000" />
  </View>
);

export default Loading;
