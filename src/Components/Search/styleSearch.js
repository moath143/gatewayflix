import styled from 'styled-components'


export const Input = styled.input`
  border: 1px solid #fed530;
  color: #fff;
  background-color: #4c4c4c;
  outline: none;
  text-indent: 10px;
  width: ${(props) => props.width}%;
  padding: 10px 0;
  border-radius: 5px;
  margin-top: ${(props) => props.margin}px;
  &::placeholder {
    color: #fff;
    text-transform: capitalize;
  }
`;