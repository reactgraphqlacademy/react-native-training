import timeline from './data/timeline.json'

export const fetchTimeline = () => {
  return Promise.resolve(timeline)
}

export const fetchTweetById = ({id}) => {
  const tweet = timeline.filter(item => item.id === id);
  return Promise.resolve(tweet);
}
