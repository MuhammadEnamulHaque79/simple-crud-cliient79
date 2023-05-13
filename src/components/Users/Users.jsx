/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Users.css';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);

    const handleUserDelete =(_id)=>{
        console.log('DELETE',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE',
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deleteCount > 0){
                    alert('Users deleted successfully!!');
                }
                const remainingUsers = users.filter(user => user._id !== _id);
                    setUsers(remainingUsers);
              
            })
    }
    
    return (
        <div>
            <h1>Users : {users.length} </h1>
            <div  className='user-info'>
                    {
                        users.map(user =><p className='user' key={user._id}>
                            {user.name}:{user.email}:{user._id}
                            <Link to={`/update/${user._id}`}>
                            <button className='btn'>Update</button>
                            </Link>
                            <button onClick={()=>handleUserDelete(user._id)} className='btn'>Delete</button>
                        </p>)
                    }
            </div>
        </div>
    );
};

export default Users;

//67_7 start

