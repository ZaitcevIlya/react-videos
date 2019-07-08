import axios from 'axios'

const KEY = 'AIzaSyCRJh1CTQBvgFEvGyb7vq8mDm0-kMQG9pE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
})
