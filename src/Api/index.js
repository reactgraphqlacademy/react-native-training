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

export const fetchUser = ({ userId, name }) => {
  console.log(`${userId} - ${name}`);
  return fetch(`https://rjsa-rn-api.glitch.me/users/${userId}/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
  });
}
