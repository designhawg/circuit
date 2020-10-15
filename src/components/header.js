import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles.css"


const Header = ({ siteTitle }) => (
  <header
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <nav>
      <div>
        <img className="" src={require('../images/circuit_block.png')} />
        <h1><span className="lightWeight">The</span>Circuit</h1>
      </div>
      <ul>
        <li><Link to="/">English</Link> / <Link to="es">Spanish</Link></li>
        <li><Link>About The Circuit</Link></li>



      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
