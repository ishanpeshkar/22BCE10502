import React from 'react'
import { useState, useEffect } from 'react';
import { fetchUsers } from '../Api/ApiService'; function TopUser() {
    const [users,setUsers] = useState([]);
    useEffect(()=> {
        fetchUsers().then((data) =>setUsers(data))
    },[]);
  return (
    <div>
        <h2>Top Users</h2>
    </div>
  );
};

export default TopUser