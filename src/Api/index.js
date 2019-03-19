import timeline from './timeline'
import tweet from './tweet'
import user from './user'
import userTimeline from './userTimeline'

// const API_URL = ""

export const fetchTimeline = () => {
  // return fetch(`${API_URL}/tweets`)
  //   .then(response => response.json())
  //   .then(data => {
  //   return data.statuses;
  // })

  return Promise.resolve(timeline)
  //return timeline
}

export const fetchTweetById = ({ id }) => {
  // return fetch(`${API_URL}/tweets/${id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   return data;
  // })
  return Promise.resolve(tweet)
}

export const fetchUser = ({ userId, name }) => {
  // return fetch(`${API_URL}/users/${userId}/${name}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     return data;
  // });
  // return
  return Promise.resolve(user)
}

export const fetchUsersTimeline = ({ userId, name }) => {
  // return fetch(`${API_URL}/users/${userId}/${name}/timeline`)
  //   .then(response => response.json())
  //   .then(data => {
  //     return data;
  // });
  return Promise.resolve(userTimeline)
}
