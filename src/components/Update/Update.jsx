/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            <h1>Updated info for : {loadedUsers.name} </h1>
        </div>
    );
};

export default Update;