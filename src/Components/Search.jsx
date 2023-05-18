import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    try {
      const apiKey = "522758ce06e2724c9d370d734a741085";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.results.slice(0,5));
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching search results.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Search input and results */}
      <div>
        <input
          className="text-white w-[230px] sm:w-[700px] text-xs sm:text-lg py-2 px-2 sm:px-2 sm:py-1 bg-black"
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Added event handler here
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 w-[70px] sm:w-[100px] text-xs sm:text-lg py-2 sm:px-2 sm:py-1 cursor-pointer text-white hover:bg-red-800 "
        >
          Search
        </button>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((movie) => (
              <li className="cursor-pointer text-xs sm:text-lg border-2 py-2 hover:bg-gray-700 flex justify-between items-center" key={movie.id}>{movie.title} ({movie.release_date})
              <img className="" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} width={100}/>
            
              
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
