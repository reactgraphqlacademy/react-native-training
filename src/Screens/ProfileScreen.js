import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  StatusBar,
  FlatList
} from "react-native";
import { Screen, ViewLoading, Avatar, TweetItem } from "../Components";
import { Header as TopBar, Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import * as api from "../Api";
import { Layout, Colors, Icons, PROFILE_AVATAR_SIZE } from "../config/utils";

const HERO_HEIGHT = 180;
const { width } = Layout.window;

const FollowButton = ({ following = false }) => (
  <TouchableOpacity
    onPress={() => {
      alert("Follow!");
    }}
  >
    <View
      style={[
        {
          alignSelf: "flex-end",
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderWidth: 2,
          borderColor: Colors.brand.primary,
          marginBottom: 8,
          borderRadius: 20,
          backgroundColor: "transparent"
        },
        following
          ? {
              backgroundColor: Colors.brand.primary
            }
          : {}
      ]}
    >
      <Text
        style={[
          {
            color: Colors.brand.primary,
            fontWeight: "600",
            fontSize: 14,
            textAlign: "center"
          },
          following
            ? {
                color: Colors.light
              }
            : {}
        ]}
      >
        {`FOLLOW${following ? "ING" : ""}`}
      </Text>
    </View>
  </TouchableOpacity>
);
export class ProfileScreen extends React.Component {
  scrollY = 1; // Task 1 - Part 2. Replace this with an Animated value

  static navigationOptions = {
    header: null
  };

  state = {
    user: null,
    loading: true,
    timeline: [],
    userError: "",
    timelineError: ""
  };

  componentDidMount() {
    this.getUsersData();
  }

  getUsersData = () => {
    const userId = this.props.navigation.getParam("userId");
    const name = this.props.navigation.getParam("name");
    this.fetchUser({ userId, name });
    this.fetchTimeline({ userId, name });
  };

  fetchUser = ({ userId, name }) => {
    if (userId && name) {
      this.props.api.fetchUser({ userId, name }).then(user => {
        this.setState({ loading: false, user });
      });
    } else {
      this.setState({ userError: "no user available. please go back" });
    }
  };

  fetchTimeline = ({ userId, name }) => {
    if (userId && name) {
      this.props.api.fetchTimeline({ userId, name }).then(timeline => {
        this.setState({ timeline });
      });
    } else {
      this.setState({ timelineError: "no timeline data. sorry! :(" });
    }
  };

  renderItem = ({ item }) => (
    <TweetItem item={item} handlePress={() => {}} withAvatar={false} />
  );

  render() {
    const showBack = this.props.navigation.getParam("noBack");
    const { user, timeline, loading } = this.state;

    return (
      <View>
        {loading ? (
          <ViewLoading />
        ) : (
          <ScrollView scrollEventThrottle={1}>
            <View style={[styles.header]}>
              <Image
                resizeMode="cover"
                // Task 2 - Part 2: Add an opacity to this Image
                style={[styles.headerCover]}
                source={{ uri: user.profile_banner_url }}
              />
            </View>
            <View style={styles.headerContent}>
              <FollowButton following={user.following} />
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userScreenName}>@{user.screen_name}</Text>
            </View>
            <Avatar
              profile
              style={[
                styles.headerAvatar,
                {
                  borderColor: `#${user.profile_background_color}`
                  // Task 4, part 2. Animate the Avatar height and width as indicated in the README file
                }
              ]}
              image={user.profile_image_url_https}
            />
            <View style={styles.content}>
              {timeline.length == 0 ? (
                <ViewLoading />
              ) : (
                <FlatList
                  data={this.state.timeline}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id_str}
                />
              )}
            </View>
          </ScrollView>
        )}
        <View
          style={{
            position: "absolute",
            top: 0,
            width
            // task 3, part 2. Add an opacity to this view
          }}
        >
          <TopBar
            outerContainerStyles={{
              paddingTop: Layout.notchHeight,
              borderBottomColor: "transparent",
              paddingBottom: 8,
              height: Layout.headerHeight
            }}
            leftComponent={
              !showBack ? (
                <Feather
                  onPress={() => this.props.navigation.goBack()}
                  name={Icons.back}
                  size={24}
                  color={Colors.light}
                />
              ) : null
            }
            centerComponent={{
              text: this.props.navigation.getParam("name", "User Profile"),
              style: { color: Colors.light, fontWeight: "600", fontSize: 18 }
            }}
            backgroundColor={Colors.brand.primary}
          />
          <StatusBar barStyle="light-content" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: HERO_HEIGHT,
    backgroundColor: Colors.brand.primary
  },
  headerCover: {
    height: HERO_HEIGHT,
    flex: 1
  },
  headerAvatar: {
    position: "absolute",
    top: HERO_HEIGHT - PROFILE_AVATAR_SIZE / 2,
    left: 16,
    borderWidth: 4
  },
  headerContent: {
    padding: 16,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1
  },
  userName: {
    fontSize: 18,
    fontWeight: "800",
    marginRight: 4
  },
  userScreenName: {
    fontSize: 16,
    fontWeight: "200"
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: Colors.light
  }
});

ProfileScreen.defaultProps = {
  api
};
