import React, { useState, useCallback, useEffect, useMemo } from "react";
import CRUDRequest from "../../API";
import TitleComp from "../Title";
import { Container } from "./../../Theme/styles";
import Movie from "./../Movie";
import { SectionMovies, FiveMovies } from "./styleMovies";

const Movies = () => {

    const [moviesList, setMoviesList] = useState([]);

    const fetchData = useCallback(async () => {
      const res = await CRUDRequest.get(
        `/movie/popular?api_key=278dc390fe2dab0dcb2a2a1872dcc11f`
      );
      setMoviesList(res.data.results);
    }, []);

  const data = useMemo(() => {
    return moviesList.slice(0, 5).map((item, index) => {
      return (
        <Movie
          key={index}
          poster={item.poster_path}
          date={item.release_date}
          lang={item.original_language}
          title={item.title}
          id={item.id}
        />
      );
    });
  }, [moviesList]);

  useEffect(() => { 
    fetchData()
  }, [])

  return (
    <SectionMovies>
      <Container>
        <TitleComp crumbs={"Popular Movie"} text={"View More"} />
        <FiveMovies>{data}</FiveMovies>
      </Container>
    </SectionMovies>
  );
};

export default Movies;
