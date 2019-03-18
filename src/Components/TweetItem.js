import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { Avatar } from './index'

export const TweetItem = ({ item, handlePress, withAvatar = true }) =>
  <View>
    <Text>{JSON.stringify(item, null, 4)}</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 16,
  },
  tweet: {
    fontSize: 16,
  },
  itemContent: {
    flex: 1,
    paddingLeft: 8,
  },
  headerContent: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: '800',
    marginRight: 4,
  },
  userScreenName: {
    fontSize: 14,
    fontWeight: '200',
  },
})
