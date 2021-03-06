import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  PopularMovies,
  Originals,
  LatestMovies,
  ComedyMovies,
  RomanceMovies,
} from "./Constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes>
        <Route
          index
          element={<RowPost url={Originals} title="Trending Movies" />}
        />
        <Route
          path="/comedymovies"
          element={<RowPost url={ComedyMovies} title="Comedy Movies" />}
        />
        <Route
          path="/popularmovies"
          element={<RowPost url={PopularMovies} title="Popular Movies" />}
        />
        <Route
          path="/latestmovies"
          element={<RowPost url={LatestMovies} title="Latest Movies" />}
        />
        <Route
          path="/romancemovies"
          element={<RowPost url={RomanceMovies} title="Romance Movies" />}
        />
      </Routes>
    </div>
  );
}

export default App;
