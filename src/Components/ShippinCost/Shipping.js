import React from 'react';
import UseAuth from './../Hook/UseAuth';

const Shipping = () => {
    const {user} = UseAuth();
    return (
        <div className="container">
            <h1>this is my shipping components</h1>
            <p>{user.name}</p>
        </div>
    );
};

export default Shipping;