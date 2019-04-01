import React from "react";
import * as api from "../Api";
import { FlatList, StyleSheet } from "react-native";
import { Screen, TweetItem, ViewLoading } from "../Components";
import { TWEET_DETAIL_SCREEN } from "./PrivateNavigator";

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

  handleTweetPress = id => {
    /*
    - navigate to `TWEET_DETAIL_SCREEN` passing the id as a param
    */
  };

  renderItem = ({ item }) => (
    <TweetItem
      item={item}
      handlePress={() => this.handleTweetPress(item.id_str)}
    />
  );

  render() {
    const { timeline } = this.state;
    return (
      <Screen>
        {timeline.length == 0 ? (
          <ViewLoading />
        ) : (
          <FlatList
            data={this.state.timeline}
            renderItem={this.renderItem}
            keyExtractor={item => item.id_str}
          />
        )}
      </Screen>
    );
  }
}

TimelineScreen.defaultProps = {
  api
};
