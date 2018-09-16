import React from 'react'
import { Constants } from 'expo'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../../Utils'

const LoginHeader = ({children}) => {
  const compoundedChildren = React.Children.map(children, child => (
    React.cloneElement(child, {
      parentColor: "primary"
    })
  ))

  return (
    <View style={styles.header}>
      {compoundedChildren}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    backgroundColor: Colors.brand.primary
  }
})

export default LoginHeader
