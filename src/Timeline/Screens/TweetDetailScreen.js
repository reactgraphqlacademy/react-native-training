import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Title, Screen } from '../../App'
import * as api from '../Api'


class TweetDetailScreen extends React.Component {

  static navigationOptions = {
    title: "Tweet"
  }

  state = {
    tweet: {},
    error: null
  }

  componentDidMount() {
    this.fetchTweet();
  }

  fetchTweet = () => {
    const id = this.props.navigation.getParam('id');
    if (id) {
      this.props.api.fetchTweetById({id}).then(tweet => this.setState({tweet}))
    } else {
      this.setState({error: "no tweet available. please go back"});
    }
  }

  render() {
    return (
      <Screen>
        <ScrollView>
          <Title>DETAIL TWEET</Title>
          {this.state.error ? (
            <Text>{this.state.error}</Text>
          ) : (
            <Text>{JSON.stringify(this.state.tweet, null, 4)}</Text>
          )}
        </ScrollView>
      </Screen>
    )
  }
}

TweetDetailScreen.defaultProps = {
  api
}

export default TweetDetailScreen
