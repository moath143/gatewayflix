import React, {useState} from "react";
import Switch from "react-switch";
import { Container, Typography } from "./../../Theme/styles";
import { Link, NavLink } from "react-router-dom";
import { Nav, Ul, Wrapper } from "./styleNavbar";
import Search from "../Search";

const Navbar = () => {
    const[checked, setChecked] = useState(false)

    const handleChange = (checked) => { 
        setChecked(checked)
    }

  return (
    <Nav>
      <Container>
        <Wrapper>
          <Typography
            as="h1"
            weight={700}
            size={"32"}
            height={"48"}
            color={"white"}
          >
            <Link to='/'>Gatewayflix</Link>
          </Typography>
          <Ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tv-show">TV Show</NavLink>
            </li>
            <li>
              <NavLink to="/video">Video</NavLink>
            </li>
          </Ul>
          <Search width={20} type="text" placeholder="search movie ...." />
          <Switch checked={checked} onChange={handleChange} />
        </Wrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
