import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native'
import Screen from '../Components/Screen'
import * as api from '../Api'
import TweetItem from '../Components/TweetItem';
import { TWEET_DETAIL_SCREEN } from './TimelineNavigator'


class TimelineScreen extends React.Component {
  static navigationOptions = {
    title: "Timeline"
  }

  state = {
    timeline: []
  }

  componentDidMount() {
    this.fetchTimeline();
  }

  fetchTimeline = () => {
    this.props.api.fetchTimeline().then(timeline => {
      this.setState({timeline});
    })
  }

  handleTweetPress = (id) => {
    this.props.navigation.navigate({routeName: TWEET_DETAIL_SCREEN, params: { id }});
  }

  renderItem = ({item}) => <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id)} />

  render() {
    return (
      <Screen style={styles.screen}>
        <FlatList
          data={this.state.timeline}
          renderItem={this.renderItem}
          keyExtractor={item => item.id_str}
        />
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white'
  }
})

TimelineScreen.defaultProps = {
  api
}

export default TimelineScreen
