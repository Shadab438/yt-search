import axios from "axios";
const KEY = "AIzaSyCfUhNVmJw1Obmv4NDykfke5aANzxOeRCg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
});
