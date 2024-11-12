
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


const CategorySideBar = ({categories}) => {
 
  const navigate=useNavigate()
    return (
      <div>
        
          <div className=' '>
            <div className=' flex flex-col  text-start text-lg font-semibold'>
            <h1 onClick={()=>navigate('/allProduct')} className='cursor-pointer'>All Product</h1>
              {
                categories.map(category=><NavLink key={category.product_id} to={`/category/${category.category}`}>{category.category}</NavLink>)
              }
            </div>
            
          
            {/* <Outlet></Outlet> */}
              
            
        </div>      
      </div>
    );
};

export default CategorySideBar;