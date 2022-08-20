import React from 'react';
import UseAuth from '../Hook/UseAuth';

const Home = () => {
    const {user} = UseAuth()
    return (
        <div className="text-center">
            <h1>User :{user.name}</h1>
        </div>
    );
};

export default Home;