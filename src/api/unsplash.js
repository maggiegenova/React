import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y5RfZVS379uQPFUhzhin-gESIHW0C86-eM6KRSyh9wA",
  },
});
