import React from "react"

import Layout from "../components/layout"
import HeaderEN from "../components/index_header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <div>
    <HeaderEN />
    <Hero />
    <SEO title="Home" />
        {data.allRestApi6046887E0770Da7B870275652C7D60F0CircuitCmsHome.nodes[0].home.map((home) => {
          return (
            <section className="feature-story">
              <img src={home.imageSrc}></img>
              <div>
                <a class="feature-link" href={home.link}>
                  <h2>{home.title}</h2>
                  <p className="feature-byline">{home.author} // {home.date}</p>
                  <p className="feature-intro" dangerouslySetInnerHTML={{__html: (home.subhead)}} />
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
