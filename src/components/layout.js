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
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
