/* eslint-disable no-unused-vars */
import React from 'react';
import './Users.css';
import { useLoaderData } from 'react-router-dom';


const Users = () => {
    const users = useLoaderData();
    const handleDeleteUser =(_id)=>{
        console.log('DELETE',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if (data.deletedCount === 1) {
                    console.log("Successfully deleted one document.");
                  } else {
                    console.log("No documents matched the query. Deleted 0 documents.");
                  }
            })
    }
   
    return (
        <div>
            <h2>Hello users!! : {users.length}</h2>
            <div className='user-info-container'>
                {
                    users.map(user =><p className='user-info' key={user._id}>
                            {user.name}:{user._id}:<button className='btn'
                            onClick={()=>handleDeleteUser(user._id)}
                            >Delete</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;
                            