import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendDetail = () => {
    const {friendId} =  useParams();
    const [friend,setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setFriend(data))
    },[])
    return (
        <div>
            <h2>This is friend details components {friendId}</h2>
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
            <h3>Phone: {friend.phone}</h3>
            <h4>Website: {friend.website}</h4>
        </div>
    );
};

export default FriendDetail;