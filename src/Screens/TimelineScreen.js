import React from "react";
import * as api from "../Api";
import { FlatList, StyleSheet } from "react-native";
import { Screen, TweetItem, ViewLoading } from "../Components";
import { TWEET_DETAIL_SCREEN } from "./TimelineNavigator";
import console = require("console");

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
    this.props.api
      .fetchTimeline()
      .then(timeline => {
        this.setState({ timeline });
      });
  };

  handleTweetPress = id => {
    console.log('handlePress => ', id);
    /*
    - navigate to `TWEET_DETAIL_SCREEN` passing the id as a param
    */
  };

  renderItem = ({ item }) => (
    /*
    - create a TweetItem component with this API:
      <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id_str)} />
    */
  );

  render() {
    const { timeline } = this.state;
    return (
      <Screen style={styles.screen}>
        {timeline.length == 0 ? (
          <ViewLoading />
        ) : (
          <ScrollView>
            <Text>{JSON.stringify(timeline, null, 4)}</Text>
          </ScrollView>
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
