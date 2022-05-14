import styled from 'styled-components'

import { flex } from './../../Theme/styles'


export const Tags = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 3;
  ${flex("flex", "flex-start", "flex-start", "row", "wrap")}
  gap: 10px;
  & > p {
    background-color: #fed530;
    border-radius: 50px;
    padding: 3px 15px;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 3;
  color: #ccc;
  ul {
    ${flex("flex", "flex-start", "center", "row", "wrap")};
    gap: 30px;
    li > p {
      ${flex("flex", "flex-start", "center", "row", "wrap")};
      gap: 10px;
    }
  }
`;
