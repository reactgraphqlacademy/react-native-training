import rjsa from './data/rjsa_profile.json'
import leanjs from './data/leanjs_profile.json'

export const fetchTimeline = () => {
  return fetch(`https://rjsa-rn-api.glitch.me/tweets`)
    .then(response => response.json())
    .then(data => {
    return data.statuses;
  })
}

export const fetchTweetById = ({ id }) => {
  console.log("ID => ", id);
  const url = `https://rjsa-rn-api.glitch.me/tweets/${id}`
  console.log("URL => ", url);
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    return data;
  })
}

const localUsers = {
  '770259608669683712': rjsa,
  '778564054717726720': leanjs,
}

export const fetchUser = ({ userId, name }) => {
  return fetch(`https://rjsa-rn-api.glitch.me/users/${userId}/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    return data;
  });
}
