import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Paper } from '../../App'
import Avatar from '../Components/Avatar'
import { Feather } from '@expo/vector-icons';
import { stringify } from 'querystring';

const IconButton = ({ icon }) => {
  let Icon;
  switch (icon) {
    case "rt":
      Icon = <Feather name="refresh-cw" size={24} color="lightgrey" />
      break;
    case "likes":
      Icon = <Feather name="heart" size={24} color="lightgrey" />
      break;
    case "open":
      Icon = <Feather name="share" size={24} color="lightgrey" />
      break;
  }
  return Icon
}

const TweetURL = ({urls}) => {
  if (urls && urls.length > 0) {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(urls[0].url)}>
        <Text style={[styles.tweet, styles.tweetURL]}>{urls[0].display_url}</Text>
      </TouchableOpacity>
    )
  } else {
    return null
  }
}

const TweetDetail = ({tweet}) => {
  const date = new Date(tweet.created_at);
  return (
    <View style={styles.container}>
      <Paper>
        <View style={styles.header}>
          <Avatar uri={tweet.user.profile_image_url_https} />
          <View style={styles.contentHeader}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            <Text style={styles.userScreenName}>@{tweet.user.screen_name}</Text>
          </View>
        </View>
        <View style={styles.tweetContent}>
          <Text style={styles.tweet}>{tweet.text}</Text>
          <TweetURL urls={tweet.entities.urls} />
          <Text style={styles.timestamp}>{date.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.footer}>
          <IconButton icon="rt" />
          <IconButton icon="likes" />
          <IconButton icon="open" />
        </View>
      </Paper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
  },
  contentHeader: {
    marginLeft: 8,
    flex: 1,
    justifyContent: 'center'
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    marginRight: 4
  },
  userScreenName: {
    fontSize: 16,
    fontWeight: '200'
  },
  tweetContent: {
    margin: 16,
  },
  tweet: {
    fontSize: 24,
  },
  tweetURL: {
    color: 'blue',
    marginTop: 12,
  },
  timestamp: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    marginVertical: 12
  },
  footer: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default TweetDetail
