import timeline from './timeline'
import tweet from './tweet'
import user from './user'
import userTimeline from './userTimeline'

export const fetchTimeline = () => Promise.resolve(timeline.statuses);

export const fetchTweetById = ({ id }) => Promise.resolve(tweet);

export const fetchUser = ({ userId, name }) => Promise.resolve(user);

export const fetchUsersTimeline = ({ userId, name }) => Promise.resolve(userTimeline);
