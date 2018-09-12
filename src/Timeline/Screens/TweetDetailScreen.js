import React from "react";
import { ScrollView, Text } from "react-native";
import { Screen, ViewLoading } from "../../App";
import TweetDetail from "../Components/TweetDetail";
import * as api from "../Api";

class TweetDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Tweet"
  };

  state = {
    tweet: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    this.fetchTweet();
  }

  fetchTweet = () => {
    const id = this.props.navigation.getParam("id");
    if (id) {
      this.props.api
        .fetchTweetById({ id })
        .then(tweet => this.setState({ loading: false, tweet: tweet[0] }));
    } else {
      this.setState({ error: "no tweet available. please go back" });
    }
  };

  render() {
    return (
      <Screen>
        {this.state.loading ? (
          <ViewLoading />
        ) : (
          <ScrollView>
            {this.state.error ? (
              <Text>{this.state.error}</Text>
            ) : (
              <TweetDetail tweet={this.state.tweet} />
            )}
          </ScrollView>
        )}
      </Screen>
    );
  }
}

TweetDetailScreen.defaultProps = {
  api
};

export default TweetDetailScreen;
