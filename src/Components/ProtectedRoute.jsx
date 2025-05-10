import React from 'react'
import { Outlet,Navigate } from 'react-router';


const authUser = () => {
    const user ={login : true}; 


    return user && user.login
};




const Protect = () => {

    const isAuth = authUser();
    return isAuth? <Outlet /> : <Navigate to="/login" replace />;
  return (
    <div></div>
  )
}

export default Protect