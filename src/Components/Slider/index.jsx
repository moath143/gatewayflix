import React from "react";
import { Typography } from "../../Theme/styles";
import { ImageSection, Overlay, Info } from "./styleSlider";

const ImageSlider = (props) => {
  return (
    <ImageSection>
      <Overlay></Overlay>
      <img src={`https://image.tmdb.org/t/p/original${props.back}`} />
      <Info>
        <Typography as="h1" weight={700} size={72} height={96}>
          {props.title}
        </Typography>
        <Typography as="p" weight={400} size={16} height={32} color={"#e6e6e6"}>
          {props.overview}
        </Typography>
        <ul>
          <li>
            <Typography as="p" weight={500} size={16} height={24}>
              Language: <span>{props.lang}</span>
            </Typography>
          </li>
          <li>
            <Typography as="p" weight={500} size={16} height={24}>
              Date: <span>{props.date}</span>
            </Typography>
          </li>
          <li>
            <Typography as="p" weight={500} size={16} height={24}>
              Ratins:
              <span>{props.vote }</span>
            </Typography>
          </li>
        </ul>
      </Info>
    </ImageSection>
  );
};

export default ImageSlider;
