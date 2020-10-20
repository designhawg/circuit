import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"

import "./styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-contain">
          <div className="footer-left">
            <h5 className="label">AN INVESTIGATIVE JOURNALISM COLLABORATION</h5>
            <div className="footerOutlets">
              <a href="https://www.bettergov.org/" target="_blank"> 
                <img title="Better Government Association" alt="Better Government Association" src={require('../images/BGA.png')}/>
              </a>
              <a href="https://www.chicagoreporter.com/" target="_blank"> 
                <img title="Chicago Reporter" alt="Chicago Reporer" src={require('../images/CR.png')}/>
              </a>
              <a href="https://www.injusticewatch.org/" target="_blank"> 
                <img title="Injustice Watch" alt="Injustice Watch" src={require('../images/IW.png')}/>
              </a>
              <a href="https://datamade.us/" target="_blank"> 
                <img title="Datamade" alt="Datamade" src={require('../images/DM.png')}/>
              </a>
              <a href="https://harris.uchicago.edu/" target="_blank"> 
                <img title="Harris Public Policy" alt="Harris Public Policy" src={require('../images/HPP.png')}/>
              </a>
            </div>
            <p>Copyright 2020</p>
          </div>
          <div className="footer-right">
            <img alt="The Circuit logo" src={require('../images/circuit_block.png')} />

          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
