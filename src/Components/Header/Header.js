import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Hook/UseAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = UseAuth();
    return (
        <div className="container">
            <ul className='d-flex justify-content-center text-center'>
                   <li>
                    <Link className="nav-link active  menu-item" aria-current="page" to="/home">Home</Link>
                    </li>
                   <li>
                    <Link className="nav-link active  menu-item" aria-current="page" to="/shipping">Shipping</Link>
                    </li>
                   <li>
                    <Link className="nav-link active  menu-item" aria-current="page" to="/placeOrder">PlaceOrder</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active  fs-3 menu-item" to="/logIn">LogIn</Link>
                    <Link className="nav-link active  fs-3 menu-item" to="/register">Register</Link>
                    </li>
                    </ul>
                    {
                        user?.email && <div className='text-dark'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <img src={user.img} alt=""></img>
                        
                        </div>
                    }
                  <div className="d-flex justify-content-center">
                        <div>
                        {user?.email &&  <button onClick={logOut}  className="btn btn-success px-3 fw-bold text-dark"  type="submit">Log out</button>}
                        </div>
                  </div>
                </div>
    );
};

export default Header;