import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const Hero = ({ siteTitle }) => (
    <section className="hero">
        <div className="hero-wrap">
            <div className="hero-text">
                <h1 className="hero-headline"><span className="lightWeight">The</span>Circuit</h1>
                <h2>Decoding <br/>the Cook County <br/>Court System</h2>
                <h3>The Circuit is a multi-yearlong collaborative journalism project focused on investigating and revealing the inner workings of the Cook County Circuit Court system.</h3>
            </div>
            <div className="hero-img">
            </div>
        </div>
    </section>
)

export default Hero