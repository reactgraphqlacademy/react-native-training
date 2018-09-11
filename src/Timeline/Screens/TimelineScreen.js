import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import * as api from '../Api'

// fetch timeline
// display all the tweets in a flatList

class TimelineScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Timeline"
  });

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
      <View style={styles.container}>
        <FlatList
          data={this.state.timeline}
          renderItem={({item}) => <Text>{item.id}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

TimelineScreen.defaultProps = {
  api
}

export default TimelineScreen
