import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

const Avatar = ({uri}) => (
  <Image style={styles.avatar} source={{uri}} />
)

const TweetItem = ({item, handlePress}) => (
  <TouchableOpacity onPress={handlePress}>
  <View style={styles.item}>
    <View style={styles.container}>
      <Avatar uri={item.user.profile_image_url_https} />
      <View style={styles.itemContent}>
        <View style={styles.contentHeader}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.userScreenName}>@{item.user.screen_name}</Text>
        </View>
        <Text style={styles.tweet}>{item.text}</Text>
      </View>
    </View>
    <View style={styles.divider} />
  </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  tweet: {
    fontSize: 16,
  },
  itemContent: {
    flex: 1,
    paddingLeft: 8,
  },
  divider: {
    width,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  contentHeader: {
    flexDirection: 'row',
    marginBottom: 8
  },
  userName: {
    fontSize: 14,
    fontWeight: '800',
    marginRight: 4
  },
  userScreenName: {
    fontSize: 14,
    fontWeight: '200'
  }
});

export default TweetItem;
