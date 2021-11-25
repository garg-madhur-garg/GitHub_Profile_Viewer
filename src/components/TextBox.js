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
                <div style={{height:"fit-content"}}>
                    <img height="250px" width="250px" src={data.avatar_url} alt="avatar"/>
                </div>
                <div className="login-lockup">
                    <h3>{data.name}</h3>
                    <h4>{data.login}</h4>
                </div>
            </div>
            <div className="profile-details">
            <div>
                    <ul className="profile-follow">
                        <li><b>Followers:</b> {data.followers}</li>
                        <li><b>Following:</b> {data.following}</li>
                    </ul>
                </div>
                {data.bio ? <><h2>Bio:</h2><p>{data.bio}</p></>  : null}
                {data.location ? <><h2>Location:</h2><p>{data.location}</p></> : null}
                {data.public_repos > 0 ? <h2>Public Repos: {data.public_repos}</h2> : null}
                {data.public_repos === 0 && !data.location && !data.bio ? <p className="no-data"><br />User has not completed their profile.</p> : null}
                <a className="profile-link" href={'https://www.github.com/'+ data.login} rel="noreferrer" target="_blank">
                    <button className="profile-btn">View Full Profile</button>
                </a>
            </div>
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
                ReactDOM.render(<div className="profile-container">Profile not found.</div>, document.getElementById('display'))
            }
        });

        e.preventDefault();
    }

    return (
        <div className="text-box">
            <form className="search-form">
                <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} required placeholder="Username" autoFocus/>
                <button onClick={search}><BsSearch /></button>
            </form>
        </div>
    )
}

export default TextBox
