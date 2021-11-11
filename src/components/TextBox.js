import React, { useState } from 'react'
import './TextBox.css'
import { BsSearch } from "react-icons/bs";
import ReactDOM from 'react-dom';

function TextBox() {

    const [data, setData] = useState("");

    let originalName = data.split(' ').join('');

    const show = (data)=>{
        console.log(data);
        const profile = (
        <div className="profile-container">
            <div className="profile-img">
                <img src={data.avatar_url} alt="avatar"/>
            </div>
            <ul className="profile-follow">
                <li>Followers: {data.followers}</li>
                <li>Following: {data.following}</li>
            </ul>
            <h2>Bio: {data.bio}</h2>
            <h2>Location: {data.location}</h2>
            <h2>Public Repo: {data.public_repos}</h2>
            <a className="profile-link" href={'https://www.github.com/'+ data.login} target="_blank">
                <button className="profile-btn">See Profile</button>
            </a>
        </div> );
        ReactDOM.render(profile, document.getElementById('display'));
    };

    const search = (e)=>{
        fetch("https://api.github.com/users/"+originalName)
        .then(response => response.json())
        .then(data => {
            if(data.message !== "Not Found"){
                show(data);
            }
            else{
                document.getElementById("display").innerHTML = "Not Found"
            }
        });

        e.preventDefault();
    }

    return (
        <div className="TextBox">
            <form className="search-form">
                <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} required placeholder="Username" autoFocus/>
                <button onClick={search}><BsSearch /></button>
            </form>
        </div>
    )
}

export default TextBox
