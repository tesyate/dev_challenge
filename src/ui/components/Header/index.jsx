import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Header extends React.PureComponent {

  render() {

    return (
      <header>
        <span>Here be a logo</span>
        <Link to="/" className="header_link">Top songs</Link>
        <Link to="/donate" className="header_link">Donate</Link>
      </header>
    );
  }
}

export default Header;
