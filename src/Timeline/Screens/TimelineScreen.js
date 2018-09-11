import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import * as api from '../Api'
import TweetItem from '../Components/TweetItem';
import { Constants } from 'expo'

// fetch timeline
// display all the tweets in a flatList

class TimelineScreen extends React.Component {

  state = {
    timeline: []
  }

  fetchTimeline = () => {
    this.props.api.fetchTimeline().then(timeline => {
      this.setState({timeline});
    })
  }

  componentDidMount() {
    this.fetchTimeline();
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.timeline}
        renderItem={({item}) => <TweetItem item={item} />}
        keyExtractor={item => item.id_str}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})

TimelineScreen.defaultProps = {
  api
}

export default TimelineScreen
