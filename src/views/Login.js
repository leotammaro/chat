import React from 'react';
import './Login.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return (
        <div className="login-container">
            <button className="login-button" onClick={()=>{
               firebase.auth().signInWithRedirect(provider);
                  
            }}>Login With Google</button>
        </div>
    )
}

export default Login
