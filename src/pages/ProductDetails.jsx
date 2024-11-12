
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import addLocalStorageData, { getStoreDataList,addWishlistStoreData }  from '../utility/DataStore';

import { countContext, wishCountContex } from '../Component/MainLayout/Layout';

const ProductDetails = ({handleTotalAmount}) => {
  const {count,setCount}=useContext(countContext)
  const{wishCount,setWishCount}=useContext(wishCountContex)

  

  const {id}=useParams();
  const allProductData=useLoaderData()
 const [product,setProduct]=useState({});
 const {category,description,price,product_image,product_title,rating,specification}=product

 const [active ,setActive]=useState(false)
 const [WishActive,setWishActive]=useState(false)
 useEffect(()=>{
const productId=[...allProductData].find(productId=>productId.product_id===parseInt(id))
if(productId){
  setProduct(productId)
}
else {
  setProduct({})
}


// const addListCart=getStoreDataList()
// const isExis=addListCart.find(Id=>Id.product_id===productId.product_id)
// if(isExis){
//   setActive(true)
// }
 },[])


 const handleStorage=(data)=>{

 addLocalStorageData(data)
 setCount((prev)=> prev + 1)
  
  setActive(true)




 }
 const handleWishlistStorageData=(Id)=>{
  addWishlistStoreData(Id)
  setWishCount((prev)=> prev + 1)
  
  setWishActive(true)
  
 }
 
 

    return (
      <div>
           <div className="hero  bg-[#9538E2] rounded-md min-h-[600px]">
        <div className=" text-center">
            <div className="px-10 text-center">
                <h1 className="text-5xl font-bold text-white">Product Details</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
              
            </div>
        </div>
    </div>
        
        <div className="hero  bg-base-200 lg:w-8/12 w-10/12 rounded-md mx-auto -mt-32">
  <div className="hero-content flex-col  lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm rounded-lg  shadow-2xl" />
    <div className='space-y-3'>
      <h1 className="sm:text-5xl text-xl font-bold">{product_title}</h1>
      <h2 className='text-xl font-semibold'>Price: {price} $</h2>
      <button className='btn bg-success text-white text-base'>In stock</button>
      <h2 className='text-xl font-semibold'>Descripiton: {description}</h2>
      <div>
        {
          specification?.map((item,idx)=><li key={idx} className='list-none'>{item}</li>)
        }
      </div>
     
      
      <h2 className='text-xl flex text-center items-center gap-3 justify-center font-semibold'>Rating: {rating} <FaRegStar className='bg-warning' /> </h2>
      <button
      disabled={active}
      onClick={()=>handleStorage(product)}  className="btn btn-primary">Add to card</button>
      <button
      disabled={WishActive}
      onClick={()=>handleWishlistStorageData(product)}  className="btn btn-primary ml-3">WishList</button>
    </div>
  </div>
</div>
      </div>
       
 
    );
};

export default ProductDetails;