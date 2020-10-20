import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles.css"


const Header = ({ siteTitle }) => (
  <header className="header">
    <a href="/" class="nav-icon">
      <img alt="The Circuit logo" src={require('../images/circuit_block.png')} />
    </a>
  <input type="checkbox" className="menu-btn" id="menu-btn"/>
  <label className="menu-icon" for="menu-btn">    
  <span className="navicon"></span>
  </label>
  <ul className="menu">
    {/* <li><a>English</a> / <a>Español</a></li> */}
    <li><a href="https://charges.thecircuit.cc/">Explore the data</a></li>
    <li><a href="https://charges.thecircuit.cc/en/about/">About</a></li>
  </ul>
  {/* <img className="" src={require('../images/circuit_block.png')} /> */}
</header>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
