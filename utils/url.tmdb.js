require('dotenv').config();

const { tmdb_api_key,
  tmdb_base_url, 
  tmdb_search_movie, 
  tmdb_movie_details, 
  tmdb_config,
  tmdb_popular_tv,
  tmdb_latest_tv,
  tmdb_top_tv,
  tmdb_tv_details,
  tmdb_lang,
  tmdb_movie_latest,
  tmdb_movie_popular,
  tmdb_movie_upcoming,
  tmdb_search_tv,
  tmdb_search 
} = process.env;

const configUrl = () => {
  return `${tmdb_base_url+tmdb_config}?api_key=${tmdb_api_key}`;
}
const latestMovieUrl = (lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_movie_latest}?api_key=${tmdb_api_key}&language=${lang}`;
}

const popularMovieUrl = (lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_movie_popular}?api_key=${tmdb_api_key}&language=${lang}`;  
}

const upcomingMovieUrl = (lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_movie_upcoming}?api_key=${tmdb_api_key}&language=${lang}`;  
}

const movieBySearchUrl = (keyword, page = 1, adult=false, lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_search_movie}?query=${keyword}&api_key=${tmdb_api_key}&page=${page}&language=${lang}&include_adult=${adult}`;
}

const movieByIdUrl = (id, lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_movie_details}/${id}?api_key=${tmdb_api_key}&language=${lang}`;
}

const latestTvUrl = () => {
  return `${tmdb_base_url+tmdb_latest_tv}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;
}

const popularTvUrl = () => {
  return `${tmdb_base_url+tmdb_popular_tv}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

const topRatedTvUrl = () => {
  return `${tmdb_base_url+tmdb_top_tv}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

const tvDetailsUrl = (tvId) => {
  return `${tmdb_base_url+tmdb_tv_details}/${tvId}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;
}

const seasonUrl = (tvId, seasonNum) => {
  return `${tmdb_base_url+tmdb_tv_details}/${tvId}/season/${seasonNum}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

const episodeUrl = (tvId, seasonNum, episodeNum) => {
  return `${tmdb_base_url+tmdb_tv_details}/${tvId}/season/${seasonNum}/episode/${episodeNum}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

const tvBySearchUrl = (keyword, page = 1, adult=false, lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_search_tv}?query=${keyword}&api_key=${tmdb_api_key}&page=${page}&language=${lang}&include_adult=${adult}`;
}

const multiBySearchUrl = (keyword, page = 1, adult=false, lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_search}?query=${keyword}&api_key=${tmdb_api_key}&page=${page}&language=${lang}&include_adult=${adult}`;
}

module.exports = {
  configUrl,
  movieBySearchUrl,
  movieByIdUrl,
  latestTvUrl,
  popularTvUrl,
  topRatedTvUrl,
  seasonUrl,
  episodeUrl,
  tvDetailsUrl,
  latestMovieUrl,
  popularMovieUrl,
  upcomingMovieUrl,
  tvBySearchUrl,
  multiBySearchUrl
}