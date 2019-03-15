import React from "react";
import * as api from "../Api";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { Screen, TweetItem, ViewLoading } from "../Components";
import { TWEET_DETAIL_SCREEN } from "./TimelineNavigator";

export class TimelineScreen extends React.Component {
  static navigationOptions = {
    title: "Timeline"
  };

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
    this.props.navigation.navigate({
      routeName: TWEET_DETAIL_SCREEN,
      params: { id }
    });
  };

  renderItem = ({ item }) => (
    <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id)} />
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
          // <ScrollView>
          //   <Text>{JSON.stringify(timeline, null, 4)}</Text>
          // </ScrollView>
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
