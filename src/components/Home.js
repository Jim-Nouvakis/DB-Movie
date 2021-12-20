import React, { useState, useEffect } from "react";

//API
import API from "../API";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "./HeroImage/Index";
import Thumb from "./Thumb/Index";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

//image
import NoImage from "../images/no_image.jpg";

import Grid from "./Grid/index";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

if(error) return <div>Something Went Wrong</div>


  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More"  callback= {() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
