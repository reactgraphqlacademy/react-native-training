import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Avatar = ({uri}) => (
  <Image style={styles.avatar} source={{uri}} />
)

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  }
})

export default Avatar;
