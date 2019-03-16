import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import { Screen, ViewLoading, Avatar } from "../Components";
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
  scrollY = new Animated.Value(0);

  static navigationOptions = {
    header: null
  };

  state = {
    user: null,
    loading: true
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const userId = this.props.navigation.getParam("userId");
    const name = this.props.navigation.getParam("name");
    if (userId && name) {
      this.props.api.fetchUser({ userId, name }).then(user => {
        console.log(user);
        this.setState({ loading: false, user });
      });
    } else {
      this.setState({ error: "no user available. please go back" });
    }
  };

  render() {
    const showBack = this.props.navigation.getParam("noBack");
    const { scrollY } = this;

    let opacity = scrollY.interpolate({
      inputRange: [0, 60, 100],
      outputRange: [0, 0, 1]
    });
    const { user } = this.state;
    return (
      <Screen>
        {this.state.loading ? (
          <ViewLoading />
        ) : (
          <Animated.ScrollView
            scrollEventThrottle={1}
            //contentContainerStyle={{paddingTop: -64}}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.scrollY
                    }
                  }
                }
              ],
              { useNativeDriver: true }
            )}
          >
            <View style={[styles.header]}>
              <Animated.Image
                resizeMode="cover"
                style={[styles.headerCover]}
                source={{ uri: user.profile_banner_url }}
              />
            </View>
            <View style={styles.headerContent}>
              <FollowButton following={user.following} />
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userScreenName}>
                @{user.screen_name}
              </Text>
            </View>
            <Avatar
              profile
              style={[
                styles.headerAvatar,
                {
                  borderColor: `#${user.profile_background_color}`
                }
              ]}
              image={user.profile_image_url_https}
            />
            <View style={styles.content}>
              <Text>{JSON.stringify(this.state.user, null, 4)}</Text>
            </View>
          </Animated.ScrollView>
        )}
        <Animated.View
          style={{
            opacity,
            position: "absolute",
            top: 0,
            width
          }}
        >
          <TopBar
            outerContainerStyles={{
              paddingTop: Layout.notchHeight + 20,
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
        </Animated.View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: HERO_HEIGHT
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
    paddingVertical: 8,
    paddingHorizontal: 16
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
    padding: 16,
    backgroundColor: Colors.lightgrey
  }
});

ProfileScreen.defaultProps = {
  api
};
