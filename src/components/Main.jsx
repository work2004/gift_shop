import React from 'react'
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Main(){
    return(
        <>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </>
    )
}
export default Main;