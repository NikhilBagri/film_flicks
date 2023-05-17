const key = "522758ce06e2724c9d370d734a741085";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestFind: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
  requestAdventure: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-&query=games&page=1`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-&query=heros&page=1`,
  requestCasualViewing: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-&query=new&page=2`,


};

export default requests;
