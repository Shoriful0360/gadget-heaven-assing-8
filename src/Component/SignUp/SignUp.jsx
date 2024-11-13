
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { authContext } from '../context API/AuthProvider';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from 'react-icons/go';
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { createUser } = useContext(authContext)
  const handleSignUP = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox=e.target.terms.checked
    const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


    if (password.length < 6) {
      setError('password atleast 6 character')
      return;
    }
    if(!strongPassword.test(password)){
      setError('at least  one uppercase,one lowercase,one number and on special simble')
      return;
    }
    if(!checkbox){
      setError('check terms and conditon')
      return;
    }

    createUser(email, password, name)
      .then((result) => {

        navigate('/')
        e.target.reset
        toast.success('Successfully, sign up');
        setError('')
      })
      .catch(error => {
        setError('email already-in-use')

      })



  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUP} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input type="number" name='phone' placeholder="Phone" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
              <div className='absolute right-2 top-[50px]'>
                {
                  showPassword ? <GoEyeClosed onClick={() => setShowPassword(false)}></GoEyeClosed> : <FiEye onClick={() => setShowPassword(true)}></FiEye>
                }

              </div>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <input type="checkbox" name='terms'  className="checkbox" />
                <span className="label-text ">Accepted our terms and condition</span>
              </label>
            </div>
            <p className='text-lg text-red-600 font-semibold'>{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <h1>Already have an account? <NavLink className={'text-blue-700'} to={'/login'}>Login</NavLink></h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;