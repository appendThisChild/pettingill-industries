import React from "react"
import { Link } from "react-router-dom"

const Footer = props => {

    return(
        <footer className="footer">
            <main>
                {/* Any links */}
                <div>
                    <Link to="/website-development">Website Development</Link>
                    <Link to="/content-creation">Content Creation</Link>
                </div>
                <div>
                    <Link to="/holistic-healing">Holistic Healing</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </main>
            <div>
                <p>&#169; 2019 Pettingill Industries, All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;