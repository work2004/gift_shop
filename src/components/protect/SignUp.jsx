import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./auth";
import { supabase } from "../DataBaseFecth";

function SignUp() {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (pass !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setLoading(true);
        const { data, error } = await supabase.from("user").insert([
            {
                name,
                email,
                pass,
                phone,
                address,
                state,
            },
        ]);

        setLoading(false);

        if (error) {
            console.log(error);
            alert("Error creating account. Try again!");
        } else {
            login("my-secret-token");
            navigate("/");
        }
    };
    const stateIndian = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Delhi",
        "Jammu & Kashmir",
        "Ladakh",
        "Puducherry",
    ];

    return (
        <div >
            <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-rose-500 mb-8 animate-bounce">
                    Create Account
                </h2>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => setPassword(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="peer w-full border-b-2 border-gray-300 focus:border-rose-500 outline-none p-2"
                            required
                            list="states"
                        />
                        <datalist id="states">
                            {
                                stateIndian.map((state)=>{
                                    return(
                                        <option value={state} />
                                    )
                                })
                            }
                            
                        </datalist>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold hover:bg-rose-600 transform transition hover:scale-105"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                {/* <p className="text-center text-gray-500 mt-6">
                    Already have an account?{" "}
                    <span
                        className="text-rose-500 cursor-pointer"
                        onClick={() => navigate("/auth")}
                    >
                        Login
                    </span>
                </p> */}
            </div>
        </div>
    );
}

export default SignUp;
