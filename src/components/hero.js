import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const Hero = ({ siteTitle }) => (
    <section className="hero">
        <div className="hero-text">
            <h1 className="hero-headline"><span className="lightWeight">The</span>Circuit</h1>
            <h2>Decoding <br/>the Cook County <br/>Court System</h2>
            <h3>Subhed style for use in associated packages. Diam, magna sit augue nec. Lacus pretium sed lacinia.</h3>
        </div>
        <div className="hero-img">
        </div>
    </section>
)

export default Hero