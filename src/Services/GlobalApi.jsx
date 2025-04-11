import axios from "axios";

const movieBaseUrl = "api.themoviedb.org/3/movie/550?";
const api_key = "a0f3c30fe009b6c0e70d04071aef0fa1";
// https://api.themoviedb.org/3/trending/all/day?api_key=a0f3c30fe009b6c0e70d04071aef0fa1

const getTrendingVideos = axios.get(
	`${movieBaseUrl}/trending/all/day?/api_key${api_key}`
);
export default {getTrendingVideos}