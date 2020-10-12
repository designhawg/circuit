import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Promo from "../components/promo_teams"
import Newsletter from "../components/newsletter_wide"
import Feature from "../components/feature_story"
import SecondaryPromo from "../components/promo_story"

import "../components/styles.css"


const IndexPage = ({ data }) => (

  <Layout>
    {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
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
  </Layout>
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
