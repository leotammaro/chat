import React,{useContext,useState,useEffect} from 'react';
import './App.scss';
import userContext from './contexts/User';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './views/Login';
import Home from './views/Home';
import Loading from './views/Loading';

function App() {
  const [user,setUser] = useState({});
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
     setUser(user)
     setLoading(false)
    });
  },[])

  return (
    <div className="App">
      <userContext.Provider value={user}>
        {loading ? <Loading></Loading> : 
            user ? <Home user={user}/> : <Login/>}
        
      </userContext.Provider>
    </div>
  );
}

export default App;
