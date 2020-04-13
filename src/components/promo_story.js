import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const SecondaryPromo = ({ siteTitle }) => (

    <div className="promo-story">
        <img src={require('../images/placeholder-small.jpg')}/>
        <h3>Headline for associated stories two lines</h3>
        <p className="promo-intro">Subhead style for associated stories, two lines should be the limit.</p>
    </div>
    
)
export default SecondaryPromo