import React, { useState, useEffect, useMemo } from "react";
import Movie from "../../Components/Movie";
import Search from "../../Components/Search";
import TitleComp from "../../Components/Title";
import { Container } from "./../../Theme/styles";
import {
  ButtonMore,
  ButtonWrapper,
  SectionMovies,
  ExploreSection,
} from "./styleExploreMovie";
import CRUDRequest from "./../../API";


const ExploreMovie = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async () => {
    const res = await CRUDRequest.get(
      `/movie/popular?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&page=${pageNumber}`
    );
    setMoviesList([...moviesList, ...res.data.results]);
  };

  const data =  moviesList.map((item, index) => {
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

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

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
