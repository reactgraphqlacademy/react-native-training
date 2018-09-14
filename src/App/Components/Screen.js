import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

const Screen = ({style, children, ...rest}) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={[styles.screen, style]} {...rest}>{children}</View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Screen
