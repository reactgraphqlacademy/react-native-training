import timeline from "./timeline";
import tweet from "./tweet";
import user from "./user";
import userTimeline from "./userTimeline";

export const fetchTimeline = () => {
  return Promise.resolve(timeline.statuses);
};

export const fetchTweetById = ({ id }) => {
  return Promise.resolve(tweet);
};

export const fetchUser = ({ userId, name }) => {
  return Promise.resolve(user);
};

export const fetchUsersTimeline = ({ userId, name }) => {
  return Promise.resolve(userTimeline);
};
