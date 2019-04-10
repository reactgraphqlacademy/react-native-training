import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Animated } from "react-native";
import { PROFILE_AVATAR_SIZE } from "../config/utils";

export const Avatar = ({ style, image, profile, ...rest }) => {
  const uri = image.replace("normal", "bigger");
  return (
    <Animated.Image
      style={[styles.avatar, profile ? styles.profile : {}, style]}
      source={{ uri }}
      {...rest}
    />
  );
};

Avatar.propTypes = {
  uri: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22
  },
  profile: {
    width: PROFILE_AVATAR_SIZE,
    height: PROFILE_AVATAR_SIZE,
    borderRadius: PROFILE_AVATAR_SIZE / 2,
    backgroundColor: "grey"
  }
});
