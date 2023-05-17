import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowID="2" title="Casual Viewing" fetchURL={requests.requestCasualViewing}  />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Today's Find For You" fetchURL={requests.requestFind} />
      <Row rowID="6" title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row rowID="7" title="Adventure" fetchURL={requests.requestAdventure} />
      <Row rowID="8" title="Action" fetchURL={requests.requestAction} />
    </div>
  );
};

export default Home;
