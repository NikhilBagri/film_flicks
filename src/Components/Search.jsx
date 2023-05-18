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
      setSearchResults(data.results.slice(0,6));
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
          className="text-white w-[230px] sm:w-[700px] text-xs sm:text-lg py-2 px-2 sm:px-2 sm:py-1 bg-black bg-opacity-50 "
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Added event handler here
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 w-[70px] sm:w-[100px] text-xs sm:text-lg py-2 sm:px-2 sm:py-1 cursor-pointer text-white hover:scale-110 ease-in duration-300"
        >
          Search
        </button>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((movie) => (
              <li className="cursor-pointer txt-xs sm:text-lg border-2 flex flex-col py-2 hover:bg-gray-700" key={movie.id}>{movie.title} ({movie.release_date})
              <p className="text-sm text-gray-400 ">⭐ {movie.vote_average}</p></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
