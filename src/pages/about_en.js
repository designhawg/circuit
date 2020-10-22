import React from "react"

import AboutHeader from "../components/header"
import Footer from "../components/footer"
import AboutEN from "../components/about_text_en"

import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <div>
          <SEO title="Home" />

    <AboutHeader />
    <AboutEN />
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
