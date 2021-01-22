import axios from "axios";

const KEY = "AIzaSyD5fwPsd5xkaHDT7rJX-m0faOBKTl-xhEE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
