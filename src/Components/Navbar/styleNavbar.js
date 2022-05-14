import styled from 'styled-components'

import {flex} from '../../Theme/styles'

export const Nav = styled.nav`
    background-color: transparent;
    padding: 20px 0;
    a{
      color: #fff;
    }
`

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
      color: #e6e6e6;
      &.active {
        color: #fff;
      }
    }
  }
`;



