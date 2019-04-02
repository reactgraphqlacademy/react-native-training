import React from "react";
import { ScrollView, Text } from "react-native";
import { TweetDetail, Screen, ViewLoading } from "../Components";
import * as api from "../Api";
import { USER_PROFILE } from "./TimelineNavigator";

export class TweetDetailScreen extends React.Component {
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
        .then(tweet => {
          console.log(tweet);
          this.setState({ loading: false, tweet })
        });

    } else {
      this.setState({ error: "no tweet available. please go back" });
    }
  };

  handleProfilePress = () => {
    /*
    1.1 when the user clicks in the profile header, navigate to the USER_PROFILE
    passing the below parameters:
    */
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
              <TweetDetail
                tweet={this.state.tweet}
                handleProfilePress={this.handleProfilePress}
              />
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
