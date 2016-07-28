import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  //This little center break is just a little visual seperator.
  return (
    <nav>
      <div className="navbar">
        <IndexLink to="/" activeClassName="active" >Home</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </div>
    </nav>
  );
};

export default Header;
