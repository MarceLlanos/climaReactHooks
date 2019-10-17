import React from 'react';

const Header = ({title}) => {
  return ( 
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a href="#!" className="brand-logo">{title}</a>
      </div>
    </nav>
  );
}
 
export default Header;