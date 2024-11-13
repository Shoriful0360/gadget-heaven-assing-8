import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const ProductCard = () => {
    const {category}=useParams();
    const [products,setProducts]=useState([]);
    const data=useLoaderData();
  

   
    useEffect(()=>{
      if(category){
        const productsFilter=[...data].filter(product=>product.category===category);
        setProducts(productsFilter)
      }
      else{
        setProducts(data.slice(0,6))
      }
    
        
     
    },[data,category])

   
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {
            products.map((product,idx)=><Product key={idx} product={product}></Product>)
          }
        </div>
    );
};

export default ProductCard;