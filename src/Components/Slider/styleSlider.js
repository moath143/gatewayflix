import styled from 'styled-components'


export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 88px);
  z-index: 1;
  img {
    height: calc(100vh - 88px);
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const Info = styled.div`
  position: absolute;
  z-index: 3;
  top: 10%;
  right: 10%;
  color: #fff;
  width: 30%;
  p {
    margin: 20px 0;
  }
`;