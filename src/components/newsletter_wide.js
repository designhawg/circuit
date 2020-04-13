import { Link } from "gatsby"
import React from "react"

import "./styles.css"

const Newsletter = ({ siteTitle }) => (
    <section className="promo-newsletter">
        <img src={require('../images/circuit_block.png')} />
        <div>
            <h3>Follow the data</h3>
            <p>Subscribe to our free newsletter to receive the latest updates about The Circuit project.</p>
            <form>
                <div className="form-wrapper">
                <input
                    placeholder="Email address"
                    name="email"
                    type="text"
                />
                <button type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    </section>
)

export default Newsletter