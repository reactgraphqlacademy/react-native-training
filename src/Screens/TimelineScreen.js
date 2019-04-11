import React from "react";
import * as api from "../Api";
import { FlatList, StyleSheet, ScrollView, Text } from "react-native";
import { Screen, TweetItem, ViewLoading } from "../Components";
import { TWEET_DETAIL_SCREEN } from "./TimelineNavigator";

export class TimelineScreen extends React.Component {
  /*
  - the header title for this view should be `Timeline`
  */

  state = {
    timeline: []
  };

  componentDidMount() {
    this.fetchTimeline();
  }

  fetchTimeline = () => {
    this.props.api.fetchTimeline().then(timeline => {
      this.setState({ timeline });
    });
  };

  fetchmore = () => {
    console.log('fetch more!')
    this.props.api.fetchTimeline().then(newTimeline => {
      this.setState(prevState => ({
        timeline: [
          ...prevState.timeline,
          ...newTimeline
        ]
      }));
    });
  }

  handleTweetPress = id => {
    console.log("handlePress => ", id);
    /*
    - navigate to `TWEET_DETAIL_SCREEN` passing the id as a param
    */
  };
  /*
    - create a TweetItem component with this API:
      <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id_str)} />
    */
  renderItem = ({ item }) => null;

  render() {
    const { timeline } = this.state;
    return (
      <Screen style={styles.screen}>
        {timeline.length == 0 ? (
          <ViewLoading />
        ) : (
          <FlatList
            data={timeline}
            renderItem={({ item }) => (
              <TweetItem
                item={item}
                handlePress={() => this.handleTweetPress(item.id_str)}
              />
            )}
            onEndReached={this.fetchmore}
          />
        )}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white"
  }
});

TimelineScreen.defaultProps = {
  api
};
