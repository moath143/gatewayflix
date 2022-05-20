import React, {useState, useEffect} from 'react'
import './tvShow'
import { Container } from '../../Theme/styles'
import CRUDRequest from '../../API'
import Movie from '../../Components/Movie'
import {
  ButtonMore,
  ButtonWrapper,
  SectionMovies,
  ExploreSection,
} from "../ExploreMovie/styleExploreMovie";
import TitleComp from '../../Components/Title'
import Search from '../../Components/Search'

/*
https://api.themoviedb.org/3/tv/popular?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&language=en-US&page=1


*/

const TVShow = () => {
    const [tvShow, setTvShow] = useState([])
    const[page, setPage] = useState(1)
    const fetchData = async () => {
      const res = await CRUDRequest.get(
        `/tv/popular?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&language=en-US&page=${page}`
      );
      console.log(res.data.results);
      setTvShow([...tvShow, ...res.data.results]);
    }

    const data = tvShow.map((item, index) => {
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
    })

    const handlePage = () => {
        console.log('page')
        setPage(page + 1)
        console.log(page)
    }

    useEffect(() => {
      fetchData();
    }, [page]);
  return (
    <ExploreSection>
      <Container>
        <TitleComp crumbs={"TV-Shows"} home={"Home"} />
        <Search
          margin={50}
          width={50}
          type={"text"}
          placeholder={"Search your TV Show"}
        />
        <SectionMovies>{data}</SectionMovies>
        <ButtonWrapper>
          <ButtonMore onClick={handlePage}>Load More....</ButtonMore>
        </ButtonWrapper>
      </Container>
    </ExploreSection>
  );
}

export default TVShow