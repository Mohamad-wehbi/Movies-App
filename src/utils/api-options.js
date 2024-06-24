import * as ApiConfig from "./api-config";

export const moviesOptions =(query) =>(
    {
     method: 'GET',
     url: `${ApiConfig.baseURL}/discover/movie`,
     params: {
       include_adult: 'false',
       include_video: 'false',
       language: query.lang,
       region:"10",
       page: query.page,
       sort_by: 'popularity.desc'
     },
     headers: {
       accept: 'application/json',
       Authorization: `Bearer ${ApiConfig.token}`
     }
})
 
export const famousMoviesOptions = () => ({
     method: 'GET',
     url: `${ApiConfig.baseURL}/discover/movie`,
     params: {
       include_adult: 'false',
       include_video: 'false',
       language: 'en-US',
       page: '1',
       sort_by: 'vote_count.desc'
     },
     headers: {
       accept: 'application/json',
       Authorization: `Bearer ${ApiConfig.token}`
     }
});
 
export const movieDetailsOptions = (movieId) => ({
     method: 'GET',
     url: `${ApiConfig.baseURL}/movie/${movieId}`,
     params: {language: 'en-US'},
     headers: {
       accept: 'application/json',
       Authorization: `Bearer ${ApiConfig.token}`
     }
});
 
export const movieImgagesOptions = (movieId) => ({
   method: 'GET',
   url: `${ApiConfig.baseURL}/movie/${movieId}/images`,
   headers: {
     accept: 'application/json',
     Authorization: `Bearer ${ApiConfig.token}`
   }
});
 
export const videosOptions = (movieId) => ({
     method: 'GET',
     url: `${ApiConfig.baseURL}/movie/${movieId}/videos`,
     params: {language: 'en-US'},
     headers: {
       accept: 'application/json',
       Authorization: `Bearer ${ApiConfig.token}`
     }
});
 