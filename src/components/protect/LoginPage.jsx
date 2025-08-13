import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./auth";
import { supabase } from "../DataBaseFecth";
// import { supabase } from "./supabaseClient";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const LoingFunction = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Fetch user from Supabase
        const { data, error } = await supabase
            .from("user")
            .select("*")
            .eq("email", username)
            .eq("pass", password) // For production, use hashed password
            .single();
        // console.log(data)

        setLoading(false);

        if (error) {
            alert("Invalid username or password");
            // console.log(error);
            // console.log("Loing faild");
        } else if (data) {
            login("my-secret-token"); 
            navigate("/");
        }
    };

    return (
        <div>
            <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-rose-500 mb-8 animate-bounce">
                    Welcome Back!
                </h2>
                <form onSubmit={LoingFunction} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold hover:bg-rose-600 transform transition hover:scale-105"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                {/* Already add this statement AnimatePage.js */}
                {/* <p className="text-center text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/auth")}
                        className="text-rose-500 cursor-pointer"
                    >
                        Sign Up
                    </span>
                </p> */}
            </div>
        </div>
    );
};

export default Login;
