
import React, { useContext, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../context API/AuthProvider';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from 'react-icons/go';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/Firebase.init';
const Login = () => {
  const googleProvider= new GoogleAuthProvider()
  const {logInUser,resetPassword}=useContext(authContext)
  const [showPassword,setShowPassword]=useState(false)
  const emailRef=useRef()
  const navigate=useNavigate()
    const handleLogIn=(e)=>{
      
        e.preventDefault()
        
        const password=e.target.password.value;
        const email=e.target.email.value;
        logInUser(email,password)
        .then((result)=>{
          console.log(result.user)
          navigate('/')
          e.target.reset
        })
        .catch(error=>{
          console.log(error.message)
        })
       
    }


    // forget pasword
    const handleForgetPassowrd=()=>{
      const email=emailRef.current.value
      if(!email){
        alert ('please set a valid email')
      }
      else{
        resetPassword(email)
        .then(()=>{
         alert('Resert password send your email,please check it')
        })
         .catch(()=>{
          
         })
      }
    
    }

    // login with google 
    const handleGoogleLogIn=()=>{
      signInWithPopup(auth,googleProvider)
      .then(()=>{
        navigate('/')
      })
      .catch(()=>{

      })
    }

    // login with facebook
    const handleFacebookLogIn=()=>{

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" ref={emailRef} className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword?'text':'password'} name='password' placeholder="password" className="input input-bordered" required />
                <div className='absolute right-2 top-[50px]'>
                  {
                    showPassword? <GoEyeClosed onClick={()=>setShowPassword(false)}></GoEyeClosed>:<FiEye onClick={()=>setShowPassword(true)}></FiEye>
                  }
                 
                  </div>
                <label className="label">
                  <a  onClick={handleForgetPassowrd} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           
            <div className="divider">Other log in options</div>
            <div className='flex justify-center gap-3 items-center'>
                  <div onClick={handleGoogleLogIn} className='p-2 rounded-md border-2'>
                    <FcGoogle className='text-3xl'></FcGoogle>
                  </div>
                  <div onClick={handleFacebookLogIn} className='p-2 rounded-md border-2'>
                    <FaFacebook className='text-3xl'></FaFacebook>
                  </div>
            </div>
            <h1>Don't have an account? <NavLink className={'text-blue-700'} to={'/signup'}>SignUp</NavLink></h1>
          </div>
        </div>
      </div>
    );
};

export default Login;