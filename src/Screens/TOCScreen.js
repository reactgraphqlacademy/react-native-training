import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Screen from "../Components/Screen";
import Header from "../Components/Header";
import { Feather } from "@expo/vector-icons";
import { Layout, Icons, Colors } from "../utils";
import TOCContent from '../Components/TOCContent'

const TOCScreen = ({ navigation }) => (
  <Screen>
    <Header
      outerContainerStyles={{
        paddingTop: Layout.notchHeight + 20,
        borderBottomColor: "transparent",
        paddingBottom: 8,
        height: Layout.headerHeight
      }}
      centerComponent={{
        text: "Terms and Conditions",
        style: { color: Colors.light, fontWeight: "600", fontSize: 18 }
      }}
      rightComponent={
        <Feather
          onPress={() => navigation.goBack()}
          name={Icons.close}
          size={24}
          color={Colors.light}
        />
      }
      backgroundColor={Colors.brand.primary}
    />
    <ScrollView>
      <TOCContent />
    </ScrollView>

  </Screen>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
});

export default TOCScreen;
