import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="promo-teams">
      <p class="label">An investigative journalism collaboration</p>
      <div className="teams">
        <a href="https://www.bettergov.org/">
          <img src={require('../images/bga_wide.png')}/></a>
        <a href="https://www.bettergov.org/">
          <img src={require('../images/reporter_logo.png')}/></a>
        <a href="https://www.bettergov.org/">
          <img src={require('../images/injustice_watch.png')}/></a>
        <a href="https://www.bettergov.org/">
          <img src={require('../images/datamade_logo.png')}/></a>
        <a href="https://www.bettergov.org/">
          <img src={require('../images/harris_school.png')}/></a>
      </div>
    </section>
    <section className="feature-story">
      <img src={require('../images/example.png')}/>
      <div>
        <p class="label">FEATURE STORY</p>
        <h2>Headline for  the visual story goes here</h2>
        <h3>Front page subhead style for feature package, could be three lines deep to help explain scope of project</h3>
      </div>
    </section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
