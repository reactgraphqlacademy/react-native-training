import React from 'react'
import { ScrollView, Text } from 'react-native'
import { TweetDetail, Screen, ViewLoading } from '../Components'
import * as api from '../Api'
import { OTHER_USER_PROFILE } from './TimelineNavigator'

export class TweetDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Tweet',
  }

  state = {
    tweet: null,
    error: null,
    loading: true,
  }

  componentDidMount() {
    this.fetchTweet()
  }

  fetchTweet = () => {
    const id = this.props.navigation.getParam('id')
    if (id) {
      this.props.api
        .fetchTweetById({ id })
        .then(tweet => this.setState({ loading: false, tweet: tweet[0] }))
    } else {
      this.setState({ error: 'no tweet available. please go back' })
    }
  }

  handleProfilePress = () => {
    this.props.navigation.navigate({
      routeName: OTHER_USER_PROFILE,
      params: {
        userId: this.state.tweet.user.id_str,
        name: this.state.tweet.user.name,
      },
    })
  }

  render() {
    return (
      <Screen>
        {this.state.loading
          ? <ViewLoading />
          : <ScrollView>
              {this.state.error
                ? <Text>
                    {this.state.error}
                  </Text>
                : <TweetDetail
                    tweet={this.state.tweet}
                    handleProfilePress={this.handleProfilePress}
                  />}
            </ScrollView>}
      </Screen>
    )
  }
}

TweetDetailScreen.defaultProps = {
  api,
}
