import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>GRB</Link>
          </div>
          <div className='menu py-8'>MENU</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
