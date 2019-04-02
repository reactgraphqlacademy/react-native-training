import React from "react";
import * as api from "../Api";
import { FlatList, StyleSheet } from "react-native";
import { Screen, TweetItem, ViewLoading } from "../Components";
import { TWEET_DETAIL_SCREEN } from "./PrivateNavigator";

export class TimelineScreen extends React.Component {
  /*
  EXERCISE 4:

  1.1. Set the header title for this view should be `Timeline`
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
    EXERSICE 4:

    1.2. Implement the `handleTweetPress` method to send the user to the `TWEET_DETAIL_SCREEN` screen,
    passing the `id` as a parameter.
    Hint: https://reactnavigation.org/docs/en/navigation-prop.html#navigate-link-to-other-screens
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
      <Screen style={styles.screen}>
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white"
  }
});

TimelineScreen.defaultProps = {
  api
};
