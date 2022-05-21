import styled from 'styled-components'

import {flex} from '../../Theme/styles'

export const Nav = styled.nav`
  /* background-color: transparent; */
  background-color: ${(props) => props.theme.body.background};
  padding: 20px 0;
  box-shadow: ${(props) => props.theme.footer.shadow};
  position: relative;
  a {
    /* color: #fff; */
    color: ${(props) => props.theme.text.secondary};
  }
`;

export const Wrapper = styled.section`
  ${flex("flex", "space-between", "center", "row")};
`;

export const Ul = styled.ul`
  ${flex("flex", "space-between", "center", "row")};
  width: 30%;
  li {
    padding: 10px 0;
    transition: all 0.5s;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #fed530;
    }
    a {
      /* color: #e6e6e6; */
      ${(props) => props.theme.text.secondary}
      &.active {
        color: #fff;
      }
    }
  }
`;



