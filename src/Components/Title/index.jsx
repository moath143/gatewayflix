import React from 'react'
import { Typography } from '../../Theme/styles';
import { Title } from './styleTitle';
import { Link } from 'react-router-dom';

const TitleComp = (props) => {
  return (
    <Title>
      <Typography size={48} weight={500} height={64} color={"white"}>
        <Link to='/'>{props.home? props.home + '/' : ''}</Link>{props.crumbs}
      </Typography>
      <Link to="/movies">
        <Typography size={24} weight={700} height={32}>
          {props.text}
        </Typography>
      </Link>
    </Title>
  );
}

export default TitleComp;