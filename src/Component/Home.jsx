
import React from 'react';
import Banner from './Banner';
import CategorySideBar from './CategorySideBar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <h1 className='text-lg font-semibold py-5'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    <CategorySideBar categories={categories}></CategorySideBar>
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;