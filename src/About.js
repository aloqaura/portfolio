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
                            Below You Will Find Me (Not Literally)
                    </h2>
                        <p className="about-me">
                            Hello! My name is Alex and I am a 21 year old trainee developer that
                            became interested in the craft due to being surrounded by technology
                            all my life. The idea of using Javascript, NPM and NodeJS, ReactJS, and
                            Visual Studio Code is incredible. Since I have worked in customer
                            service for 3 years and assist the public with online transactions
                            or queries, I can make it easier for the public to complete online
                            tasks, such as getting information, completing transactions, etc...
                            This concept also extends to my colleagues/employees, I found that
                            many systems can be unfriendly to the user and wish to change that for
                            the better. I am sure I can be of assistance, take a peek at my portfolio!
                    </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}