import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import CRUDRequest from "../../API";
import { Typography } from "../../Theme/styles";
import { Overlay } from "../Hero/styleHero";
import { Info, Tags } from "./styleMovie";

const Movie = (props) => {
  const [genre, setGenre] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await CRUDRequest.get(
      `/movie/${props.id}/keywords?api_key=278dc390fe2dab0dcb2a2a1872dcc11f`
    );
    setGenre(res.data.keywords);
  }, []);

  const data = useMemo(() => {
    return genre.slice(0, 2).map((item, index) => {
      return (
        <Typography key={index} as="p" color={"black"} size={14} weight={400} height={24}>
          {item.name}
        </Typography>
      );
    });
  }, [genre]);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Link to={`/movie/${props.id}`}>
      <Overlay></Overlay>
      <Tags>{data}</Tags>
      <img src={`https://image.tmdb.org/t/p/original${props.poster}`} />
      <Info>
        <ul>
          <li>
            <Typography>
              <i className="fa-solid fa-calendar-days"></i>
              {props.date}
            </Typography>
          </li>
          <li>
            <Typography>
              <i className="fa-solid fa-globe"></i>
              {props.lang}
            </Typography>
          </li>
        </ul>
        <Typography size={48} weight={400} height={64}>
          {props.title}
        </Typography>
      </Info>
    </Link>
  );
};

export default Movie;
