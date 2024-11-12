
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
    //     <div className=''>
    //   <h1 className='text-bold text-5xl'>404</h1>
    //   <p className='text-xl font-semibold'>Page Not Found</p>
    //   <Link to="/" style={styles.homeLink}>Go Back to Home</Link>
    // </div>
    <div className='flex flex-col items-center justify-center min-h-[50vh]'>
        <h1 className='text-5xl font-bold'>404</h1>
        <p className='text-xl font-bold'>Page Not Found</p>
        <p className='text-xl font-bold'>Go to Home Page</p>
        <Link to={'/'}><button className='btn bg-warning'>Click</button></Link>
    </div>
    );
};

export default Error;