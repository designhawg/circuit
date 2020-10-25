import React from "react"

import AboutHeader from "../components/header"
import Footer from "../components/footer"
import AboutEN from "../components/about_text_en"

import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <div>
    <SEO title="About The Circuit" 
      keywords={[`Cook County`, `Circuit Court`, `Data Journalism`]} 
      image="https://circuitchicago.s3.us-east-2.amazonaws.com/OG-Datacard3.jpg"
    />

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
