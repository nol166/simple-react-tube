import axios from "axios"
const KEY = "AIzaSyBJtM8GTsU8enFBs05juWslruyg1uRh8nU";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})