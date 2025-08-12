import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./comps/home/Home";
import Shop from "./comps/shop/Shop";
import ShopPage from "./comps/shop/ShopPage";
// import Test from "./Test";

function Main(){
    const demoProduct = {
    title: "Chocolate Cake",
    price: 599,
    image:
      "https://www.goldgiftideas.com/wp-content/uploads/2024/08/Brass-Shivling-with-Naag.jpg"
  };
    return(
        <>
            <Navbar/>
            {/* <h1>hello</h1> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/" element={<Test/>}/> */}
                <Route path="shop" element={<Shop/>}/>
                <Route path="shop/buy-product" element={<ShopPage product={demoProduct}/>}/>
            </Routes>
        </>
    )
}
export default Main;