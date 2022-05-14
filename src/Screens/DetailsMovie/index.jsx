import React, { useState, useCallback, useEffect, useMemo } from "react";
import Gallary from "../../Components/Gallary";
import ImageSlider from "../../Components/Slider";
import { Container } from "../../Theme/styles";
import { useLocation, useParams } from "react-router-dom";
import useSearchQuery from "./../../Utils/querySearch";
import CRUDRequest from "../../API";

const DetailsMovie = (props) => {
  const [movie, setMovie] = useState({});

  const { id } = useParams()


  const fetchData = useCallback(async () => {
    const res = await CRUDRequest.get(
      `/movie/${id}?api_key=278dc390fe2dab0dcb2a2a1872dcc11f`
    );

    setMovie(res.data);
    console.log(res.data);
  }, []);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ImageSlider
      key={id}
      back={movie.backdrop_path}
      date={movie.release_date}
      lang={movie.original_language}
      title={movie.title}
      vote={movie.vote_average}
      overview={movie.overview}
      />
      <Gallary />
    </>
  );
};

export default DetailsMovie;
