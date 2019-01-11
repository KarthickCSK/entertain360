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
  tmdb_lang 
} = process.env;

const configUrl = () => {
  return `${tmdb_base_url+tmdb_config}?api_key=${tmdb_api_key}`;
} 
const movieBySearchUrl = (keyword, page = 1, lang = tmdb_lang) =>{
  return `${tmdb_base_url+tmdb_search_movie}?api_key=${tmdb_api_key}&page=${page}&language=${lang}`;
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

const seasonUrl = (tvId, seasonId) => {
  return `${tmdb_base_url+tmdb_tv_details}/${tvId}/season/${seasonId}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

const episodeUrl = (tvId, seasonId, episodeId) => {
  return `${tmdb_base_url+tmdb_tv_details}/${tvId}/season/${seasonId}/episode/${episodeId}?api_key=${tmdb_api_key}&language=${tmdb_lang}`;  
}

module.exports = {
  configUrl,
  movieBySearchUrl,
  movieByIdUrl,
  latestTvUrl,
  popularTvUrl,
  topRatedTvUrl,
  seasonUrl,
  episodeUrl
}