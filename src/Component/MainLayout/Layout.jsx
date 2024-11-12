

import React, { createContext, useState } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { Toaster } from 'react-hot-toast';
export const countContext = createContext(null)
export const wishCountContex=createContext(null)

const Layout = () => {

    const [count, setCount] = useState(0)
    const [wishCount,setWishCount]=useState(0)

    return (
        <div>
            <wishCountContex.Provider value={{wishCount,setWishCount}}>
            <countContext.Provider value={{count, setCount}}>
                <Toaster></Toaster>
                <div className='h-4'>
                    <Navbar></Navbar>
                </div>
                <div className='min-h-[calc(100vh-250px)] mx-auto py-10'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </countContext.Provider>
            </wishCountContex.Provider>
        </div>
    );
};

export default Layout;