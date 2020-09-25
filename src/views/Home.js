import React from 'react';
import './Home.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

function Home({user}) {

    const logOut = ()=>{
        firebase.auth().signOut()
        .catch(()=>console.log("Log out Error"));
    };
 
    return (
         <div className="home-container">
            <div className="left-container">
                <div className="navbar-user">   
                    <img src={user.photoURL} alt="user-img" className="user-img"></img>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="log-out" onClick={logOut}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </div>
                <div className="chats">
                    
                </div>
            </div>
            <div className="chat-container"></div>
        </div>
    );
}

export default Home;
