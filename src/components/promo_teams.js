import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const Promo = ({ siteTitle }) => (

    <section className="promo-teams">
      <p class="label">An investigative journalism collaboration</p>
      <div className="teams">
        <a href="https://www.bettergov.org/" target="_blank">
          <img src={require('../images/bga_wide.png')}/></a>
        <a href="https://www.chicagoreporter.com/" target="_blank">
          <img src={require('../images/reporter_logo.png')}/></a>
        <a href="https://www.injusticewatch.org/" target="_blank">
          <img src={require('../images/injustice_watch.png')}/></a>
        <a href="https://datamade.us/" target="_blank">
          <img src={require('../images/datamade_logo.png')}/></a>
        <a href="https://harris.uchicago.edu" target="_blank">
          <img src={require('../images/harris_school.png')}/></a>
      </div>
    </section>
)
export default Promo