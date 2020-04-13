import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const Feature = ({ siteTitle }) => (

    <section className="feature-story">
      <img src={require('../images/example.png')}/>
      <div>
        <p class="label">FEATURE STORY</p>
        <h2>Headline for the visual story goes here</h2>
        <p className="feature-intro">Front page subhead style for feature package, could be three lines deep to help explain scope of project</p>
      </div>
    </section>
    
)
export default Feature