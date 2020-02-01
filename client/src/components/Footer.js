import React from "react"
import { Link } from "react-router-dom"

const Footer = ({ color }) => {
    return(
        <footer className="footer" style={{backgroundImage: `radial-gradient(${color}, black)`}}>
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
                <p>&#169; {new Date().getFullYear()} Pettingill Industries, All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;