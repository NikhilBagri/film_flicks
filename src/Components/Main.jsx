import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import Search from "./Search";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);


  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-[300px] sm:w-[800px] top-[19%] left-[12%] sm:top-[19%] sm:left-[22%] z-20 object-cover bg-black opacity-90"><Search  /></div>
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:scale-110 ease-in duration-300">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover:scale-110 ease-in duration-300">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
