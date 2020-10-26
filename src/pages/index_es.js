import React from "react"

import Layout from "../components/layout"
import HeaderEN from "../components/index_header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <div>
    <SEO title="The Circuit" 
      keywords={[`Cook County`, `Circuit Court`, `Data Journalism`]} 
      image="https://circuitchicago.s3.us-east-2.amazonaws.com/OG-Datacard3.jpg"
    />
    <HeaderEN />
    <Hero />
        {data.allRestApi6046887E0770Da7B870275652C7D60F0CircuitCmsHome.nodes[0].home.map((home) => {
          return (
            <section className="feature-story">
              <img src={home.imageSrcSp}></img>
              <div>
                <a class="feature-link" href={home.linkSp}>
                  <h2>{home.titleSp}</h2>
                  <p className="feature-byline">{home.authorSp} // {home.date}</p>
                  <p className="feature-intro" dangerouslySetInnerHTML={{__html: (home.subheadSp)}} />
                </a>
              </div>
            </section>
          )
        })}
    <Footer />
  </div>
)

export const query = graphql`
  {
    allRestApi6046887E0770Da7B870275652C7D60F0CircuitCmsHome {
      nodes {
        home {
          author
          authorSp
          date
          id
          imageSrc
          imageSrcSp
          link
          linkSp
          subhead
          subheadSp
          title
          titleSp
        }
      }
    }
  }
`

export default IndexPage
