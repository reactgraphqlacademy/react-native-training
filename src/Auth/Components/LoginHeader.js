import React from 'react'
import { View, StyleSheet } from 'react-native'

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
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    backgroundColor: '#73CFEF'
  }
})

export default LoginHeader
