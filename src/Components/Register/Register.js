import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mx-4 my-3">
              <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
         </div>
            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
         </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link className='mt-3 fs-3 fw-bold' to="/logIn">Already Register ?</Link>
        </div>
    );
};

export default Register;