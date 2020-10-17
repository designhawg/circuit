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
        <div className="contain">
          <h5 className="label">AN INVESTIGATIVE JOURNALISM COLLABORATION</h5>
          <div className="footerOutlets">
            <a href="https://www.bettergov.org/" target="_blank"> 
              <img title="Better Government Association" alt="Better Government Association" src={require('../images/bga_invert.jpg')}/>
            </a>
            <a href="https://www.chicagoreporter.com/" target="_blank"> 
              <img title="Chicago Reporter" alt="Chicago Reporer" src={require('../images/reporter.jpg')}/>
            </a>
            <a href="https://www.injusticewatch.org/" target="_blank"> 
              <img title="Injustice Watch" alt="Injustice Watch" src={require('../images/injustice.jpg')}/>
            </a>
            <a href="https://datamade.us/" target="_blank"> 
              <img title="Datamade" alt="Datamade" src={require('../images/datamade.jpg')}/>
            </a>
            <a href="https://harris.uchicago.edu/" target="_blank"> 
              <img title="Harris Public Policy" alt="Harris Public Policy" src={require('../images/harris.jpg')}/>
            </a>
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
