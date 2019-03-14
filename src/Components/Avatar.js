import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

export const Avatar = ({ uri }) =>
  <Image style={styles.avatar} source={{ uri }} />

Avatar.propTypes = {
  uri: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
})
