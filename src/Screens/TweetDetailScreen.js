import React from "react";
import { ScrollView, Text } from "react-native";
import { TweetDetail, Screen, ViewLoading } from "../Components";
import * as api from "../Api";
import { USER_PROFILE } from "./TimelineNavigator";

export class TweetDetailScreen extends React.Component {
  /*
  EXERCISE 4:

  2.1. Set the header title for this view should be `Tweet`
  */
  static navigationOptions = {
    title: 'Tweet'
  }

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
    EXERCISE 4:

    2.2. Implement the `handleProfilePress` method to send the user to the `USER_PROFILE` screen,
    passing the parameters below:

      {
        userId: this.state.tweet.user.id_str,
        name: this.state.tweet.user.screen_name
      }

    Hint: https://reactnavigation.org/docs/en/navigation-prop.html#navigate-link-to-other-screens
    */
      this.props.navigation.navigate({
        routeName: USER_PROFILE,
        params: {
          userId: this.state.tweet.user.id_str,
          name: this.state.tweet.user.screen_name
        }
      })
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
