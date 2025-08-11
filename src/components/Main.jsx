import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./comps/home/Home";
import Shop from "./comps/shop/Shop";
import Buy from "./comps/shop/Buy";

function Main(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/buy-gift" element={<Buy/>}/>
            </Routes>
        </>
    )
}
export default Main;