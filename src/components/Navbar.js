import React from "react";
import { Menu, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"; 

const Navbar = () => (
  <Menu>
    <Menu.Menu position="left">
      <Icon name="book" bordered size="large" inverted color="red" />
    </Menu.Menu>
    <Menu.Menu position="right">
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/game">
      <Menu.Item>
        Game
      </Menu.Item>
    </Link>
    </Menu.Menu>
  </Menu>
);

export default Navbar;