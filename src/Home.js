import React from "react";
import { motion } from "framer-motion";

export default function Home() {

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
            <div>
                <div className="home-title">
                    <p>Alex Burgess</p>
                </div>
                <div className="img-alex">
                    <img src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/85243557_10157917846139512_3369766684003926016_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=tnszyYtIOQEAX_lD-OC&_nc_ht=scontent.fsyd4-1.fna&oh=28e0f352a7be73b269ae929ce79f4889&oe=5F43056F" alt="Alex Burgess"></img>
                </div>
            </div>
        </motion.div>
    );
}