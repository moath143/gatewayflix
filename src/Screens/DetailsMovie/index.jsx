import React, { useState, useCallback, useEffect } from "react";
import Gallary from "../../Components/Gallary";
import ImageSlider from "../../Components/Slider";
import { useParams } from "react-router-dom";
import CRUDRequest from "../../API";
import ReactPlayer from "react-player";
import { VideosComp } from "./styleMovie";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const DetailsMovie = (props) => {
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState([]);

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const res = await CRUDRequest.get(
      `/movie/${id}?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&append_to_response=videos`
    );

    setMovie(res.data);
    setVideo(res.data.videos.results);
    console.log(video);
  }, []);

  const videoTrailer = video.map((vid, index) => {
    return (
      <ReactPlayer
        key={index}
        url={`https://www.youtube.com/watch?v=${vid.key}`}
        playing={false}
        controls
      />
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ImageSlider
        url={`https://image.tmdb.org/t/p/original`}
        key={id}
        back={movie.backdrop_path}
        date={movie.release_date}
        lang={movie.original_language}
        title={movie.title}
        vote={movie.vote_average}
        overview={movie.overview}
      />
      <Gallary />
      <VideosComp>

      {videoTrailer}
      </VideosComp>
    </>
  );
};

export default DetailsMovie;
