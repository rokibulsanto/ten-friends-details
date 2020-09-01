import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle ={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'15px'
    }
    const history = useHistory(); //evabew link er poriborte history hook use kore same kaj kora jabe
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    return (
        <div style ={friendStyle}>
            <h1>Name: {name}</h1>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}><button>Show details About {id}</button> </Link>
            <button onClick={() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;