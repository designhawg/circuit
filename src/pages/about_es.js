import React from "react"

import AboutHeaderES from "../components/header_ES"
import Footer from "../components/footer"
import AboutES from "../components/about_text"

import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <div>
          <SEO title="Home" />

    <AboutHeaderES />
    <AboutES />
    <Footer />
  </div>
)

export const query = graphql`
  {
    allRestApi6046887E0770Da7B870275652C7D60F0CircuitCmsHome {
      nodes {
        home {
          author
          date
          id
          imageSrc
          link
          subhead
          title
        }
      }
    }
  }
`

export default IndexPage
