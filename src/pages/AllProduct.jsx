
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Component/Product';

const AllProduct = () => {
    const allProducts=useLoaderData();
    
    return (
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
           {
            allProducts.map((product,idx)=><Product product={product}></Product>)
           }
        </div>
    );
};

export default AllProduct;