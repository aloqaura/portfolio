import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {



    return(
        <div className="nav-links">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/portfolio">
                    <li>Portfolio</li>
                </Link>
                <Link to="/contact">
                    <li>Contacts</li>
                </Link>
            </ul>
        </div>
    );
}