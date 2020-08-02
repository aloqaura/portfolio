import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function Portfolio() {

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
            <div className="portfolio">
                <div className="portfolio-title">
                    <p>The Work</p>
                </div>
                <div className="portfolio-content">
                    <div>
                        <h2>
                            Welcome to the journey that started on the 18/05/2020
                    </h2>
                        <div className="major-project">
                            <ReactPlayer
                                width="1200px"
                                height="800px"
                                controls url="https://www.youtube.com/watch?v=Jcun3zmqfcg"
                                onReady={() => console.log("onReady callback")}
                                onStart={() => console.log("onStart callback")}
                                onPause={() => console.log("onPause callback")}
                                onEnded={() => console.log("onEnded callback")}
                                onError={() => console.log("onError callback")}
                            />
                        </div>
                        <p className="javascript-fundamentals-content">
                            Throughout this adventure I, and many others gained proficiency in the fundamentals of Javascript as represented in the following Github files:
                        <ul className="js-fundamentals-list">
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson1">Variables, String Concatenation, & String Interpolation</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson2">If Statements, Arrays, & Loops</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson3">Functions & Objects</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson4">Operators & Array Methods</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson5">String Extension Methods & Regular Expressions</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson6">Switch Statements & Classes</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson7">Classes (Getters, Setters & Inheritance), Hoisting, & Variable Scope</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson8">Default Values in Methods, Arrow Functions, & Throwing & Handling Exceptions</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson9">File System, JSON, Reading and Writing JSON Files, NPM Packages, & Using NPM Modules</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson10">Setting up a Project Structure</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWLesson11">Variables as Pointers, Dereferencing, Spread Syntax, HTTP Requests, Promises and async/await, & Test Driven Development</a></li>
                                <li><a href="https://github.com/aloqaura/ServiceNSWTest">Summary of all aquired Javascript fundamental skills, along with some further concepts</a></li>
                            </ul>
                        </p>
                        <div className="major-project">
                            <ReactPlayer
                                width="1200px"
                                height="800px"
                                controls url="https://www.youtube.com/watch?v=Jcun3zmqfcg"
                                onReady={() => console.log("onReady callback")}
                                onStart={() => console.log("onStart callback")}
                                onPause={() => console.log("onPause callback")}
                                onEnded={() => console.log("onEnded callback")}
                                onError={() => console.log("onError callback")}
                            />
                        </div>
                        <div className="major-project">
                            <ReactPlayer
                                width="1200px"
                                height="800px"
                                controls url="https://www.youtube.com/watch?v=RtME_Qk5OKc"
                                onReady={() => console.log("onReady callback")}
                                onStart={() => console.log("onStart callback")}
                                onPause={() => console.log("onPause callback")}
                                onEnded={() => console.log("onEnded callback")}
                                onError={() => console.log("onError callback")}
                            />
                        </div>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}