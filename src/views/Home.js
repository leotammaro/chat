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
                <div className="chats"></div>
            </div>
            <div className="chat-container">
                <div className="navbar-chat"></div>
                <div className="chat"></div>
                <form className="message-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="emotes">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <input placeholder="Write message here" className="message"></input>
                    <button className="send-message">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{backgroundColor:"white"}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
