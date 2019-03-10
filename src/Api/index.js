import timeline from './data/timeline.json'
import rjsa from './data/rjsa_profile.json'
import leanjs from './data/leanjs_profile.json'

export const fetchTimeline = () => {
  return Promise.resolve(timeline)
}

export const fetchTweetById = ({id}) => {
  const tweet = timeline.filter(item => item.id === id);
  return Promise.resolve(tweet);
}

const localUsers = {
  "770259608669683712": rjsa,
  "778564054717726720": leanjs
}

export const fetchUser = ({userId}) => {
  // here is where you go to your API and fetch a real user by ID
  const user = localUsers[userId]
  return Promise.resolve(user);
}
