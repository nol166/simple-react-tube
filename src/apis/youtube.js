import axios from "axios"
const KEY = "AIzaSyAeoQZwp2v9cNBB_w9HRg6shP8Ac_V7Sqg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    }
})