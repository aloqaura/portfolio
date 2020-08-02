import React from "react";
import { motion } from "framer-motion";

export default function About() {

    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: -100
        }
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            <div className="about">
                <div className="about-title">
                    <p>The Journey</p>
                </div>
                <div className="portfolio-content">
                    <div>
                        <h2>
                            Say Hi!
                    </h2>
                        <p className="about-me">
                            Email: Alex_Burgess@outlook.com
                    </p>
                    </div>
                </div>
            </div> 
        </motion.div>
    );
}