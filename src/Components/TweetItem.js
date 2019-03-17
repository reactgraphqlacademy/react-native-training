import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { Avatar } from './index'

export const TweetItem = ({ item, handlePress, withAvatar = true }) =>
  <TouchableOpacity onPress={handlePress}>
    <View style={styles.item}>
      <View style={styles.container}>
        {withAvatar ? <Avatar image={item.user.profile_image_url_https} /> : null}
        <View style={styles.itemContent}>
          <View style={styles.headerContent}>
            <Text style={styles.userName}>
              {item.user.name}
            </Text>
            <Text style={styles.userScreenName}>
              @{item.user.screen_name}
            </Text>
          </View>
          <Text style={styles.tweet}>
            {item.text}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  </TouchableOpacity>

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
