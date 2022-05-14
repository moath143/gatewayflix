import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  z-index: 2;
`;