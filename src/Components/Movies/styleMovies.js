import styled from "styled-components";
import { flex } from "./../../Theme/styles";

export const SectionMovies = styled.section`
  padding: 50px 0;
`;


export const FiveMovies = styled.div`
  ${flex("flex", "space-between", "flex-start", "row", "wrap")}
  margin-top: 50px;
  a {
    position: relative;
    width: calc(100% / 3 - 20px);
    z-index: 1;
    height: 600px;
    &:first-of-type {
      width: 66%;
    }
    &:nth-of-type(3) {
      margin-top: 30px;
    }
    &:nth-of-type(4) {
      margin-top: 30px;
    }
    &:nth-of-type(5) {
      margin-top: 30px;
    }
    img {
      width: 100%;
      z-index: 2;
      height: 100%;
      object-fit: cover;
    }
  }
`;




