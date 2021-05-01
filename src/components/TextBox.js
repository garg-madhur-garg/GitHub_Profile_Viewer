import React, { useState } from 'react'
import './TextBox.css'

function TextBox() {

    const [data, setData] = useState("");

    let originalName = data.split(' ').join('');

    const show = (data)=>{
        console.log(data);
        document.getElementById("display").innerHTML = 
        `<div className="container">
            <img src=${data.avatar_url} alt="avatar"/>
            <h2>Bio: ${data.bio}</h2>
            <h2>Followers: ${data.followers}</h2>
            <h2>Following: ${data.following}</h2>
            <h2>Location: ${data.location}</h2>
            <h2>Public Repo: ${data.public_repos}</h2>
            <a href="https://www.github.com/${data.login}" target="_blank"><button>See Profile</button></a>
        </div>`
    }

    const search = (e)=>{

        fetch(process.env.REACT_APP_GITHUB_API+originalName)
        .then(response => response.json())
        .then(data => {
            if(data.message !== "Not Found"){
                show(data)
            }
            else{
                document.getElementById("display").innerHTML = "Not Found"
            }
        })

        e.preventDefault();

    }

    return (
        <div className="TextBox">
            <form>
                <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} required placeholder="Username" autoFocus/>
                <button onClick={search}>Search</button>
            </form>
        </div>
    )
}

export default TextBox
