import React from "react"

import Layout from "../components/layout"
import HeaderES from "../components/header_ES"
import HeroES from "../components/hero_ES"
import Footer from "../components/footer_ES"
import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (
  <div>
    <SEO title="The Circuit" 
      keywords={[`Condado de Cook`, `Circuito de Cortes`, `datos para investigar`]} 
      image="https://circuitchicago.s3.us-east-2.amazonaws.com/OG-Datacard3.jpg"
      description="Una colaboración basada en datos para investigar y revelar cómo funciona el Circuito de Cortes del Condado de Cook."
    />
    <HeaderES />
    <HeroES />
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
