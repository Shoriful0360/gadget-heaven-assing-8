
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";

const Product = ({ product,handleDelet }) => {
    const { product_image, price, product_title,product_id } = product || {}
    const {pathname}=useLocation()
    
    return (
    <div className='relative'>
          <Link to={`/Id/${product_id}`}>
        
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    className='w-72 h-40 rounded-md '
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col items-center mt-4 ">
                <h2 className="card-title">{product_title}</h2>
                <h2 className="card-title">Price: {price} $</h2>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
        </Link>
        {
            pathname==='/dashboard' && (<div onClick={()=>handleDelet(product_id)}   className='absolute z-40 -top-5 -right-5 p-2 cursor-pointer bg-warning rounded-full '><MdOutlineDeleteOutline className='text-3xl text-red-600' /></div>)
        }

    </div>
    );
};

export default Product;