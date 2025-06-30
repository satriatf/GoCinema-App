import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export const getMovies = async (endpoint) => {
  try {
    const response = await api.get(`/movie/${endpoint}`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching ${endpoint} movies:`, error);
    return [];
  }
};

export const getMovieTrailer = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/videos`);
    const videos = response.data.results;
    // Find YouTube trailer
    const trailer = videos.find(video => 
      video.type === 'Trailer' && 
      video.site === 'YouTube'
    );
    return trailer;
  } catch (error) {
    console.error(`Error fetching trailer for movie ${movieId}:`, error);
    return null;
  }
};

export const getNowPlaying = () => getMovies('now_playing');
export const getUpcoming = () => getMovies('upcoming');
export const getTopRated = () => getMovies('top_rated');

export default api;