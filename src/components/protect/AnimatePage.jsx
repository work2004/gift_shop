import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from "./LoginPage";
import SignUp from "./SignUp";

const AnimatePage = () => {
    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
        setShowLogin(!showLogin);
    };

    const slideVariants = {
        hiddenLeft: { opacity: 0, x: -200 },
        hiddenRight: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
        exitLeft: { opacity: 0, x: -200 },
        exitRight: { opacity: 0, x: 200 },
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            <div className="relative w-full max-w-md">
                {showLogin ? (
                    <motion.div
                        key="login"
                        initial="hiddenLeft"
                        animate="visible"
                        exit="exitRight"
                        variants={slideVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <Login />
                        <p
                            className="text-center mt-4 text-white cursor-pointer"
                            onClick={handleToggle}
                        >
                            Don't have an account? <span className="underline">Sign Up</span>
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="signup"
                        initial="hiddenRight"
                        animate="visible"
                        exit="exitLeft"
                        variants={slideVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <SignUp />
                        <p
                            className="text-center mt-4 text-white cursor-pointer"
                            onClick={handleToggle}
                        >
                            Already have an account? <span className="underline">Login</span>
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AnimatePage;
