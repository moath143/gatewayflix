import React, { useState, useEffect, useCallback, useMemo } from "react";
import Movie from "../../Components/Movie";
import Search from "../../Components/Search";
import TitleComp from "../../Components/Title";
import { Container, Typography } from "./../../Theme/styles";
import {
  ButtonMore,
  ButtonWrapper,
  SectionMovies,
  ExploreSection,
} from "./styleExploreMovie";

import CRUDRequest from "./../../API";
import { Overlay } from "../../Components/Hero/styleHero";
import { Tags } from "./../../Components/Movie/styleMovie";
import { Info } from "./../../Components/Slider/styleSlider";
import { Link } from "react-router-dom";

const ExploreMovie = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = useCallback(async () => {
    const res = await CRUDRequest.get(
      `/movie/popular?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&page=${pageNumber}`
    );
    setMoviesList((prevState) => [...prevState, ...res.data.results]);
  }, []);

  const data = useMemo(() => {
    return moviesList.map((item, index) => {
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


  const handlePageNumber = useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ExploreSection>
      <Container>
        <TitleComp crumbs={"Movies"} home={"Home"} />
        <Search
          margin={50}
          width={50}
          type={"text"}
          placeholder={"Search your movies"}
        />
        <SectionMovies>{data}</SectionMovies>
        <ButtonWrapper>
          <ButtonMore onClick={handlePageNumber}>Load More....</ButtonMore>
        </ButtonWrapper>
      </Container>
    </ExploreSection>
  );
};

export default ExploreMovie;
