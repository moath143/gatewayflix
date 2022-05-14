import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSlider from "../Slider";
import CRUDRequest from "../../API";

const Hero = () => {
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
        <SwiperSlide key={index}>
          <ImageSlider
            key={index}
            back={item.backdrop_path}
            date={item.release_date}
            lang={item.original_language}
            title={item.title}
            vote={item.vote_average}
            overview={item.overview}
          />
        </SwiperSlide>
        // <Movie
        //   key={index}
        //   poster={item.poster_path}
        //   date={item.release_date}
        //   lang={item.original_language}
        //   title={item.title}
        // />
      );
    });
  }, [moviesList]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination
        autoplay={{ delay: 5000 }}
      >
        {data}
        {/* <SwiperSlide>
          <ImageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSlider />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Hero;
