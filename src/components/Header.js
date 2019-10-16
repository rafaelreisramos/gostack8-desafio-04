import React, { Component } from 'react';

import logo from '../assets/facebook.png';

class Header extends Component {
  
  render() {
    return (
      <header>
        <nav>
          <img src={logo} />
          <ul>
            <li><span>Meu perfil</span></li>
            {/* https://materializecss.com/icons.html */}
            <li><i className="material-icons">account_circle</i></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;