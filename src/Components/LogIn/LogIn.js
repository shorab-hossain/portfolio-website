import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from './../Hook/UseAuth';


const LogIn = () => {
    const {signInUsingGoogle,signInWithGithub,signInWithFacebook} = UseAuth();
    return (
        <div className='container  m-4 mx-auto d-flex justify-content-center'>
          <div>
                <button onClick={signInUsingGoogle} className='btn btn-success mx-4 ' type="submit">Google Sign In</button><br/><br/>
                <button onClick={signInWithGithub} className='btn btn-success mx-4 ms-3' type="submit">Github Sign In</button><br/><br/>
                <button onClick={signInWithFacebook} className='btn btn-success mx-4 ms-3' type="submit">Sign In Facebook</button><br/>
           <div className="mt-3">
                 <Link className="fw-bold" to="/register">New User ?</Link>
           </div>
        </div>
     </div>
    );
};

export default LogIn;