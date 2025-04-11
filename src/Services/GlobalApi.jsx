import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a0f3c30fe009b6c0e70d04071aef0fa1";


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a0f3c30fe009b6c0e70d04071aef0fa1';

export default {
  getTrendingMovies: () => 
    axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`),
  getMovieByGenreId : (id)=> axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)
  
};

// export const customFetch = (axios.create({
//     baseURL:movieBaseUrl,
// }))