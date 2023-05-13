/* eslint-disable no-unused-vars */
import React from 'react';
import './Users.css';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);

    const handleUserDelete =(_id)=>{
        console.log('DELETE',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE',
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
    }
    
    return (
        <div>
            <h1>Users : {users.length} </h1>
            <div  className='user-info'>
                    {
                        users.map(user =><p className='user' key={user._id}>
                            {user.name}:{user.email}:{user._id}
                            <button onClick={()=>handleUserDelete(user._id)} className='btn'>Delete</button>
                        </p>)
                    }
            </div>
        </div>
    );
};

export default Users;

//67_7 start

