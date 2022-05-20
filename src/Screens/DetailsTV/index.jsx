import React from 'react'
import Gallary from "../../Components/Gallary";
import ImageSlider from "../../Components/Slider";
import { useParams } from "react-router-dom";
import CRUDRequest from "../../API";
import { VideosComp } from '../DetailsMovie/styleMovie';

const DetailsTV = () => {

  const [tvShow, setTvShow] = useState({});
  const [video, setVideo] = useState([]);

    const { id } = useParams();

    const fetchData = useCallback(async () => {
      const res = await CRUDRequest.get(
        `/tv/${id}/videos?api_key=278dc390fe2dab0dcb2a2a1872dcc11f&append_to_response=videos`
      );

      setTvShow(res.data);
      setVideo(res.data.videos.results);
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
  return (
    <>
      <ImageSlider
        key={id}
        back={tvShow.backdrop_path}
        date={tvShow.release_date}
        lang={tvShow.original_language}
        title={tvShow.title}
        vote={tvShow.vote_average}
        overview={tvShow.overview}
      />
      <Gallary />
      <VideosComp>{videoTrailer}</VideosComp>
    </>
  );
}

export default DetailsTV