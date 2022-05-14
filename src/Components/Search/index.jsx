import React from 'react'
import { Input } from './styleSearch';

const Search = (props) => {
  return (
    <>
      <Input margin={props.margin} width={props.width} type={props.type} placeholder={props.placeholder} />
    </>
  );
}

export default Search