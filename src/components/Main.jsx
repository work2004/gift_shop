import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./comps/home/Home";
import Shop from "./comps/shop/Shop";
import Buy from "./comps/shop/Buy";
// import Test from "./Test";

function Main(){
    return(
        <>
            <Navbar/>
            {/* <h1>hello</h1> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/" element={<Test/>}/> */}
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/buy-gift" element={<Buy/>}/>
            </Routes>
        </>
    )
}
export default Main;