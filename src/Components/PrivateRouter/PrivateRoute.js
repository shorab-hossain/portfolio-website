import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from './../Hook/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} = UseAuth();
    
    return (

        user.email ? <Outlet></Outlet> : <Navigate to='/logIn'></Navigate>
      
      //   <Route
      //   {...rest}
      //   render={({ location }) =>
      //    user.email ? (
      //       children
      //     ) : (
      //       <Redirect
      //         to={{
      //           pathname: "/login",
      //           state: { from: location }
      //         }}
      //       />
      //     )
      //   }
      // />
    );
};

export default PrivateRoute;