import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./comps/home/Home";
import Shop from "./comps/shop/Shop";
import ShopPage from "./comps/shop/ShopPage";
import ShopPages from "./comps/shop/ShopPages";
import Gallery from "./comps/gallary/Gallary";
import Blog from "./comps/blog/Blog";
import Footer from "./footer/Footer";
// import Test from "./Test";

function Main(){

    return(
        <>
            <Navbar/>
            {/* <h1>Main page contect </h1> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/" element={<Test/>}/> */}
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/buy-product" element={<ShopPage/>}/>
                <Route path="shop/buy-products" element={<ShopPages/>}/>
                <Route path="gallary" element={<Gallery/>}/>
                <Route path="blog" element={<Blog/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default Main;