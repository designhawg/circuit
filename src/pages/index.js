import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Promo from "../components/promo_teams"
import Newsletter from "../components/newsletter_wide"
import Feature from "../components/feature_story"
import SecondaryPromo from "../components/promo_story"



import "../components/styles.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Promo />
    <Feature />
    <Newsletter />
    <section className="secondary">
      <p class="label">Around The Circuit</p>
      <div className="promo-grid">
        <SecondaryPromo />
        <SecondaryPromo />
        <SecondaryPromo />
      </div>
    </section>
  </Layout>
)

export default IndexPage
