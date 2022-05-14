import styled from "styled-components";
import { flex } from "./../../Theme/styles";


export const ExploreSection = styled.section`
  background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
  padding: 50px 0;
`;
export const SectionMovies = styled.section`
  ${flex("flex", "flex-start", "flex-start", "row", "wrap")};
  gap: 20px;
  margin: 50px 0;
  a {
    /* margin: 50px 0 50px 0; */
    position: relative;
    width: calc(100% / 3 - 20px);
    z-index: 1;
    height: 600px;
    img {
      width: 100%;
      z-index: 2;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ButtonWrapper = styled.div`
  ${flex("flex", "center", "center", "row", "nowrap")};
  margin-bottom: 50px;
`;

export const ButtonMore = styled.button`
  border: none;
  background: #fed530;
  color: #000;
  width: 15%;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  
`;
