import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/protect/LoginPage";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import Main from "./components/Main";
import Home from "./components/comps/home/Home";
import Shop from "./components/comps/shop/Shop";
import ShopPage from "./components/comps/shop/ShopPage";
import ShopPages from "./components/comps/shop/ShopPages";
import Blog from "./components/comps/blog/Blog";
import Gallary from "./components/comps/gallary/Gallary";
import SignUp from "./components/protect/SignUp";
import AnimatePage from "./components/protect/AnimatePage";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Routes>
                {/* <Route path="/users" element={<AnimatePage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUp />} /> */}
                <Route path="/login" element={<Navigate to="/users" replace />} />
                <Route path="/sign-up" element={<Navigate to="/users" replace />} />
                <Route path="/users" element={<AnimatePage />} />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="shop/buy-product" element={<ShopPage />} />
                        <Route path="shop/buy-products" element={<ShopPages />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="gallary" element={<Gallary />} />
                        <Route path="/users" element={<AnimatePage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
