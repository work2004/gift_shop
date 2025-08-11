import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./comps/home/Home";

function Main(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<h1>About page</h1>}/>
            </Routes>
        </>
    )
}
export default Main;