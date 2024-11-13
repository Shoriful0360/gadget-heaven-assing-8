
import React, { useContext } from 'react';
import { authContext } from '../context API/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {user}=useContext(authContext)
  
    if(user){
        return children
    }
    return (
        <div>
      <Navigate to={'/signup'}></Navigate>
        </div>
    );
};

export default PrivateProvider;