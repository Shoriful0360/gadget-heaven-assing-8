

import React, { useEffect, useState } from 'react';
import AddCart from '../Component/AddCart';
import WishListCart from '../Component/WishListCart';
import { getStoreDataList, getStoreWhistList, removeData, removeWishListstore } from '../utility/DataStore';
import Product from '../Component/Product';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import img from '../../src/assets/Group.png'

const Dashboard = () => {
    const location = useLocation('/dashboard')
    const allData = useLoaderData()
    const navigate = useNavigate()

    const [favorite, setFavorite] = useState([])
    const [wishFavorite, setWishFavorite] = useState([])
    const [active, setActive] = useState('null')
    const [disableCartPurchase,setDisableCartPurchase]=useState(false)
    const [disableWishPurchase,setDisableWishPurchase]=useState(false)

    const [wishPrice, setWishPrice] = useState(0)
    const [price, setPrice] = useState(0)
    // for modal useState
    const [isOpenModal, setIsOpenModal] = useState(false)
    useEffect(() => {
        const getData = getStoreDataList()
        const total = getData.reduce((acc, product) => acc + (product.price || 0), 0)
        setPrice(total)
        const getWishData = getStoreWhistList()
        const totalWish = getWishData.reduce((add, product) => add + (product.price || 0), 0)
        setWishPrice(totalWish)
        setWishFavorite(getWishData)

        setFavorite(getData)



    }, [getStoreDataList, getStoreWhistList])

    const handleCartAndWishlistBtn = (name) => {
       if(name==='wishList' && wishPrice===0){
            setDisableWishPurchase(true)
        
          
       }
       if(name==='cart' && price===0){
        disableCartPurchase(true)
        // setActive(name) 
   }
   setActive(name) 

    }


    const handleDelet = (Id) => {
        const del = removeData(Id)
        // setPrice(del)

        const getData = getStoreDataList()

        setFavorite(getData)
    }

    const handleDeletWishList = (Id) => {
        const del = removeWishListstore(Id)
        const getWish = getStoreWhistList()
        setWishFavorite(getWish)
    }
    const handleSortPrice = (name) => {
        if (name === 'cartSortPrice' ||'defaultPrice') {
            const sortPrice = [...favorite].sort((a, b) => a.price - b.price)
            setFavorite(sortPrice)

        }
        if (name === 'wishSortPrice' ) {
            const sortPrice = [...wishFavorite].sort((a, b) => b.price - a.price)
            setWishFavorite(sortPrice)

        }
    }


    // Modal functionality

    const handleAllDeleteData = (name) => {
        // Id.showModal()
        if (name === 'delet') {
            const remove = localStorage.removeItem('store')
            setPrice(0)
            const getData = getStoreDataList()
            setFavorite(getData)
            navigate('/')
        }



    }

    // foe wishList all data remove functionality 

    const handleWishDelet = (name) => {
        if (name === 'delet') {
            const remove = localStorage.removeItem('wishList')
            setWishPrice(0)
            const getWishData = getStoreWhistList()
            setWishFavorite(getWishData)
            navigate('/')
         
          

        }

    }




    return (
        <div className=''>
            <div className="hero  bg-[#9538E2] rounded-md min-h-[400px]">
                <div className=" text-center">
                    <div className="px-10 text-center">
                        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button onClick={() => handleCartAndWishlistBtn('cart')} className={`btn text-begoni ${active === 'cart' ? 'bg-warning' : ''} text-lg`}>Cart</button>
                        <button onClick={() => handleCartAndWishlistBtn('wishList')} className={`btn ml-4 text-begoni ${active === 'wishList' ? 'bg-warning' : ''} text-lg`}>WishList</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div><h1 className='text-xl font-semibold'>Cart: {
                    active === 'null' && (
                        favorite.length
                    )
                }
                    {
                        active === 'cart' && (
                            favorite.length
                        )
                    }
                    {
                        active === 'wishList' && (
                            wishFavorite.length
                        )
                    }

                </h1></div>
                <div className='flex gap-6 items-center'>
                    <h1 className='text-xl font-semibold'>Total cost:
                        {/* for default  value */}
                        {
                            active === 'null' && (
                                price.toFixed(2)
                            )
                        }
                        {/* for cart price */}
                        {
                            active === 'cart' && (
                                price.toFixed(2)
                            )
                        }
                        {/* for wishList price   */}
                        {
                            active === 'wishList' && (
                                wishPrice.toFixed(2)
                            )
                        }

                        $ <small></small></h1>
                        {/* sort price fuction start */}
                        {
                        active === 'null' && (
                            <button onClick={() => handleSortPrice('defaultSortPrice')} className='btn'>Sort by price </button>
                        )
                    }
                     {
                        active === 'cart' && (
                            <button onClick={() => handleSortPrice('cartSortPrice')} className='btn'>Sort by price </button>
                        )
                    }
                        {
                        active === 'wishList' && (
                            <button onClick={() => handleSortPrice('wishSortPrice')} className='btn'>Sort by price </button>
                        )
                    }
                        {/* sort price fuction end */}

                   

                    {/* Modal start */}
                    {
                        active === 'null' && (
                            <button
                                
                                className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                        )
                    }
                      {
                        active === 'cart' && (
                            <button
                                disabled={disableCartPurchase}
                                className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                        )
                    }
                      {
                        active === 'wishList' && (
                            <button
                                disabled={disableWishPurchase}
                                className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                        )
                    }
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box justify-center">
                            <div className='flex justify-center'>
                                <img src={img} alt="" />
                            </div>
                            <h3 className="font-bold text-lg">Confirm Purchase</h3>
                            <p className="py-4">Are you sure you want to complete the purchase? This action will clear the cart</p>
                            <h1 className='text-2xl font-bold'>Total Purchase:
                                {/* for default  value */}
                                {
                                    active === 'null' && (
                                        price.toFixed(2)
                                    )
                                }
                                {/* for cart price */}
                                {
                                    active === 'cart' && (
                                        price.toFixed(2)
                                    )
                                }
                                {/* for wishList price   */}
                                {
                                    active === 'wishList' && (
                                        wishPrice.toFixed(2)
                                    )
                                }$
                            </h1>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    {
                                        active === 'null' && (
                                            <button onClick={() => handleAllDeleteData('delet')} className="btn">Close</button>
                                        )
                                    }
                                    {/* for cart price */}
                                    {
                                        active === 'cart' && (
                                            <button onClick={() => handleAllDeleteData('delet')} className="btn">Close</button>
                                        )
                                    }
                                    {/* for wishList price   */}
                                    {
                                        active === 'wishList' && (
                                            <button onClick={() => handleWishDelet('delet')} className="btn">Close</button>
                                        )
                                    }

                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* Modal end */}

                </div>
            </div>
            <h1 className='text-4xl font-bold mt-4'>Add Your Favorite Card</h1>

            {/* for dashboard default card */}
            {
                active === 'null' && (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                            favorite.map(product => <Product handleDelet={handleDelet} key={product.produt_id} product={product}></Product>)
                        }
                    </div>
                )
            }

            {/* for dashboard show cart */}
            {
                active === 'cart' && (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                            favorite.map(product => <Product handleDelet={handleDelet} key={product.produt_id} product={product}></Product>)
                        }
                    </div>
                )
            }
            {/* for dashboard show wishList cart */}

            {
                active === 'wishList' && (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                            wishFavorite.map(product => <Product handleDelet={handleDeletWishList} key={product.produt_id} product={product}></Product>)
                        }
                    </div>
                )
            }



        </div>
    );
};

export default Dashboard;